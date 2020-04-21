"use strict";
$(document).ready(function () {

    //  Get value from the inputs
    let name = $('input[name="user_name"]');
    let email = $('input[name="user_email"]');
    let phone = $('input[name="user_phone"]');
    let text = $('textarea[name="user_text"]');

    function isValidEmail(email) {
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
    }

    //  validate First Name
    function isValidName(name) {
        return (/^([A-Za-zА-Яа-яЁё]+(\s+[A-Za-zА-Яа-яЁё]+)?){2,}/i.test(name));
    }

    function isValidPhone(phone) {
        return phone.split('').filter(function (i) {
            return !Number.isNaN(Number.parseInt(i));
        }).length >= 10;
    }

    function isValidText(text) {
        return (/^([A-Za-zА-Яа-яЁё]+(\s+[A-Za-zА-Яа-яЁё]+)?){2,}/i.test(text));
    }

    let validate = function validate(input, validator) {
        let value = input.val();

        if (validator(value)) {
            input.css("box-shadow", "0 0 0 .2rem rgba(0,255,0,.5)");
            input.css('border', "1px solid rgba(0,255,0,.5)");
            return true;
        } else {
            input.css("box-shadow", "0 0 0 .2rem rgba(255,0,0,.5)");
            input.css('border', "1px solid rgba(255,0,0,.5)");
            return false;
        }
    };

    let addFieldValidation = function addFieldValidation(input, validator) {
        input.on("keyup", function () {
            if (validate(input, validator, true)) {
                if(input.val().length === 0){
                    input.css("box-shadow", "0 0 0 .2rem transparent");
                    input.css('border', "1px solid transparent");
                }
            }
        });
        input.on("blur", function () {
            validate(input, validator);
            if(input.val().length === 0){
                input.css("box-shadow", "0 0 0 .2rem transparent");
                input.css('border', "1px solid transparent");
            }
        });
    };

    addFieldValidation(name, isValidName);
    addFieldValidation(email, isValidEmail);
    addFieldValidation(phone, isValidPhone);
    addFieldValidation(text, isValidText);
});