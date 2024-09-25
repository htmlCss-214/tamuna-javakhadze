// @ts-chek  
'use strict'

// dropdown menu
function dropDown(){
    let dropDownMenu = document.getElementById('dropDownMenu');

    if (dropDownMenu.style.display === 'block'){
        dropDownMenu.style.display = 'none';
    }else {
    dropDownMenu.style.display = 'block';
    }
}

// burger click -> navigation appear on left
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

// chat with us
function chatPopUp(){
    let 
}

// form
function fillTheForm(){
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    if (firstName === "" && lastName === "" && phone === "" && email === "") {
        alert("please fill out the field");
        return false;
    }else if(firstName === "" || lastName === "" || phone === "" || email === ""){
        alert("please fill out every field");
        return false;
    }else{
        return true;
    }
}