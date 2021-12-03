function setCookie(t, n, o) {
    var e = new Date;
    e.setTime(e.getTime() + 24 * o * 60 * 60 * 1e3);
    var c = "expires=" + e.toUTCString();
    document.cookie = t + "=" + n + "; " + c
}

function getCookie(t) {
    for (var n = t + "=", o = document.cookie.split(";"), e = 0; e < o.length; e++) {
        for (var c = o[e];
            " " == c.charAt(0);) c = c.substring(1, c.length);
        if (0 == c.indexOf(n)) return c.substring(n.length, c.length)
    }
    return ""
}
$(document).ready(function() {
    $.get("https://ipinfo.io", function(t) {
        console.log(t.city, t.country), str = JSON.stringify(t), str = JSON.stringify(t, null, 4), console.log(t);
        $.ajax({
            url: "./country_phone.php",
            type: "POST",
            data: "country_code=" + t.country,
            dataType: "json",
            success: function(t) {
                //alert(t.country_name);
                console.log(t), $("#footer_country").val(t.country_name), $("#country_starter").val(t.country_name), $("#enterprice_country").val(t.country_name), $("#premium_country").val(t.country_name), $(".footer #country").val(t.country_name),$("#phone").val("+" + t.ph_code),$("#phone_starter").val("+" + t.ph_code),$("#enterprice_phone").val("+" + t.ph_code), $("#phone_contact").val("+" + t.ph_code); - 1 != $(location).attr("href").indexOf("signup.php") && ($("#country").val(t.country_name), $("#country").hide(), $("#phone").val("+" + t.ph_code)), "Asia" == t.continent ? ($("#singapore-contact").attr("style", "display:block"), $("#uk-contact").attr("style", "display:none"), $("#us-contact").attr("style", "display:none")) : "Europe" == t.continent ? ($("#uk-contact").attr("style", "display:block"), $("#singapore-contact").attr("style", "display:none"), $("#us-contact").attr("style", "display:none")) : "North America" == t.continent || "South America" == t.continent ? ($("#us-contact").attr("style", "display:block"), $("#singapore-contact").attr("style", "display:none"), $("#uk-contact").attr("style", "display:none")) : ($("#singapore-contact").attr("style", "display:block"), $("#uk-contact").attr("style", "display:none"), $("#us-contact").attr("style", "display:none"))
            }
        })
    }, "jsonp")
});