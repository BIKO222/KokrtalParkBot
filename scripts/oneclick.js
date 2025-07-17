document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (event) {
        // Prevent default action if needed
        // event.preventDefault();

        // Example: Show an alert on any click
        alert('One click detected!');

        // You can add your custom logic here
        // For example, redirect, toggle a class, etc.
        // window.location.href = 'https://example.com';
    }, { once: true }); // Ensures the handler runs only once
});