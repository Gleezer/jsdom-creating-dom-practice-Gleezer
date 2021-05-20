let todos = [
  "Take Jim to the hair salon",
  "Drop off wedding invitation at mailbox",
  "Pick up the cake",
  "Call the caterers",
  "Schedule the flower delivery",
  "Dry Clean the Suits"
];

function renderTodoApp() {
  // Follow the instructions on my.kenzie.academy to complete the assignment.
  // Your Code Here
 
  //There is a div inside the body with the id app Use getElementById to get that element and assign it to a new variable named “app”. This will give us a reference to the “app” div in JavaScript.

  let app = document.getElementById('app');

  //Use document.createElement() to make a new “h3” element. Assign the new element to a variable.

  let headThree = document.createElement('h3');

  //Then set the innerText of that element to be “Todo List”.

  headThree.innerText = 'To-Do List';

  //Finally, .append() your title element onto the app element. That will make the title a child of the app div.

  app.append(headThree);


  //Step 2 
  //First, create the ul element with document.createElement("ul") and assign it to a variable.

  let ulList = document.createElement('ul');

  //Append the ul to the app element.
  app.append(ulList);

  //To actually render the list according to the todos array. You will need to use a loop.

  for (let index = 0; index < todos.length; index++) {

    let list = document.createElement('li');
    list.append(todos[index]);
    //console.log(list);
    ulList.append(list);


    
  }

  
 
}


renderTodoApp();
