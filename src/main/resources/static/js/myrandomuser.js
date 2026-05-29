function getAndDisplayNextRandomUser() {
    fetch('/api/users')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let id = Math.floor(Math.random() * 3);
            var user = Array.isArray(data) ? data[id] : (data.results ? data.results[id] : null);
            if (!user) {
                console.error('No user data returned');
                return;
            }
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