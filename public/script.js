let gears = [];

async function loadGear(){
  const res = await fetch("/gears.json");
  gears = await res.json();
  displayGear(gears);
}

function displayGear(list){
  const container = document.getElementById("gear-container");
  container.innerHTML = "";

  list.forEach(g => {
    container.innerHTML += `
    <div class="card">
      <a href="${g.link}" target="_blank">
        <img src="${g.image}">
      </a>
      <h3>${g.name}</h3>
      <p>${g.type}</p>
      <button onclick="buyProduct('${g.name}')">Buy</button>
    </div>`;
  });
}

document.getElementById("search").addEventListener("input", function(){
  const text = this.value.toLowerCase();
  const filtered = gears.filter(g => g.name.toLowerCase().includes(text));
  displayGear(filtered);
});

function buyProduct(productName){

  emailjs.send("service_3rw9h5b","template_5pxuwat",{
    name: "Customer",
    message: "Bought: " + productName,
    reply_to: "vicky7418vicky7418@gmail.com"
  })
  .then(function(){
    alert("Buy registered! Email sent");
  })
  .catch(function(error){
    console.log("EMAIL ERROR:", error);
  });

}

loadGear();