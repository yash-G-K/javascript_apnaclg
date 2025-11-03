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

// Simon says game example

// Simon says game example
// Simon says game example
let gameseq = [];
let usersq = [];
let level = 0;
let started = false;

let btns = ["red", "green", "blue", "yellow"];
let h2 = document.querySelector("h2");

// Start game on keypress
document.addEventListener("keypress", function () {
  if (!started) {
    started = true;
    levelup();
  }
});

// Flash animation for game buttons
function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(() => btn.classList.remove("flash"), 400);
}

// Flash animation for user click
function userflash(btn) {
  btn.classList.add("flash");
  setTimeout(() => btn.classList.remove("flash"), 400);
}

// Level up and show random color
function levelup() {
  usersq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randnum = Math.floor(Math.random() * 4);
  let randcolor = btns[randnum];
  let randbtn = document.querySelector(`#${randcolor}`);
  gameseq.push(randcolor);

  console.log("Game sequence:", gameseq);
  gameflash(randbtn);
}

// Handle user button press
function btnpress() {
  let btn = this;
  userflash(btn);

  let usercolor = btn.getAttribute("id");
  usersq.push(usercolor);
  console.log("User clicked:", usercolor);

  checkans(usersq.length - 1);
}

// Check user input with game sequence
function checkans(idx) {
  if (usersq[idx] === gameseq[idx]) {
    if (usersq.length === gameseq.length) {
      setTimeout(levelup, 800);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to restart`;
    resetgame();
  }
}

// Add event listener to all buttons
let allbtns = document.querySelectorAll(".btn");
allbtns.forEach((btn) => btn.addEventListener("click", btnpress));

// Reset game after failure
function resetgame() {
  started = false;
  level = 0;
  gameseq = [];
  usersq = [];
}


