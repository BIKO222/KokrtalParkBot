document.addEventListener('DOMContentLoaded', () => {
    // Main script logic here

    console.log('Main script loaded.');

    // Example: Add a click event to a button with id 'myButton'
    const myButton = document.getElementById('myButton');
    if (myButton) {
        myButton.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
});