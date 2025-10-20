let fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit, index) => {
    console.log(`${index + 1}: ${fruit}`);
});

// let heroes = [['superman', 'batman', 'wonder woman'],['firstHero', 'secondHero', 'thirdHero']];;
// for (let i = 0; i < heroes.length; i++) {
//     console.log(i, heroes[i]);
//     for (let j = 0; j < heroes[i].length; j++) {
//         console.log(`j = ${j},${heroes[i][j]}`);
//     }
// }


// for of loop.It is used to iterate over iterable objects like arrays, strings, maps, sets, etc.
for (let fruit of fruits) {
    console.log(fruit);
}

//nested for of loop
let heroes = [['superman', 'batman', 'butcher'], ['firstHero', 'secondHero', 'thirdHero']];
for (let hero of heroes) {
    console.log(hero);
    for (let h of hero) {
        console.log(h);
    }
}

// todo list 
let todoList = [];

let req =prompt("Enter your request (add, list, delete, quit):");

while (req !== "quit") {
    if (req === "add") {
        let task = prompt("Enter the task to add:");
        todoList.push(task);
        console.log(`"${task}" has been added to the list.`);
    } else if (req === "list") {
        console.log("Todo List:");
        todoList.forEach((task, index) => {
            console.log(`${index + 1}: ${task}`);
        }
        );
    } else if (req === "delete") {
        let index = parseInt(prompt("Enter the task number to delete:")) - 1;
        if (index >= 0 && index < todoList.length) {
            let removedTask = todoList.splice(index, 1);
            console.log(`"${removedTask}" has been removed from the list.`);
        }
        else {
            console.log("Invalid task number.");
        }

    } else {
        console.log("Invalid request. Please enter add, list, delete, or quit.");
    }
    req = prompt("Enter your request (add, list, delete, quit):");
}

console.log("Exiting the todo app. Goodbye!");