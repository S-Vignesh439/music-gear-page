let gears = [];

async function loadGear(){

const res = await fetch("/gears");
gears = await res.json();

displayGear(gears);

}

function displayGear(list){

const container = document.getElementById("gear-container");
container.innerHTML = "";

list.forEach(g => {

container.innerHTML += `

<div class="card"><a href="${g.link}" target="_blank">
<img src="${g.image}">
</a><h3>${g.name}</h3>
<p>${g.type}</p><button onclick="buyProduct()">Buy</button>

</div>
`;});

}

document.getElementById("search").addEventListener("input", function(){

const text = this.value.toLowerCase();

const filtered = gears.filter(g =>
g.name.toLowerCase().includes(text)
);

displayGear(filtered);

});

(function(){
emailjs.init("GqynOOoSjPTV6G0sb");
})();

function buyProduct(){

  emailjs.send("service_3rw9h5b","template_5pxuwat",{
    name: "Customer",
    message: "Product bought",
    reply_to: "test@gmail.com"
  })
  .then(function(){
    alert("Order registered! Email sent");
  })
  .catch(function(error){
    console.log("EMAIL ERROR:", error);
  });

}