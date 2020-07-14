function reqListener () {
  var currentDate = new Date();
  var mydata = JSON.parse(this.responseText);

  document.getElementById("msgdate").innerHTML =
  currentDate.getMonth() + 1 + "월 " + currentDate.getDate() + "일 " + currentDate.getHours() + "시 " + currentDate.getMinutes() + "분 " + "업데이트 됨";

  txt = "";
  txt += "<table border='1'>"
  txt += "<tr><th>발송 지역</th><th>메시지 내용</th><th>발송 일시</th>"
  for (x in mydata['emergency']) {
    txt += "<tr><td>" + mydata['emergency'][x].title + "</td>";
    txt += "<td>" + mydata['emergency'][x].msg + "</td>";
    txt += "<td>" + mydata['emergency'][x].date + "</td></tr>";
  }
  txt += "</tr>"
  txt += "</table>"    
  document.getElementById("emergency").innerHTML = txt;
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "/emergency.json");
oReq.send();