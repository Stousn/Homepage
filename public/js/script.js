function w3_open() {
  document.getElementById('mySidebar').style.width = '45%'
  document.getElementById('mySidebar').style.display = 'block'
}
function w3_close() {
  document.getElementById('mySidebar').style.display = 'none'
}
function setNames() {
  var names = document.getElementsByTagName('name')
  for (var i = 0; i < names.length; i++) {
    names[i].innerText = document.title
  }
  var devurls = document.getElementsByTagName('devurl')
  for (var i = 0; i < devurls.length; i++) {
    var domain = document.title.toLocaleLowerCase().replace(/\s/g, '');
    devurls[i].innerHTML = '<a href="https://' + domain + '.dev" target="_blank">' + domain + '.dev</a>'
  }
}
function scrollToElement(name) {
  if (name) {
    var element = document.getElementById(name.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  
}
function includeHTML(name) {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName('*')
  for (i = 0; i < z.length; i++) {
    elmnt = z[i]
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute('w3-include-html')
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText}
          if (this.status == 404) {elmnt.innerHTML = 'Page not found.'}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute('w3-include-html')
          includeHTML()
          setNames()
          scrollToElement(name)
        }
      }
      xhttp.open('GET', file, true)
      xhttp.send()
      /*exit the function:*/
      return;
    }
  }
}
includeHTML()

function loadContent(page, name) {
  document.getElementById('content').setAttribute('w3-include-html', 'content/' + page)
  includeHTML(name)
  document.getElementById('pagename').innerHTML = name
  w3_close()
}
