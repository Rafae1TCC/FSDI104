let pets = JSON.parse(localStorage.getItem("pets")) || []; // Cargar mascotas desde localStorage

function Pet(name, age, gender, breed, service) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
}

function register() {
  let inputName = document.getElementById("txtName").value.trim();
  let inputAge = document.getElementById("txtAge").value.trim();
  let inputGender = document.getElementById("txtGender").value.trim();
  let inputBreed = document.getElementById("txtBreed").value.trim();
  let inputService = document.getElementById("txtService").value.trim();

  if (!inputName || !inputAge || !inputGender || !inputBreed || !inputService) {
    alert("Please fill in all fields.");
    return;
  }

  let newPet = new Pet(
    inputName,
    inputAge,
    inputGender,
    inputBreed,
    inputService
  );
  pets.push(newPet);

  localStorage.setItem("pets", JSON.stringify(pets));
  console.log("Registered pets:", pets);

  document.getElementById("txtName").value = "";
  document.getElementById("txtAge").value = "";
  document.getElementById("txtGender").value = "";
  document.getElementById("txtBreed").value = "";
  document.getElementById("txtService").value = "";

  document.getElementById("confirmation").innerHTML =
    "Your pet has been registered successfully!";
}

function init() {
  if (pets.length === 0) {
    let pet1 = new Pet("Scooby", 99, "Male", "Dane", "Grooming");
    let pet2 = new Pet("Scrappy", 99, "Male", "Dane", "Training");
    let pet3 = new Pet("Speedy", 99, "Male", "Dane", "Monthly Checkup");

    pets.push(pet1, pet2, pet3);
    localStorage.setItem("pets", JSON.stringify(pets));
  }
}

document.getElementById("txtName").addEventListener("input", function () {
  document.getElementById("confirmation").innerHTML = "";
});

window.addEventListener("load", init);
