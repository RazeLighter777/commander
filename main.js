
var nodes  = []




function loadPage(pageName) {
    $("#main-contents").load(pageName);
}


window.addEventListener("hashchange", function() {
    console.log(location.hash);
    loadPage(location.hash.substring(1)+".html")
  });
  