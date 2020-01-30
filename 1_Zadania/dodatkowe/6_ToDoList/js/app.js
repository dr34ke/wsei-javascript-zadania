document.addEventListener("DOMContentLoaded", function(){
    var taskInput= document.querySelector("#taskInput");
    var taskList= document.querySelector("#taskList");
    var counter=0;
    var span=document.createElement("span");
    function update(){
        span.innerHTML="Tasks ToDo: "+counter;
    }
    var remComTasks = document.querySelector("#removeFinishedTasksButton");
    remComTasks.addEventListener("click",function(){
        var completeTasks=document.querySelectorAll(".complete");
        for(var i=0; i<completeTasks.length; i++){
            completeTasks[i].remove();
        }
    })
    taskList.parentElement.insertBefore(span, taskList.parentElement.children[3]);

    var taskBtn= document.querySelector("#addTaskButton");
    taskBtn.addEventListener("click",function(){
        if(taskInput.value.length>5 && taskInput.value.length<100){
            var li= document.createElement("li");
            counter+=1;
            var control=0;
            var h1=document.createElement("h1");
            var task=document.createTextNode(taskInput.value);
            h1.appendChild(task);
            var btnComplete=document.createElement("button");
            var complete=document.createTextNode("Complete");
            btnComplete.appendChild(complete);
            var btnDelete=document.createElement("button");
            var _delete=document.createTextNode("Delete");
            btnDelete.appendChild(_delete);
            li.appendChild(h1);
            li.appendChild(btnComplete);
            li.appendChild(btnDelete);
            taskList.appendChild(li);
            update();
            btnComplete.addEventListener("click",function(){
                this.parentElement.querySelector("h1").style.color="red";
                this.parentElement.classList.add("complete");
                if(control!=1){
                    counter-=1;
                    control=1;
                    update();
                }
                
            })
            btnDelete.addEventListener("click",function(){
                this.parentElement.remove();
                if(control!=1)
                    counter-=1;
                update();

            })
            taskInput.value='';
        }
       
    })
})