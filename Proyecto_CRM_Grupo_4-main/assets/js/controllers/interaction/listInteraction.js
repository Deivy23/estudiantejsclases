const url = "http://localhost:3001/interaction";

window.addEventListener("load", (event) => {
  callAPI(url, "GET", {}).then((interactions) => {
    const interactionTableBody = document.getElementById("interactionTableBody");

    interactions.forEach((interaction) => {
      const interactionTr = document.createElement("tr");
      const interactionTd = document.createElement("td");
      const interactionTd2 = document.createElement("td");
      const interactionTd3 = document.createElement("td");
      const interactionTd4 = document.createElement("td");
      const interactionTd5 = document.createElement("td");
      const interactionTd6 = document.createElement("td");

      const interactionButtonEdit = document.createElement("button");
      interactionButtonEdit.classList.add("btn", "btn-info", "me-2");
      interactionButtonEdit.textContent = "Editar";

      const interactionButtonDelete = document.createElement("button");
      interactionButtonDelete.classList.add("btn", "btn-primary");
      interactionButtonDelete.textContent = "Eliminar";

      interactionTd.textContent = interaction.id;
      interactionTd2.textContent = interaction.note;
      interactionTd3.textContent = interaction.user;
      interactionTd4.textContent = interaction.costumer;
      interactionTd5.textContent = interaction.createdAt;

      interactionTd6.appendChild(interactionButtonEdit);
      interactionTd6.appendChild(interactionButtonDelete);

      interactionTr.appendChild(interactionTd);
      interactionTr.appendChild(interactionTd2);
      interactionTr.appendChild(interactionTd3);
      interactionTr.appendChild(interactionTd4);
      interactionTr.appendChild(interactionTd5);
      interactionTr.appendChild(interactionTd6);

      interactionTableBody.appendChild(interactionTr);

      EditCostumer(interactionButtonEdit, interaction);
      DeleteCostumer(interactionButtonDelete, interaction);
    });
  });
});

function EditCostumer(button, interaction) {
  button.addEventListener("click", (event) => {
    window.location.href = `editCostumer?id=${interaction.id}`;
  });
}

function DeleteCostumer(button, interaction) {
  button.addEventListener("click", (event) => {
    if (confirm(`Desea borrar la interaccion #: ${interaction.id}?`)) {
      callAPI(`${url}/${interaction.id}`, "DELETE", {}).then(() =>
        window.location.reload()
      );
    }
  });
}
