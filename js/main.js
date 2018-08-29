var link = document.querySelector(".adress__button");
var popup = document.querySelector(".modal-writing");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector(".input-name");
var email = popup.querySelector(".input-email");
var form = popup.querySelector(".modal-writing-form");


link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-add");
    login.focus();

  });

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-add");
  });


