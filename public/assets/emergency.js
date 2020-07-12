function reqListener () {
    var currentDate = new Date();
    var mydata = JSON.parse(this.responseText);

    document.getElementById("msgdate").innerHTML =
    currentDate.getMonth() + 1 + "월 " + currentDate.getDate() + "일 " + currentDate.getHours() + "시 " + currentDate.getMinutes() + "분 " + "업데이트 됨";

    document.getElementById("emergency-preview-1").innerHTML =
    mydata['emergency'][0].title;

    document.getElementById("emergency-preview-1-1").innerHTML =
    mydata['emergency'][0].msg;

    document.getElementById("emergency-preview-1-1-1").innerHTML =
    mydata['emergency'][0].date;

    document.getElementById("emergency-preview-2").innerHTML =
    mydata['emergency'][1].title;

    document.getElementById("emergency-preview-2-2").innerHTML =
    mydata['emergency'][1].msg;

    document.getElementById("emergency-preview-2-2-2").innerHTML =
    mydata['emergency'][1].date;

    document.getElementById("emergency-preview-3").innerHTML =
    mydata['emergency'][2].title;

    document.getElementById("emergency-preview-3-3").innerHTML =
    mydata['emergency'][2].msg;

    document.getElementById("emergency-preview-3-3-3").innerHTML =
    mydata['emergency'][2].date;

}
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "/emergency.json");
oReq.send();