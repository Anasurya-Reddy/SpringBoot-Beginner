var usersArray = [
    { "name": "John Doe", "gender": "Male", "image": "img/john.png" },
    { "name": "Jane Doe", "gender": "Female", "image": "img/jane.png" }
];

var currentIndex = 0;

function toggleUser() {
    // Toggle
    currentIndex = 1 - currentIndex;
    var user = usersArray[currentIndex];
    var nextUser = usersArray[currentIndex];
    displayUser(nextUser);
}

function displayUser(user) {
    // Update the DOM
    document.getElementById("userImage").src = user.image;
    document.getElementById("userName").innerHTML = user.name;
    document.getElementById("userGender").innerHTML = user.gender;
}