// script.js
const sortableList = document.getElementById("sortableList");

let draggedItem = null;

sortableList.addEventListener("dragstart", (e) => {
    draggedItem = e.target;
    e.target.style.opacity = 0.5;
});

sortableList.addEventListener("dragend", (e) => {
    e.target.style.opacity = 1;
});

sortableList.addEventListener("dragover", (e) => {
    e.preventDefault();
});

sortableList.addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("sortable-item")) {
        if (draggedItem !== e.target) {
            const items = Array.from(sortableList.querySelectorAll(".sortable-item"));
            const indexA = items.indexOf(draggedItem);
            const indexB = items.indexOf(e.target);

            if (indexA !== -1 && indexB !== -1) {
                sortableList.insertBefore(draggedItem, e.target);
            }
        }
    }
});
