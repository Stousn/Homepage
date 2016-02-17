function loadDoc(url, cfunc) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      cfunc(xhttp);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function loadPage(xhttp){
  //document.getElementById('mainContent').innerHTML = path;

      document.getElementById('mainContent').innerHTML = xhttp.responseText;
}
