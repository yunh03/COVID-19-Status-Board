function reqListener () {
  var mydata = JSON.parse(this.responseText);
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