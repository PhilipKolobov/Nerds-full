var link=document.querySelector(".adress__button"),popup=document.querySelector(".modal-writing"),close=popup.querySelector(".modal-close"),login=popup.querySelector(".input-name"),email=popup.querySelector(".input-email"),form=popup.querySelector(".modal-writing-form");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-add"),login.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-add")});