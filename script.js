document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input'); // Selecting the input field
    const addButton = document.getElementById('add-task-btn'); // Selecting the add task button
    const taskList = document.getElementById('task-list'); // Selecting the task list

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get the task text and trim whitespace

        // Check if taskText is not empty
        if (taskText === '') {
            alert('Please enter a task.'); // Prompt the user to enter a task
            return; // Prevent adding empty tasks
        }

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
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);
        
        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = ''; 
    }

    // Event listener for the Add Task button
    addButton.addEventListener('click', addTask);

    // Event listener for the Enter key to add a task
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optional: invoke addTask when the document is fully loaded
    // addTask(); // Remove or comment this line if not needed
});
