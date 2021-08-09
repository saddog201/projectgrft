let membersInfo = [ // All the members
    {name: "Sreeni Eadara", bio: "Actually know wtf is going on"},
    {name: "Test Test ", bio: "Actually know wtf is going on"},
]

let member_cards = document.getElementById("member-cards"); // member-cards Element


// MAGIC
membersInfo.forEach((member => {
    if (!member.name || !member.bio) return false;

    member_cards.innerHTML += `
        <div class="col s12 m6 l3" style=" display: block; padding-right: 1px;width: 33.33%">
          <div class = 'card' >
            <div class='header'>
              <h3> ${member.name} </h3>
            </div>
            <div class = 'content'>
              <p> ${member.bio} </p>
            </div>
          </div>
        </div>`
}))
