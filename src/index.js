document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.querySelector("#create-task-form")
    const newTaskUl = document.querySelector("#tasks")
    const newTaskDesc = document.querySelector("#new-task-description")

    console.log(taskForm)

    taskForm.addEventListener("submit", createNewTask)

    function createNewTask(event) {
        event.preventDefault()
        const task = document.createElement("li")
        task.textContent = event.target.querySelector('[name="new-task-description"]').value
        newTaskUl.append(task)

        event.target.reset()
    }
});