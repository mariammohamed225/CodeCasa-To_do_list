window.addEventListener('load',() =>{
    const form= document.querySelector("#NewTask");
    const input = document.querySelector("#newtask");
    const list = document.querySelector("#Tasks");

    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        const task= input.value;
        const task_div= document.createElement('div');
        task_div.classList.add('task'); 

        const content = document.createElement('div');
        content.classList.add('content');
        task_div.appendChild(content);

        const task_input= document.createElement('input');
        task_input.classList.add("text");
        task_input.type="text";
        task_input.value=task;
        task_input.setAttribute('readonly','readonly');
        content.appendChild(task_input);

        const action = document.createElement('div');
        action.classList.add('actions');

        const edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerText= 'Edit';

        const task_delete = document.createElement('button');
        task_delete .classList.add('delete');
        task_delete .innerText= 'Delete';

        action.appendChild(edit);
        action.appendChild(task_delete);

        task_div.appendChild(action);
        list.appendChild(task_div);
        input.value=' '; 

        edit.addEventListener('click',(e)=>{
            if (edit.innerText.toLowerCase()==='edit'){
                edit.innerText="save";

                task_input.removeAttribute("readonly");
                task_input.focus();
            }
            else {
                edit.innerText="Edit";
                edit.setAttribute("readonly","readonly");
            }
        });
        task_delete.addEventListener('click', (e)=>{
            list.removeChild(task_div);
        });
    });
});