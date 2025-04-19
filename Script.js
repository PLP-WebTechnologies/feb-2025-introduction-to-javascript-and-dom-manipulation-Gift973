 // Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', function() {
    const textElement = document.getElementById('dynamic-text');
    textElement.textContent = 'The text has been changed dynamically!';
});

// Modify CSS styles via JavaScript
document.getElementById('change-text-btn').addEventListener('mouseover', function() {
    const textElement = document.getElementById('dynamic-text');
    textElement.style.color = 'blue';  // Change text color on hover
});

document.getElementById('change-text-btn').addEventListener('mouseout', function() {
    const textElement = document.getElementById('dynamic-text');
    textElement.style.color = 'black';  // Reset text color when mouse leaves
});

// Add or remove an element when the button is clicked
document.getElementById('toggle-element-btn').addEventListener('click', function() {
    const newElement = document.getElementById('new-element');

    if (newElement.innerHTML === "") {
        newElement.innerHTML = "<p>This is a dynamically added element!</p>";
        newElement.style.border = '1px solid #ccc';
        newElement.style.padding = '10px';
    } else {
        newElement.innerHTML = "";
    }
});
