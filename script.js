// script.js
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("task_value");
    const addButton = document.getElementById("btnAdd");
    const todoList = document.getElementById("todo-list");

    // Menambahkan task baru
    addButton.addEventListener("click", () => {
        const taskText = input.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
          <span>${taskText}</span>
          <button class="delete-button">Delete</button>
        `;
            todoList.appendChild(listItem);

            // Reset input field
            input.value = "";
        }
    });

    // Menghapus task
    todoList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-button")) {
            e.target.parentElement.remove();
        }
    });
});
