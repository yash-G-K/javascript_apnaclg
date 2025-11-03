//event bubbling and event capturing example

// let div = document.querySelector('div');
// let ul = document.getElementById('ul');
// let list = document.querySelectorAll('li');

// div.addEventListener('click', function() {
//     event.stopPropagation();
//     console.log('Div clicked'); 
// });
// ul.addEventListener('click', function() {
//     event.stopPropagation();
//     console.log('UL clicked'); 
// });
// list.forEach(function(li) {
//     li.addEventListener('click', function() {
//         event.stopPropagation();
//         console.log('LI clicked: ' + li.textContent); 
//     });
// })


//tpdo app example
// let btn = document.getElementById('addTaskButton');
// let ul = document.querySelector('ul');
// let  inp = document.getElementById('taskInput');

// btn.addEventListener('click', function() {
//     let item = document.createElement('li');
//     item.textContent = inp.value;
//     ul.appendChild(item);

//     let debtn = document.createElement('button');
//     debtn.innerText = " delete";
//     debtn.className = "del";
//     item.appendChild(debtn);
    
//     console.log(inp.value);
//     inp.value = "";
// });

//Event Delegation for delete buttons
// ul.addEventListener('click', function(event) {
//     if(event.target.classList.contains('del')){
//         let par = event.target.parentElement;
//         par.remove();
//     }
// });

// let delbtns = document.querySelectorAll('.del');
// for(delbtnss of delbtns){   
//     delbtnss.addEventListener('click', function(event) {
//         let par = this.parentElement;
//         par.remove();
//     });
// }
