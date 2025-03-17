let pets = JSON.parse(localStorage.getItem("pets")) || [];

function Pet(name, animal, age, gender, breed, service, pay) {
  this.name = name;
  this.animal = animal;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.pay = pay;
}

function register() {
  let inputName = document.getElementById("txtName").value.trim();
  let inputAnimal = document.getElementById("txtAnimal").value.trim();
  let inputAge = document.getElementById("txtAge").value.trim();
  let inputGender = document.getElementById("txtGender").value.trim();
  let inputBreed = document.getElementById("txtBreed").value.trim();
  let inputService = document.getElementById("txtService").value.trim();
  let inputPay = document.getElementById("txtPay").value.trim();

  if (
    !inputName ||
    !inputAnimal ||
    !inputAge ||
    !inputGender ||
    !inputBreed ||
    !inputService ||
    !inputPay
  ) {
    alert("Please fill in all fields.");
    return;
  }

  let newPet = new Pet(
    inputName,
    inputAnimal,
    inputAge,
    inputGender,
    inputBreed,
    inputService,
    inputPay
  );
  pets.push(newPet);

  localStorage.setItem("pets", JSON.stringify(pets));
  console.log("Registered pets:", pets);

  document.getElementById("txtName").value = "";
  document.getElementById("txtAnimal").value = "";
  document.getElementById("txtAge").value = "";
  document.getElementById("txtGender").value = "";
  document.getElementById("txtBreed").value = "";
  document.getElementById("txtService").value = "";
  document.getElementById("txtPay").value = "";

  document.getElementById("confirmation").innerHTML =
    "Your pet has been registered successfully!";
}

function init() {
  if (pets.length === 0) {
    let pet1 = new Pet(
      "Scooby",
      "Dog",
      2,
      "Male",
      "Dane",
      "Grooming",
      "Credit Card"
    );
    let pet2 = new Pet(
      "Scrappy",
      "Cat",
      1,
      "Male",
      "Unknown",
      "Training",
      "Debit Card"
    );
    let pet3 = new Pet(
      "Speedy",
      "Bird",
      12,
      "Male",
      "Cockatoo",
      "Monthly Checkup",
      "Cash"
    );

    pets.push(pet1, pet2, pet3);
    localStorage.setItem("pets", JSON.stringify(pets));
  }
}

document.getElementById("txtName").addEventListener("input", function () {
  document.getElementById("confirmation").innerHTML = "";
});

window.addEventListener("load", init);
