const loginForm = document.querySelector("#login-form");

function login(e) {
  e.preventDefault();

  const inputs = e.target.elements;

  const user = {
    username: inputs["userName"].value,
    password: inputs["password"].value,
  };

  const url = `http://localhost:3001/user?username=${user.username}&password=${user.password}`;

  const header = {
    "Content-Type": "application/json",
  };

  const configuration = {
    method: "GET",
    headers: header,
  };

  fetch(url, configuration)
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      if (user.username != "" && user.password != "") {
        localStorage.setItem("user", JSON.stringify(user));
        const user1 = JSON.parse(localStorage.getItem("user"));
        //console.log("Hola",user1[0].id);
        window.location.href = "/dashboard";
      }
    });
}

loginForm.addEventListener("submit", login);

/* function login(){
    var username, password;

    username = document.getElementById("userName").value;
    password = document.getElementById("password").value;

    if(username !="" && password !=""){
        window.location.href="/dashboard";
    }
    
} */
