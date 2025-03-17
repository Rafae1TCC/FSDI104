function showPets() {
  let pets = JSON.parse(localStorage.getItem("pets")) || [];
  let petTable = document.getElementById("petTable");
  let petCount = document.getElementById("petCount");
  let petAverageAge = document.getElementById("petAverageAge");

  petTable.innerHTML = "";
  petCount.textContent = `Total pets: ${pets.length}`;

  pets.forEach((pet, index) => {
    let tr = document.createElement("tr");

    let tdName = document.createElement("td");
    tdName.textContent = pet.name;

    let tdAnimal = document.createElement("td");
    tdAnimal.textContent = pet.animal;

    let tdAge = document.createElement("td");
    tdAge.textContent = pet.age;

    let tdGender = document.createElement("td");
    tdGender.textContent = pet.gender;

    let tdBreed = document.createElement("td");
    tdBreed.textContent = pet.breed;

    let tdService = document.createElement("td");
    tdService.textContent = pet.service;

    let tdPay = document.createElement("td");
    tdPay.textContent = pet.pay;

    let tdAction = document.createElement("td");
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("btn", "btn-warning", "btn-sm", "me-2");
    editButton.onclick = function () {
      enableEdit(tr, index);
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn", "btn-danger", "btn-sm");
    deleteButton.onclick = function () {
      deletePet(index);
    };

    tdAction.appendChild(editButton);
    tdAction.appendChild(deleteButton);

    tr.appendChild(tdName);
    tr.appendChild(tdAnimal);
    tr.appendChild(tdAge);
    tr.appendChild(tdGender);
    tr.appendChild(tdBreed);
    tr.appendChild(tdService);
    tr.appendChild(tdPay);
    tr.appendChild(tdAction);

    petTable.appendChild(tr);
  });

  calculateAverageAge(pets, petAverageAge);
}

function enableEdit(tr, index) {
  let cells = tr.querySelectorAll("td");

  for (let i = 0; i < cells.length - 1; i++) {
    let cell = cells[i];
    let currentValue = cell.textContent;
    cell.innerHTML = `<input type="text" value="${currentValue}" class="form-control">`;
  }

  let editButton = tr.querySelector("button.btn-warning");
  editButton.textContent = "Save";
  editButton.classList.remove("btn-warning");
  editButton.classList.add("btn-success");
  editButton.onclick = function () {
    saveEdit(tr, index);
  };
}

function saveEdit(tr, index) {
  let pets = JSON.parse(localStorage.getItem("pets")) || [];
  let cells = tr.querySelectorAll("td");

  pets[index] = {
    name: cells[0].querySelector("input").value,
    animal: cells[1].querySelector("input").value,
    age: cells[2].querySelector("input").value,
    gender: cells[3].querySelector("input").value,
    breed: cells[4].querySelector("input").value,
    service: cells[5].querySelector("input").value,
    pay: cells[6].querySelector("input").value,
  };

  localStorage.setItem("pets", JSON.stringify(pets));

  showPets();
}

function deletePet(index) {
  let pets = JSON.parse(localStorage.getItem("pets")) || [];
  pets.splice(index, 1);
  localStorage.setItem("pets", JSON.stringify(pets));
  showPets();
}

function calculateAverageAge(pets, displayElement) {
  if (pets.length === 0) {
    displayElement.textContent = "Average age: N/A";
    return;
  }

  let totalAge = pets.reduce((sum, pet) => sum + parseFloat(pet.age), 0);
  let averageAge = (totalAge / pets.length).toFixed(2);

  displayElement.textContent = `Average age: ${averageAge} years`;
}

window.addEventListener("load", showPets);
