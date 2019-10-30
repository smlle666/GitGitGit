var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");

input.addEventListener("keypress", function(keyPressed){
    if(keyPressed.which === 13){
        var li = document.createElement("li");
        var spanElement = document.createElement("span");
        var icon = document.createElement("i");
        let now = new Date();
        var newTodo = this.value + ' ' + now.getFullYear() + '/' + now.getMonth() + '/' + now.getUTCDate() + '/' + now.getHours() + '/' + now.getMinutes() + '/' + now.getSeconds();
        this.value = " ";

        icon.classList.add('fas', 'fa-trash-alt');
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement, newTodo);

        deleteTodo();
    }
})

function deleteTodo(){
    spans = document.querySelectorAll("span");
    for(let span of spans){
        span.addEventListener("click",function(){
            span.parentElement.remove();
            event.stopPropagation();
        });
    }
}

ul.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
},false);

var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");

saveBtn.addEventListener('click',function(){
    window.localStorage.setItem('todoList', ul.innerHTML);
});
clearBtn.addEventListener('click',function(){
    ul.innerHTML = "";
    window.localStorage.removeItem('todoList');
});

function loadTodo(){
    if(window.localStorage.getItem('todoList')){
        ul.innerHTML = window.localStorage.getItem('todoList');
        deleteTodo();
    }
}

loadTodo();