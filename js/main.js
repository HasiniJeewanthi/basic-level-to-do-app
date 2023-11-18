window.addEventListener('load', () => {
    const form  = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_elm = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please fill out the task");
            return;
            
        }

        const task_elm = document.createElement("div");
        task_elm.classList.add("task");

        const task_content_elm = document.createElement("div");
        task_content_elm.classList.add("content");

        task_elm.appendChild(task_content_elm);

        const task_input_elm = document.createElement("input");
        task_input_elm.classList.add("text");
        task_input_elm.type = "text";
        task_input_elm.value = task;
        task_input_elm.setAttribute("readonly", "readonly");

        task_content_elm.appendChild(task_input_elm);

        const task_actions_elm = document.createElement("div");
        task_actions_elm.classList.add("actions");

        const task_edit_elm = document.createElement("button");
        task_edit_elm.classList.add("edit");
        task_edit_elm.innerHTML = "EDIT";

        const task_delete_elm = document.createElement("button");
        task_delete_elm.classList.add("delete");
        task_delete_elm.innerHTML = "DELETE";

        task_actions_elm.appendChild(task_edit_elm);
        task_actions_elm.appendChild(task_delete_elm);

        task_elm.appendChild(task_actions_elm);

        list_elm.appendChild(task_elm);

        input.value = "";

        task_edit_elm.addEventListener('click', () => {
            if (task_edit_elm.innerText.toLowerCase() == "edit") {
                task_input_elm.removeAttribute("readonly");
                task_input_elm.focus();
                task_edit_elm.innerText = "SAVE";  
            }else {
                task_input_elm.setAttribute("readonly", "readonly");
                task_edit_elm.innerText = "EDIT";
            }           
        });

        task_delete_elm.addEventListener('click', () => {
            list_elm.removeChild(task_elm);
        });

        const add_task_elm = document.querySelector("#new-task-input");
        const btn_add_task = document.querySelector("#new-task-submit")
        add_task_elm.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                btn_add_task.click();               
            }
        });
    });

});