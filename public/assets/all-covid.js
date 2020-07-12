function reqListener () {
    var currentDate = new Date();
    var mydata = JSON.parse(this.responseText);

    document.getElementById("alldate").innerHTML =
    currentDate.getMonth() + 1 + "월 " + currentDate.getDate() + "일 " + currentDate.getHours() + "시 " + currentDate.getMinutes() + "분 " + "업데이트 됨";

    document.getElementById("allcovid1").innerHTML =
    mydata['allcovid'][0].num;

    document.getElementById("allcovid2").innerHTML =
    mydata['allcovid'][2].num;

    document.getElementById("allcovid3").innerHTML =
    mydata['allcovid'][1].num;

}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "/all-status.json");
oReq.send();