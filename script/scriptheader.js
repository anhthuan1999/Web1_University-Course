function showmenu(k) {
    var menuList = document.querySelectorAll('header > ul > li > ul');
    for (var j = 0; j < menuList.length; j++) {
        menuList[j].style.display = "none";
    }
    menuList[k].style.display = "block";
    menuList[k].style.transition = "0.6s";
}
function anmenu() {
    var menuList = document.querySelectorAll('header > ul > li > ul');
    for (var j = 0; j < menuList.length; j++) {
        menuList[j].style.display = "none";
    }
}
