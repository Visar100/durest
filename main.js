let scrollBtn = document.getElementById('scrollToTop');

window.onscroll = function(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop){
        scrollBtn.style.display ="block";

    }

    else{
         scrollBtn.style.display ="none";
    }
}


scrollBtn.oneclick = function() {
    window.scrollTo({
        top:0,
        behavior:'smooth'

    });
}