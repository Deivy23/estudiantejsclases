window.addEventListener("load", event=> {
  callAPI(url, "GET", {}).then( clientes => {
    const costumerTableBody = document.getElementById("costumerTableBody");

    clientes.forEach(cliente => {
      const costumerTr = document.createElement("tr");
      const costumerTd = document.createElement("td");
      const costumerTd2 = document.createElement("td");
      const costumerTd3 = document.createElement("td");
      const costumerTd4 = document.createElement("td");
      const costumerTd5 = document.createElement("td");
      const costumerTd6 = document.createElement("td");

      const costumerButtonEdit = document.createElement("button");
      costumerButtonEdit.classList.add("btn", "btn-info", "me-2");
      costumerButtonEdit.textContent="Editar";

      const costumerButtonDelete = document.createElement("button");
      costumerButtonDelete.classList.add("btn", "btn-primary");
      costumerButtonDelete.textContent="Eliminar";

      costumerTd.textContent = cliente.id;
      costumerTd2.textContent = cliente.name;
      costumerTd3.textContent = cliente.email;
      costumerTd4.textContent = cliente.address;
      costumerTd5.textContent = cliente.createdAt;

      costumerTd6.appendChild(costumerButtonEdit);
      costumerTd6.appendChild(costumerButtonDelete);

      costumerTr.appendChild(costumerTd);
      costumerTr.appendChild(costumerTd2);
      costumerTr.appendChild(costumerTd3);
      costumerTr.appendChild(costumerTd4);
      costumerTr.appendChild(costumerTd5);
      costumerTr.appendChild(costumerTd6);

      costumerTableBody.appendChild(costumerTr);

      EditCostumer(costumerButtonEdit, cliente);
      DeleteCostumer(costumerButtonDelete, cliente);
    })
  })
})

function EditCostumer(button, costumer){
  button.addEventListener("click", event =>{
    window.location.href=`editCostumer?id=${costumer.id}`;
  })
}

function DeleteCostumer(button, costumer) {
  button.addEventListener("click", event=> {
      if(confirm(`Desea borrar el cliente ${costumer.name}?`)) {
          callAPI(`${url}/${costumer.id}`, "DELETE", {})
          .then( ()=> window.location.reload())
      }
  })
}