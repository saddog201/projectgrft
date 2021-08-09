let membersInfo = [ // All the members
    {name: "Sreeni Eadara", bio: "Description"},
    {name: "First Last", bio: "Description"},
    {name: "First Last", bio: "Description"},
    {name: "First Last", bio: "Description"},
    {name: "First Last", bio: "Description"},
    {name: "First Last", bio: "Description"},
]

let member_cards = document.getElementById("member-cards"); // member-cards Element


// MAGIC
membersInfo.forEach((member => {
    if (!member.name || !member.bio) return false;

    member_cards.innerHTML += `
        <div class="col s12 m6 l3" style=" display: block; padding-left: 10px; width: 33.33%;">
          <center>
            <div class = 'card'>
              <div class= 'header'>
                <h5> ${member.name} </h5>
              </div>
              <div class = 'content'>
                <p> ${member.bio} </p>
              </div>
            </center>
          </div>
        </div>`
}))
