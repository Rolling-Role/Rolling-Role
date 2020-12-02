$(document).ready(function(){
    let target=navigator.userAgent.toLowerCase();
    if(navigator.appName=='Netscape'&&navigator.userAgent.search('Trident')!=-1)
        window.location.href="../html/ie.html"
    else if(target.indexOf("mise")!=-1)
        window.location.href="../html/ie.html";
    else
        window.location.href="../leader.html";
})