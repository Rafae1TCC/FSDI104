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

    let tdAge = document.createElement("td");
    tdAge.textContent = pet.age;

    let tdGender = document.createElement("td");
    tdGender.textContent = pet.gender;

    let tdBreed = document.createElement("td");
    tdBreed.textContent = pet.breed;

    let tdService = document.createElement("td");
    tdService.textContent = pet.service;

    let tdAction = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.onclick = function () {
      deletePet(index);
    };
    tdAction.appendChild(deleteButton);

    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tr.appendChild(tdGender);
    tr.appendChild(tdBreed);
    tr.appendChild(tdService);
    tr.appendChild(tdAction);

    petTable.appendChild(tr);
  });

  calculateAverageAge(pets, petAverageAge);
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

function deletePet(index) {
  let pets = JSON.parse(localStorage.getItem("pets")) || [];
  pets.splice(index, 1);
  localStorage.setItem("pets", JSON.stringify(pets));
  showPets(); // Se actualiza la tabla
}

window.addEventListener("load", showPets);
