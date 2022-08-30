const STOUSN = "stousn";

const STEFANREIP = "stefanreip";

const DEV = "dev"

function startUp() {
  let domain = detectDomain();

  setTitle(domain);
  setDevLink(domain);

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

function setDevLink(domain) {
  if (domain == STEFANREIP) {
    document.getElementsByTagName('devlink')[0].innerHTML = '<a href="https://stefanreip.dev" class="w3-bar-item w3-button w3-theme-d4">' +
      'DEV page' + 
      '</a >'
  } else {
    document.getElementsByTagName('devlink')[0].innerHTML = '<a href="https://stousn.dev" class="w3-bar-item w3-button w3-theme-d4">' +
      'Stousn DEV' +
      '</a >'
  }
}