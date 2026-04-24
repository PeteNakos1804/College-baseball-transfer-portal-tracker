(function(){
  window.addEventListener("message",function(e){
    if(!e.data||e.data.type!=="portal-resize")return;
    var iframes=document.querySelectorAll("iframe");
    for(var i=0;i<iframes.length;i++){
      var f=iframes[i];
      if(f.src&&f.src.indexOf("portal.html")!==-1){
        f.style.height=(e.data.height+4)+"px";
      }
    }
  });
})();
