const inputbox = document.getElementById('input-box');
const list = document.getElementById('list');

function addTask() {
    // If the input box is empty, show an alert
    if (inputbox.value === '') {
        alert('Please enter a task');
    } 
    else {
        // Create a new list item and add it to the list
        let li = document.createElement('li');

        // Add the task to the list item
        li.textContent = inputbox.value;
        list.appendChild(li);

        // add close icon
        let span = document.createElement('button');
        span.innerHTML = 'X';
        li.appendChild(span);
    }

    inputbox.value = '';
    saveData(); // Save the list items to local storage
}

list.addEventListener('click', function(e) {
    // If the user clicks on a list item, mark it as done
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData(); // Save the list items to local storage
    } 
    // If the user clicks on the close icon, remove the list item
    else if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
        saveData(); // Save the list items to local storage
    }
}, false);

function saveData() {
    // Save the list items to local storage
    localStorage.setItem("data", list.innerHTML);
}
function showTask() {
    // Display the list items from local storage
    list.innerHTML = localStorage.getItem("data");
}
showTask(); // Display the list items from local storage

// **End of ToDo List App**

// **Start of mouse follow effect, only behind the card**

const card = document.querySelector('.card');

card.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth * 100;
    const y = e.clientY / window.innerHeight * 100;

    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
});