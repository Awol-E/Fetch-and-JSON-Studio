window.addEventListener("load", function(){
    let json =[];
    let index = 0;
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        return response.json()
    }).then( function(json) {
        console.log(json);
        let div = document.getElementById('container');
        let count= document.getElementById('count');
        count.innerHTML += `${json.length}`

        let astronauts = '';

        //sort the json data
        json.sort(function(a,b){
            return (a.hoursInSpace < b.hoursInSpace) ? 1 : -1 ;
        })

        for(let astronaut of json) {
            astronauts +=  `
            <div class="astronaut">
            <div class="bio">
                <h3>${astronaut.firstName} ${astronaut.lastName} </h3>
                <ul>
                    <li>Hours in space: ${astronaut.hoursInSpace}</li>
                    <li style="color:${(astronaut.active) ? 'green' : 'black'}">Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills.join(", ")}</li>
                </ul>
            </div>
            <img class="avatar" src=${astronaut.picture} />
            </div> `;
        }
        div.innerHTML = astronauts;
        });

});
