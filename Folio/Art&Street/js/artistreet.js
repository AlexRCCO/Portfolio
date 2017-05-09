var burger_menu = document.querySelector(".burger-menu-responsive-nav-artistreet");
var nav_responsive = document.querySelector("div.nav-artistreet");

burger_menu.addEventListener('click', function(){
    if (nav_responsive.className == "nav-artistreet responsive-nav undisplayed" ){
        nav_responsive.classList.add("displayed");
        nav_responsive.classList.remove("undisplayed");
        burger_menu.style.position = "fixed";
        console.log(true);
    } else {
        nav_responsive.classList.remove("displayed");
        nav_responsive.classList.add("undisplayed");
        burger_menu.style.position = "";
        console.log(false);
    }
})