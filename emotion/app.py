import flask
from home import getEmotionData
from flask_cors import CORS
app = flask.Flask(__name__)
cors = CORS(app,resources={r"/*":{"origins":"*"}})
app.config["DEBUG"] = True
@app.route('/<id>', methods=['GET'])
def welcome(id):
    similarity = getEmotionData(id)
    return flask.jsonify({"similarity":similarity})
app.run()
