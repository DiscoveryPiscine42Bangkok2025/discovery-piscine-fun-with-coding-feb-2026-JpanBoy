const ftList = document.getElementById("ft_list");

function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return "";
}

function saveTodos() {
    const todos = [];
    document.querySelectorAll(".todo").forEach(todo => {
        todos.push(todo.textContent);
    });
    setCookie("todos", JSON.stringify(todos));
}

function loadTodos() {
    const data = getCookie("todos");
    if (data) {
        const todos = JSON.parse(data);
        todos.forEach(text => addTodo(text, false));
    }
}

function addTodo(text, save = true) {
    const div = document.createElement("div");
    div.className = "todo";
    div.textContent = text;

    div.addEventListener("click", () => {
        if (confirm("Do you want to delete this TO DO?")) {
            div.remove();
            saveTodos();
        }
    });
    ftList.prepend(div);
    if (save) saveTodos();
}

document.getElementById("newBtn").addEventListener("click", () => {
    const text = prompt("Enter a new TO DO:");
    if (text && text.trim() !== "") {
        addTodo(text.trim());
    }
});
loadTodos();