//Proceso para obtener la data a modificar de los clientes:
const url = "http://localhost:3001/user";

window.addEventListener("load", event => {
    const id = getParam("id");

    callAPI(`${url}/${id}`,"GET",{})
    .then(user => {
        const userForm = document.querySelector("#user-form");
        userForm.elements["id"].value = user.id;
        userForm.elements["name"].value = user.name;
        userForm.elements["username"].value = user.username;
        userForm.elements["pass"].value = user.password;
    })
})

//Obtener formulario:
const userForm = document.querySelector("#user-form");

//Crear funcion del formulario para editar:
function edituser(e){
    e.preventDefault();

    const inputs = e.target.elements;

    const user = {
        id:inputs["id"].value,
        name:inputs["name"].value,
        username:inputs["username"].value,
        password:inputs["pass"].value,
    }

    //Enviar datos actualizados al API:
    callAPI(`${url}/${user.id}`,"PUT", user)
    .then(()=>{
        if(confirm("Desea volver al listado de un usuario?")){
            window.location.href="/user";
        }
    })
}

userForm.addEventListener("submit",edituser);