"use strict";

const input = document.querySelector('input');
const container = document.querySelector('.list');

const save = function() {
    localStorage.setItem("tasks", container.innerHTML);
}

window.onload = function() {
    container.innerHTML = localStorage.getItem("tasks");
}

const addList = function(text) {
    container.innerHTML += `
    <div class="random">
    <p>${text}</P>
    <button class="btn" onclick="deleteFunc(this)">X</button>
    </div>
    `;
    
    input.value = "";

    save();
}

const deleteFunc = function(element) {
    const toBeDeleted = element.parentElement;
    toBeDeleted.remove();

    save()
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter" && input.value.trim()) {
        addList(input.value)
    }
});