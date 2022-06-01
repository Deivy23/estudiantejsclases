//Proceso para obtener la data a modificar de los clientes:
window.addEventListener("load", event => {
    const id = getParam("id");

    callAPI(`${url}/${id}`,"GET",{})
    .then(costumer => {
        const costumerForm = document.querySelector("#costumer-form");
        costumerForm.elements["id"].value = costumer.id;
        costumerForm.elements["name"].value = costumer.name;
        costumerForm.elements["email"].value = costumer.email;
        costumerForm.elements["address"].value = costumer.address;
        costumerForm.elements["createdAt"].value = costumer.createdAt;
    })
})

//Obtener formulario:
const costumerForm = document.querySelector("#costumer-form");

//Crear funcion del formulario para editar:
function editCostumer(e){
    e.preventDefault();

    const inputs = e.target.elements;

    const costumer = {
        id:inputs["id"].value,
        name:inputs["name"].value,
        email:inputs["email"].value,
        address:inputs["address"].value,
        createdAt:inputs["createdAt"].value,
    }

    //Enviar datos actualizados al API:
    callAPI(`${url}/${costumer.id}`,"PUT", costumer)
    .then(()=>{
        if(confirm("Desea volver al listado de cliente?")){
            window.location.href="/costumer";
        }
    })
}

costumerForm.addEventListener("submit",editCostumer);