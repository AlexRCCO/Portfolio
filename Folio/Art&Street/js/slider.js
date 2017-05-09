/*------index.html------*/

var i = 0;
var tabs = document.querySelectorAll(".slider figure");

setInterval(function(){
    if (i < tabs.length-1){
        tabs[i].classList.remove("active");
        tabs[i].classList.add("relai");
        i++;
        tabs[i].classList.add("active");
        tabs[i].classList.remove("relai");
                
    } else {
        tabs[tabs.length-1].classList.remove("active");
        tabs[tabs.length-1].classList.add("relai");
        i = 0;
        tabs[0].classList.add("active");
        tabs[0].classList.remove("relai");
    }
}, 2000);
