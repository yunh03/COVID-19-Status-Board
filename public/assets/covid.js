function reqListener () {
    var currentDate = new Date();
    var mydata = JSON.parse(this.responseText);

    document.getElementById("nowdate").innerHTML =
    currentDate.getMonth() + 1 + "월 " + currentDate.getDate() + "일 " + currentDate.getHours() + "시 " + currentDate.getMinutes() + "분 " + "업데이트 됨";

    document.getElementById("covid1").innerHTML =
    mydata['covid'][0].num;

    document.getElementById("covid11").innerHTML =
    mydata['covid'][0].statue;

    document.getElementById("covid2").innerHTML =
    mydata['covid'][2].num;

    document.getElementById("covid22").innerHTML =
    " " + mydata['covid'][2].statue;

    document.getElementById("covid3").innerHTML =
    mydata['covid'][1].num;

    document.getElementById("covid33").innerHTML =
    " " + mydata['covid'][1].statue;

    document.getElementById("emergency-preview-1").innerHTML =
    mydata['emergency'][0].title;

    document.getElementById("emergency-preview-1-1").innerHTML =
    mydata['emergency'][0].msg;

    document.getElementById("emergency-preview-1-1-1").innerHTML =
    mydata['emergency'][0].date;

}
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "/status.json");
oReq.send();