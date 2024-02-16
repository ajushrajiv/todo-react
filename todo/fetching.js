fetch("http://localhost:5030/v1/todo/todos")
    .then((response) => response.json())
    .then((json) => console.log(json.todos[0].task))