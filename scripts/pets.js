function showPets() {
  let pets = JSON.parse(localStorage.getItem("pets")) || [];
  let petList = document.getElementById("petList");
  let petCount = document.getElementById("petCount");
  let petAverageAge = document.getElementById("petAverageAge");

  petList.innerHTML = "";
  petCount.textContent = `Total pets: ${pets.length}`;

  pets.forEach((pet) => {
    let li = document.createElement("li");
    li.classList.add("list-group-item", "card");
    li.textContent = `${pet.name}, ${pet.age} years old, ${pet.gender}. Breed: ${pet.breed} - ${pet.service}`;
    petList.appendChild(li);
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

window.addEventListener("load", showPets);
