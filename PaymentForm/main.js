(function (window) {
    'use strict';

    var FORM_SELECTOR = '[data-payment="form"]';
    var App = window.App;
    var FormHandler = App.FormHandler;


    var formHandler = new FormHandler(FORM_SELECTOR);

    var modal = document.getElementById("myModal");
    var close = document.getElementsByClassName("close")[0];
    var btn = document.getElementById("myBtn");
    var modalMsg = document.getElementById("modalMsg");


    formHandler.addSubmitHandler(function (data) {
        if (data.title === 'K') {
            data.title = 'King';
        }
        if (data.title === 'Q') {
            data.title = 'Queen';
        }
        if (data.title === 'J') {
            data.title = 'Joker';
        }
        var message = 'Thank you for your payment, ' + data.title + ' ' + data.username;
        modal.style.display = "block";
        modalMsg.innerText = message;
        close.onclick = function () {
            modal.style.display = "none";
        };
        window.onclick = function (event) {
            if (event.taget != modal) {
                modal.style.display = "none";
            }
        };
    });
}(window));