function reqListener () {
    var currentDate = new Date();
    var mydata = JSON.parse(this.responseText);

    document.getElementById("emergency-preview-1").innerHTML =
    mydata['emergency'][0].title;

    txt += "<table border='1'>"

    for (x in mydata) {
      txt += "<tr><td>" + mydata[x].msg + "</td></tr>";
    }

    txt += "</table>"
    
    document.getElementById("demo").innerHTML = txt;

}
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "/emergency.json");
oReq.send();