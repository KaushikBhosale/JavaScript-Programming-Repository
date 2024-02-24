/* Exercise 6: ToDo List

Create a TODO list app capable of storing your Todos in localStorage.
Add an option to Create, Deleteand access all the Todos.
Try to make UI as good as possible

*/
// **********************************************************************************************
// **********************************************************************************************


submit.addEventListener("click", (e) => {
    e.preventDefault();
    let a = title.value;
    let b = desc.value;
    localStorage.setItem("todo", JSON.stringify([a, b]));
    console.log(e);
    todo.innerHTML = `<h1>${a}</h1>
                        <p>${b}</p>`;
    title.value = "";
    desc.value = "";
})

deletebtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("todo");
    todo.innerHTML = ``;
})