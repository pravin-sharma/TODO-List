let form = document.querySelector('#addForm');
let taskList = document.querySelector('#tasks');
let searchInput = document.querySelector('#search');

// Add Task
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let newTaskStr = document.querySelector('#addForm #task').value;
    if (!newTaskStr) {
        alert('Please enter task before submitting');
        return false;
    }
    // document.getElementById('output').innerHTML = newTaskStr;

    let removeTaskButton = document.createElement('button');
    removeTaskButton.className = 'btn btn-danger btn-sm float-right delete';
    removeTaskButton.innerHTML = 'X';

    let newElement = document.createElement('li');
    newElement.className = 'list-group-item';
    newElement.innerHTML = newTaskStr;
    newElement.appendChild(removeTaskButton);

    taskList.appendChild(newElement);

    //clear input
    document.querySelector('#addForm #task').value = null;
});

//Remove Task
taskList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this task?')) {
            let removeElement = e.target.parentElement;
            taskList.removeChild(removeElement);
        }
    }
})


//Search Task
searchInput.addEventListener('keyup', function (e) {
    searchInputStr = searchInput.value.toLowerCase();
    let taskList = document.getElementsByClassName('list-group-item');

    Array.from(taskList).forEach(function(task){
        taskStr = task.firstChild.textContent.toLowerCase();
        if(taskStr.indexOf(searchInputStr) != -1){
            console.log(taskStr.indexOf(searchInputStr));
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
            
        }

        if(!searchInputStr){
            task.style.display = 'block';
        }
    })

})

