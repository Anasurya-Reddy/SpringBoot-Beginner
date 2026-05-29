function getAndDisplayNextRandomUser() {
    fetch('/api/users')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            var userList = Array.isArray(data) ? data : (data.results ? data.results : []);
            if (userList.length === 0) {
                console.error('No user data returned');
                return;
            }
            var id = Math.floor(Math.random() * userList.length);
            var user = userList[id];
            var userData = {
                name: user.name,
                gender: user.gender,
                image: user.image
            };
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