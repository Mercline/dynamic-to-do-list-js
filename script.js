document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input'); // Selecting the input field
    const addButton = document.getElementById('add-task-btn'); // Selecting the add task button
    const taskList = document.getElementById('task-list'); // Selecting the task list

    // Load existing tasks from Local Storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Initialize tasks array

    // Function to add a new task
    function addTask(taskText) {
        const listItem = document.createElement('li'); // Create a new list item
        listItem.textContent = taskText; // Set the text content to the task text

        // Add a class to the list item for styling
        listItem.classList.add('task-item'); // Add class 'task-item'

        // Create a new button for removing the task
        const removeButton = document.createElement('button'); // Create a button element
        removeButton.textContent = 'Remove'; // Set button text
        removeButton.className = 'remove-btn'; // Assign a class name

        // Assign an onclick event to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(listItem); // Remove the list item from taskList
            tasks = tasks.filter(task => task !== taskText); // Remove the task from the tasks array
            updateLocalStorage(); // Update Local Storage after removing
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);
        
        // Append the list item to the task list
        taskList.appendChild(listItem);
        
        // Update tasks array and Local Storage
        tasks.push(taskText); // Add new task to the tasks array
        updateLocalStorage(); // Save the updated tasks array to Local Storage
    }

    // Function to update Local Storage with current tasks
    function updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Serialize tasks array and save
    }

    // Load tasks from Local Storage
    function loadTasks() {
        if (tasks.length > 0) {
            tasks.forEach(task => addTask(task)); // Add each task to the list
        }
    }

    // Event listener for the Add Task button
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim(); // Get the task text and trim whitespace
        if (taskText === '') {
            alert('Please enter a task.'); // Prompt the user to enter a task
            return; // Prevent adding empty tasks
        }
        addTask(taskText); // Add task to the list
        taskInput.value = ''; // Clear the task input field
    });

    // Event listener for the Enter key to add a task
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addButton.click(); // Simulate button click
        }
    });

    // Load tasks from Local Storage when the document is fully loaded
    loadTasks(); // This line calls loadTasks to populate the list on page load
});
