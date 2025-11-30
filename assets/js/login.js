document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const specialUser = "admin";
      const specialPassword = "12345";

      if (username === specialUser && password === specialPassword) {
        window.location.href = "admin/admin-dash.html"; 
      } else {
        window.location.href = "main.html";
      }
    });