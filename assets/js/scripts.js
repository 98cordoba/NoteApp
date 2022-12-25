document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask textarea').value.length == 0) {
        alert("Please enter a task");
    } else {
        document.querySelector('#tasks').innerHTML += `
        <div class="container">
            <div class="row">
                <div class="task col-8">
                    <span id= "taskname">
                        ${document.querySelector('#newtask textarea').value}
                    </span>
                    <button id="delete" class="btn btn-warning btn-sm col-4">
                        <span>Eliminar </span> <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
        `
        var current_tasks = document.querySelectorAll('#delete')
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove()
            }
        }
        document.querySelector('#newtask textarea').value="";
    }
}
