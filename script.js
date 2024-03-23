input = document.querySelector('.task-input > input')

input.placeholder = "What do you have planned?";
input.addEventListener('focusin', () => {
    input.placeholder = '';
})

input.addEventListener('focusout', () => {
    if(input.placeholder == ''){
        input.placeholder = "What do you have planned?";
    }
})

addTask = document.getElementById('add-task')
tasksList = document.querySelector('.tasks-list .list')

addTask.addEventListener("click", () => {
    if(input.value != ''){
        tasksList.innerHTML += `
        <div class="task">
            <input value="${input.value}" contenteditable="false" readonly>
            <div class="task-btns">
                <button id="edit">edit</button><button id="save">save</button><button id="delete">delete</button>
            </div>
        </div>
        `
        input.value = ''

        tasks = document.querySelectorAll('.task')

        tasks.forEach((t) => {
            t.querySelector('#edit').addEventListener('click', () => {
                t.querySelector('#save').style.display = 'inline'
                t.querySelector('#edit').style.display = 'none'
                taskInput = t.querySelector('input')
                taskInput.readOnly = false
                taskInput.style.color = 'green'
                taskInput.focus()
                taskInput.selectionStart = taskInput.selectionEnd = taskInput.value.length;
            })

            t.querySelector('#save').addEventListener('click', () => {
                t.querySelector('#edit').style.display = 'inline'
                t.querySelector('#save').style.display = 'none'
                taskInput = t.querySelector('input')
                taskInput.readOnly = true
                taskInput.style.color = 'aliceblue'
            })

            t.querySelector('#delete').addEventListener('click', () => {
                t.remove()
            })
        });
    }
})

tasks = document.querySelectorAll('.task')

tasks.forEach((t) => {
    t.querySelector('#edit').addEventListener('click', () => {
        t.querySelector('#save').style.display = 'inline'
        t.querySelector('#edit').style.display = 'none'
        taskInput = t.querySelector('input')
        taskInput.readOnly = false
        taskInput.style.color = 'green'
        taskInput.focus()
        taskInput.selectionStart = taskInput.selectionEnd = taskInput.value.length;
    })

    t.querySelector('#save').addEventListener('click', () => {
        t.querySelector('#edit').style.display = 'inline'
        t.querySelector('#save').style.display = 'none'
        taskInput = t.querySelector('input')
        taskInput.readOnly = true
        taskInput.style.color = 'aliceblue'
    })

    t.querySelector('#delete').addEventListener('click', () => {
        t.remove()
    })
});