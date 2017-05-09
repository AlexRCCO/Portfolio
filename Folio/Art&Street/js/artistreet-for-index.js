/*------all pages------*/
var burger_menu = document.querySelector(".burger-menu-responsive-nav-artistreet");
var nav_responsive = document.querySelector("div.nav-artistreet");
var nav_responsive_for_index_html = document.querySelector("div.only-index-html");
console.log(nav_responsive_for_index_html.className == "only-index-html responsive-nav undisplayed");
            
burger_menu.addEventListener('click', function(){
    if (nav_responsive_for_index_html.className == "only-index-html responsive-nav undisplayed"){
        nav_responsive_for_index_html.classList.add("displayed");
        nav_responsive_for_index_html.classList.remove("undisplayed");
        burger_menu.style.position = "fixed";
        console.log(true);
    } else {
        nav_responsive_for_index_html.classList.remove("displayed");
        nav_responsive_for_index_html.classList.add("undisplayed");
        burger_menu.style.position = "";
        console.log(false);
    }
})

