function getAndDisplayNextRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            var user = data.results[0];
            var userData = {};
            userData.name = user.name.first + ' ' + user.name.last;
            userData.gender = user.gender;
            userData.image = user.picture.large;
            displayUser(userData);
        })
        .catch(function (err) {
            console.log(err);
        });
}

function displayUser(user) {
    // Update the DOM
    document.getElementById("userImage").src = user.image;
    document.getElementById("userName").innerHTML = user.name;
    document.getElementById("userGender").innerHTML = user.gender;
}