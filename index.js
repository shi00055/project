var target = document.getElementById('nav');

window.onscroll = function(){
    if(document.documentElement.scrollTop >0){
        target.classList += " scrolled";
    }else{
        target.classList = "navigation";
    }
}

