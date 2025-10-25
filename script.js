document.getElementById('regForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const dept = document.getElementById('dept').value.trim();
      const msg = document.getElementById('msg');

      if (name && email && dept) {
        msg.innerText = "Registration Successful!";
        msg.style.color = "#28a745";
        msg.classList.add("show");
        this.reset();
      } else {
        msg.innerText = "Please fill out all fields.";
        msg.style.color = "#dc3545";
        msg.classList.add("show");
      }
    });