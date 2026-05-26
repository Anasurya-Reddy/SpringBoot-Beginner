let name = "John Doe";
let gender = "Male";
let image = "img/john.png";

function toggle() {
    // Toggle
    if (gender === "Male") {
        gender = "Female";
        name = "Jane Doe";
        image = "img/jane.png";
    } else {
        gender = "Male";
        name = "John Doe";
        image = "img/john.png";
    }

    // Update the DOM
    document.getElementById("image").src = image;
    document.getElementById("name").innerHTML = name;
    document.getElementById("gender").innerHTML = gender;
}