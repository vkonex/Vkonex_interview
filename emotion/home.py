
import os,sys,math,re,subprocess
from fer import Video,FER
import matplotlib.pyplot as plt
from collections import Counter
import speech_recognition as sr 
import moviepy.editor as mp
import pandas as pd
from PIL import Image
import mysql.connector as mc

import mysql.connector



mydb=mysql.connector.connect(host="vkonex.cbaonvzb17ll.ap-south-1.rds.amazonaws.com",user="admin",password="Admin306",database="vkonex_ai")
mycursor=mydb.cursor()



#convert digital data to binary data
def fetchvideo(id):
    qry=("""select videoID from recorde where C_id=%s""")
    mycursor.execute(qry, (id,))
    res=mycursor.fetchall()
    l = [item for t in res for item in t]
    #l3=["recorded","whatsapp"]
    l2=[]
    for i in l:
        path=r"../media-recorder-nodejs-master/videos/"
        path+=i
        path+=".mp4"
        #print(path)
        if os.path.exists(path):
            l2.append(path)
    #print(l2)    
    return l2

def Answer_similarity(video_list):

    def convert_videototext(v):
        clip = mp.VideoFileClip(v) 
        clip.audio.write_audiofile(r"converted.wav") #convert into audio wave
        r = sr.Recognizer()
        audio = sr.AudioFile("converted.wav")
        with audio as source:
            audio_file = r.record(source)
        result = r.recognize_google(audio_file)
        return result

    def findsimilarity(tx1,res):
        
        WORD = re.compile(r"\w+")
	    
        def get_cosine(vec1, vec2):
            intersection = set(vec1.keys()) & set(vec2.keys())
            numerator = sum([vec1[x] * vec2[x] for x in intersection])

            sum1 = sum([vec1[x] ** 2 for x in list(vec1.keys())])
            sum2 = sum([vec2[x] ** 2 for x in list(vec2.keys())])
            denominator = math.sqrt(sum1) * math.sqrt(sum2)

            if not denominator:
                return 0.0
            else:
                return float(numerator) / denominator

	
        def text_to_vector(text):
            words = WORD.findall(text)
            return Counter(words)
        #print(tx1,res)
        vector1 = text_to_vector(tx1)
        vector2 = text_to_vector(res)
        print(vector1,vector2)
        cosine = get_cosine(vector1, vector2)
       	return cosine
    
    
    # here i wants answers and video recorded file from database...
    #text1="hello good evening we are doing sominthing amezing but dont know wherer its came from"
    mycursor.execute("select Q_Answer from question_bank where Q_Type='general'")
    res=mycursor.fetchall()
    #print(res,"hey")
    l = [item for t in res for item in t]
    print(l)
    #l=["recorded.mp4","whatsapp.mp4"]
    v_list=video_list
    c,pred=0,0
    for i in range(len(v_list)):
        r=convert_videototext(v_list[i])
        pred+=findsimilarity(r,l[0])
    pred=pred/len(v_list) #this prediction (Answer similarity) will be store in database
    print(pred)

    format_float = "{:.2f}".format(pred)
    format_float=float(format_float)
    format_float*=100
    print("Similarity is =",format_float)
    return format_float
   

def foremotion(res,li,id):
    ress=str(res)
    #here i wants list of videos of same candidate. means recorded answer of candidate.
    f1="test.mp4"
    f2="recorded.mp4"
    #l1=[f1,f2]
    l1=li
    
    def anal(vid):
        video=Video(vid)
        detector = FER()
	    #mtcnn=TRUE
        raw_data = video.analyze(detector, display=False,save_fps=2,save_frames=False)
        # Convert to pandas for analysis
        df = video.to_pandas(raw_data)
        #df = video.get_first_face(df)
        df = video.get_emotions(df)
        return df
    print(l1)
    for i in l1:
        m=anal(i)
    print(m)   
    per=[]
    for i in m.columns:
        per.append(m[i].sum()/(m.sum().sum())*100)
    
    #positivity and negativity will store in database 
    positivity=(per[3]+per[5]+per[6])/3
    negativity=(per[0]+per[1]+per[2]+per[4])/4

    label=['angry', 'disgust', 'fear', 'happy', 'sad', 'surprise', 'neutral']
    mycolors=['red','pink','orange','cyan','lime','yellow','gray']  
    plt.figure(figsize =(10, 7))
    plt.pie(per, labels = label,colors=mycolors,autopct='%1.1f%%', radius= 1.0,startangle=90,textprops ={'fontsize':13}, pctdistance =0.70 )
    # Creating the donut shape for the pie
    centre_circle = plt.Circle((0,0), 0.45, fc='white')
    fig= plt.gcf()
    fig.gca().add_artist(centre_circle)
    plt.legend() 
                                                                                    
    #this figure also need to store in database..
    plt.savefig(f"static/{id}.png")
    img = Image.open(f"static/{id}.png")
    #convert image to binary data
    #img = convertToBinaryData(biodataFile)
    #"""def convertToBinaryData():
    with open(f"static/{id}.png",'rb') as file:
        binaryData = file.read()
    
    pos=float(positivity)
    neg=float(negativity)
    pos = "{:.2f}".format(pos)
    neg = "{:.2f}".format(neg)
    #img='my.png'
    #C_id=int(id)
    '''qry =f"INSERT INTO ranking_report (Rank,Overall_Score,Negative_Emotion, Positive_Emotion) VALUES ('1','1.1','1','1')"
    #data = (1,ress, pos,neg,binaryData)
    mycursor.execute(qry)'''

    qry = (
    "INSERT INTO ranking_report(C_id,Overall_Score,Negative_Emotion, Positive_Emotion, emotion_chart)"
    "VALUES (%s, %s, %s, %s, %s)"
    )
    data = (id, ress, pos,neg,binaryData)
    mycursor.execute(qry, data)
    mydb.commit()
    
def getEmotionData(id):
    video_list=fetchvideo(id)    
    print(video_list)
    res=Answer_similarity(video_list)
    foremotion(res,video_list,id)
    return res

"""if __name__ == '__main__':
    id=5
    video_list=fetchvideo(id)    
    print(video_list)
    res=Answer_similarity(video_list)
    print(res)
    res*=100
    foremotion(res,video_list)"""
    
    