var STOUSN = "stousn";

var STEFANREIP = "stefanreip";

var DEV = "dev"

function startUp() {
  var domain = detectDomain();

  setTitle(domain);

} 
startUp();

function detectDomain() {

  switch (window.location.hostname) {
    case "stousn.at":
      return STOUSN;
    case "stefanreip.at":
      return STEFANREIP;
    case "localhost":
      return DEV;
    default:
      return STOUSN;
  }

}

function setTitle(domain) {
  if (domain == STEFANREIP) {
    document.title = "Stefan Reip";
    document.getElementById("sitename").innerText = "Stefan Reip";
  } else if (domain == DEV) {
    document.title = "stousn.at DEV";
    document.getElementById("sitename").innerText += " DEV";
  }
}