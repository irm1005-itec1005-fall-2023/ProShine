
const inputbox = document.getElementById("input-box");

const listContainer = document.getElementById("list-countainer");

const emptyState = document.getElementById("empty-state");


function addTask(){
  if(inputbox.value === ''){
    alert("Please enter a task!");
  }
  else{
   let li = document.createElement("li");
   li.innerHTML = inputbox.value;
   listContainer.appendChild(li);
   let span = document.createElement("span");
   span.innerHTML = "\u00d7";
   li.appendChild(span);

   }

   inputbox.value = '';

   storeData();
   updateEmptyState();
} 

listContainer.addEventListener('click', function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
    storeData();
  }
  else if(e.target.tagName === 'SPAN'){
    var div = e.target.parentNode;
    div.remove();
    storeData();
  }


  updateEmptyState();
}, false);


function storeData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function saveTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}

saveTask();
updateEmptyState();

function updateEmptyState() {
  emptyState.style.display = listContainer.children.length === 0 ? 'block' : 'none';
  emptyState.classList.toggle('hiding', listContainer.children.length > 0);
}