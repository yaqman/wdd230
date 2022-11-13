const requestURL ="https://raw.githubusercontent.com/yaqman/wdd230.github.io/main/chamber/json/data.json";
const cards = document.querySelector(".grd");

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        const members = jsonObject['directory'];
        members.forEach(displayMembers);
    });

function displayMembers(member){
    let card = document.createElement("section");
    let h3 = document.createElement("h3");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let logo = document.createElement("img");
    let site = document.createElement("a");

    h3.textContent = `The Business: ${member.name}`;
    address.textContent = `The Address: ${member.address}`;
    phone.textContent = `The Phone Number: ${member.number}`

    logo.setAttribute("src", member.logo);
    logo.setAttribute("alt",`${member.name} logo`);
    logo.width = 200;
    logo.height = 200;

    site.innerHTML = member.URL;
    site.setAttribute("href", member.URL);


    card.appendChild(h3);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(site);
    card.appendChild(logo);

    cards.appendChild(card);
}

getInfo();