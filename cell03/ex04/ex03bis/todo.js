const $ftList = $("#ft_list");

function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const parts = cookie.split("=");
        if (parts[0] === name) {
            return decodeURIComponent(parts[1]);
        }
    }
    return "";
}

function saveTodos() {
    const todos = [];
    $(".todo").each(function () {
        todos.push($(this).text());
    });
    setCookie("todos", JSON.stringify(todos));
}

function loadTodos() {
    const data = getCookie("todos");
    if (data) {
        const todos = JSON.parse(data);
        $.each(todos, function (_, text) {
            addTodo(text, false);
        });
    }
}

function addTodo(text, save = true) {
    const $div = $("<div></div>")
        .addClass("todo")
        .text(text);

    $div.on("click", function () {
        if (confirm("Do you want to delete this TO DO?")) {
            $(this).remove();
            saveTodos();
        }
    });

    $ftList.prepend($div);
    if (save) saveTodos();
}

$("#newBtn").on("click", function () {
    const text = prompt("Enter a new TO DO:");
    if (text && text.trim() !== "") {
        addTodo(text.trim());
    }
});

loadTodos();