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

// form validation
function validateForm(){
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    if (firstName === "") {
        alert("please fill out first name field");
        return false;
    }
    if (lastName === "") {
        alert("please fill out last name field");
        return false;
    }
    if (phone === "") {
        alert("please fill out phone number field");
        return false;
    }
    if (email === "") {
        alert("please fill out email field");
        return false;
    }
}