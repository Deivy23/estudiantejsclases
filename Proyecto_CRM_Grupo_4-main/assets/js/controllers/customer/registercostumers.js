const costumerForm = document.querySelector("#costumer-form");

function saveCostumer(e) {
  e.preventDefault();

  const inputs = e.target.elements;

  const costumers = {
    name: inputs["name"].value,
    email: inputs["email"].value,
    address: inputs["address"].value,
    createdAt: obtenerFecha(),
  };

  const url = "http://localhost:3001/costumer";

  const header = {
    "Content-Type": "application/json",
  };

  const configuration = {
    method: "POST",
    body: JSON.stringify(costumers),
    headers: header,
  };

  fetch(url, configuration)
    .then((response) => {
      return response.json();
    })
    .then((costumer) => {
      console.log(costumer);
    });

    window.location.href="/costumer";
}

costumerForm.addEventListener("submit", saveCostumer);
