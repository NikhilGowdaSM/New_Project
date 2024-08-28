document.getElementById("userForm").addEventListener("submit", function (e) {
	e.preventDefault();

	
	const name = document.getElementById("name").value.trim();
	const city = document.getElementById("city").value.trim();
	const number = document.getElementById("number").value.trim();
	const gender = document.getElementById("gender").value;

	
	clearErrors();

   
	let isValid = true;

	if (name === "") {
	  showError("name", "Name is required.");
	  isValid = false;
	} else if (name.length < 3) {
	  showError("name", "Name must be at least 3 characters long.");
	  isValid = false;
	}

	if (city === "") {
	  showError("city", "City is required.");
	  isValid = false;
	}

	if (number === "") {
	  showError("number", "Phone number is required.");
	  isValid = false;
	} else if (!/^\d{10}$/.test(number)) {
	  showError("number", "Phone number must be 10 digits.");
	  isValid = false;
	}

	if (gender === "") {
	  showError("gender", "Gender is required.");
	  isValid = false;
	}

	if (isValid) {
	  
	  const tableBody = document.getElementById("userTableBody");

	  const newRow = document.createElement("tr");
	  newRow.innerHTML = `
		<td>${name}</td>
		<td>${city}</td>
		<td>${number}</td>
		<td>${gender}</td>
	  `;

	  tableBody.appendChild(newRow);

	  
	  document.getElementById("userForm").reset();
	}
  });

  function showError(fieldId, message) {
	const field = document.getElementById(fieldId);
	const errorElement = document.createElement("div");
	errorElement.className = "error-message";
	errorElement.style.color = "red";
	errorElement.innerText = message;
	field.parentNode.appendChild(errorElement);
  }

  function clearErrors() {
	const errors = document.querySelectorAll(".error-message");
	errors.forEach((error) => error.remove());
  }

  document.getElementById("userIcon").addEventListener("click", function () {
	const popup = document.getElementById("userPopup");
	popup.style.display = popup.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (e) {
	const userIcon = document.getElementById("userIcon");
	const userPopup = document.getElementById("userPopup");

	if (e.target !== userIcon && !userPopup.contains(e.target)) {
	  userPopup.style.display = "none";
	}
  });