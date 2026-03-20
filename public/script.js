// Load products from gears.json
function loadGear() {
  fetch("gears.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("products");
      container.innerHTML = "";

      data.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("product");

        div.innerHTML = `
          <h3>${item.name}</h3>
          <p>${item.category}</p>
          <button onclick="buyProduct('${item.name}')">Buy</button>
        `;

        container.appendChild(div);
      });
    })
    .catch(err => console.log("LOAD ERROR:", err));
}

// Buy button function (EmailJS)
function buyProduct(productName) {

  emailjs.send("service_3rw9h5b", "template_5pxuwat", {
    name: "Music Gear Buyer",
    message: "Bought: " + productName,
    reply_to: "vicky7418vicky7418@gmail.com"
  })
  .then(function () {
    alert("Order registered! Email sent");
  })
  .catch(function (error) {
    console.log("EMAIL ERROR:", error);
    alert("Email failed");
  });

}

// Run on page load
loadGear();