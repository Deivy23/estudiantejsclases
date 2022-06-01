const userForm = document.querySelector("#user-form");

function saveUser(e) {
  e.preventDefault();

  const inputs = e.target.elements;

  const user = {
    name: inputs["name"].value,
    username: inputs["username"].value,
    password: inputs["pass"].value,
    
  };

  const url = "http://localhost:3001/user";

  const header = {
    "Content-Type": "application/json",
  };

  const configuration = {
    method: "POST",
    body: JSON.stringify(user),
    headers: header,
  };

  fetch(url, configuration)
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      console.log(user);
    });

    //window.location.href="/user";
}

userForm.addEventListener("submit", saveUser);
