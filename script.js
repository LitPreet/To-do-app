const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todolist")
const clearBtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
    let userEnteredValue = inputBox.value; //getting user entered value
    if(userEnteredValue.trim() != 0){ //if the user value isn't only spaces
      addBtn.classList.add("active"); //active the add button
    }else{
      addBtn.classList.remove("active"); //unactive the add button
    }
    
  }
  addBtn.onclick = ()=>
  {
    let userEnteredValue = inputBox.value;
    let getLocalStorage = localStorage.getItem("new todo list"); //getting localstorage
    if(getLocalStorage === null)
    {
        listArr=[];
    }
    else{
        listArr = JSON.parse(getLocalStorage); //transforming json string into a js object
    }
listArr.push(userEnteredValue);
localStorage.setItem("new todo list",JSON.stringify(listArr))
showtask();
  }
showtask();
  function showtask()
  {
    let getLocalStorage = localStorage.getItem("new todo list"); //getting localstorage
    if(getLocalStorage === null)
    {
        listArr=[];
        todoList.innerHTML =""
    }
    else{
        listArr = JSON.parse(getLocalStorage); //transforming json string into a js object
    }
    const pendingNum = document.querySelector(".pendingTask");
    pendingNum.textContent = listArr.length + " ";
    if(listArr.length > 0)
    {
        clearBtn.classList.add("active");
    }
    else{
        clearBtn.classList.remove("active")
    }
    let newLitag = '';
    listArr.forEach((element,index) => {
        newLitag += `<li>${element} <span onclick = "deleteTask(${index})" ><i class="fas fa-trash "></i></span></li>`
    });
todoList.innerHTML= newLitag; // adding new li tag into todolist ul 
inputBox.value = '';  //once the task added remove the input field value
  }

  function deleteTask(index)
  {
    let getLocalStorage = localStorage.getItem("new todo list")
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index,1);
    localStorage.setItem("new todo list",JSON.stringify(listArr))
    showtask();
  }
  clearBtn.onclick = ()=>{
    listArr = []; //empty the array
    localStorage.setItem("new todo list", JSON.stringify(listArr)); //set the item in localstorage
    showtask(); //call the showTasks function
  }

  

