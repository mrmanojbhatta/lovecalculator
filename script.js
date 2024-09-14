// Function to calculate love percentage
function checkloveper() {
    // Get values of name and love name from input fields
    var name = document.getElementById('name').value.trim();
    var lname = document.getElementById('lname').value.trim();

    // Regular expression to check if input contains only letters and spaces
    var nameRegex = /^[a-zA-Z\s]+$/;

    // Validation for the first name
    if (name === "") {
        alert('Please enter your name');
    } else if (name.length <= 2) {
        alert('Name must be at least 3 characters');
    } else if (!nameRegex.test(name)) {
        alert('Name cannot contain numbers or special characters');
    }
    // Validation for the second name
    else if (lname === "") {
        alert('Please enter your love name');
    } else if (lname.length <= 2) {
        alert('Love name must be at least 3 characters');
    } else if (!nameRegex.test(lname)) {
        alert('Love name cannot contain numbers or special characters');
    }
    // If validation passes, calculate love percentage
    else {
        var lovdata = Math.random() * 100;
        lovdata = Math.floor(lovdata);
        // Display the calculated love percentage
        document.getElementById('lovevalue').value = lovdata + "%";
    }
}
