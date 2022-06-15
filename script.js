window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            const div = document.getElementById('container');
            json.sort((a, b) => {
                return b.hoursInSpace - a.hoursInSpace;
            });
            for (const element of json) {
                div.innerHTML += `
                <div class = 'astronaut'>
                <h3>${element.firstName} ${element.lastName}</h3>
                <ul>
                    <li>Hours in space: ${element.hoursInSpace}</li>
                    <li>Active: ${element.active}</li>
                    <li>Skills: ${element.skills}</li>
                </ul>
                <img class = 'avatar' src=${element.picture}></img>
                </div>
                `
            };


        });
    });
});
