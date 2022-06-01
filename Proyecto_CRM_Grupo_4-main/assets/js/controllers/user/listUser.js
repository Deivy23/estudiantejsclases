const url = "http://localhost:3001/user";

window.addEventListener("load", event=> {
    callAPI(url, "GET", {}).then( users => {
      const userTableBody = document.getElementById("userTableBody");
  
      users.forEach(user => {
        const userTr = document.createElement("tr");
        const userTd = document.createElement("td");
        const userTd2 = document.createElement("td");
        const userTd3 = document.createElement("td");
        const userTd4 = document.createElement("td");
        const userTd5 = document.createElement("td");
        const userTd6 = document.createElement("td");
  
        const userButtonEdit = document.createElement("button");
        userButtonEdit.classList.add("btn", "btn-info", "me-2");
        userButtonEdit.textContent="Editar";
  
        const userButtonDelete = document.createElement("button");
        userButtonDelete.classList.add("btn", "btn-primary");
        userButtonDelete.textContent="Eliminar";
  
        userTd.textContent = user.id;
        userTd2.textContent = user.name;
        userTd3.textContent = user.username;
        userTd4.textContent = user.password;
        
  
        userTd6.appendChild(userButtonEdit);
        userTd6.appendChild(userButtonDelete);
  
        userTr.appendChild(userTd);
        userTr.appendChild(userTd2);
        userTr.appendChild(userTd3);
        userTr.appendChild(userTd4);
        userTr.appendChild(userTd5);
        userTr.appendChild(userTd6);
  
        userTableBody.appendChild(userTr);
  
        Edituser(userButtonEdit, user);
        Deleteuser(userButtonDelete, user);
      })
    })
  })
  
  function Edituser(button, user){
    button.addEventListener("click", event =>{
      window.location.href=`edituser?id=${user.id}`;
    })
  }
  
  function Deleteuser(button, user) {
    button.addEventListener("click", event=> {
        if(confirm(`Desea borrar el cliente ${user.name}?`)) {
            callAPI(`${url}/${user.id}`, "DELETE", {})
            .then( ()=> window.location.reload())
        }
    })
  }