// @ts-chek  
'use strict'

function dropDown(){
    let dropDownMenu = document.getElementById('dropDownMenu');

    if (dropDownMenu.style.display === 'block'){
        dropDownMenu.style.display = 'none';
    }else {
    dropDownMenu.style.display = 'block';
    }
}

function navigationPop(){
    let navigation = document.getElementById('navigation');
    let header = document.querySelector('header');


    if (navigation.style.display === 'block'){
        navigation.style.display = 'none';
        header.style.borderRadius = '0 0 80px 80px';
    }else {
        navigation.style.display = 'block';
        header.style.borderRadius = '0 0 0 80px';
    }
}






































// function toggleMenu() {
//     let links = document.getElementById('myNavLinks');

//     if (links.style.display === 'block') {
//         links.style.display = 'none';
//     } else {
//         links.style.display = 'block';
//     }
// }