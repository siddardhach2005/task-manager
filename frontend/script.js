const taskList = document.getElementById("taskList");

function addTask(){

    const title =
        document.getElementById("title").value;

    const description =
        document.getElementById("description").value;

    const status =
        document.getElementById("status").value;

    if(!title || !description){
        alert("Fill all fields");
        return;
    }

    const taskCard =
        document.createElement("div");

    taskCard.classList.add("task-card");

    taskCard.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <strong>Status:</strong> ${status}
        <br><br>
        <button onclick="this.parentElement.remove()">
            Delete
        </button>
    `;

    taskList.appendChild(taskCard);

    document.getElementById("title").value="";
    document.getElementById("description").value="";
}