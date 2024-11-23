const persons = [
  {
    name: "Noah",
    image:
      "https://i.pinimg.com/control2/736x/69/8d/4a/698d4a2151d40090f85fd645fd557fbb.jpg",
    occupation: "Chef",
  },
  {
    name: "Andrew",
    image:
      "https://i.pinimg.com/control2/736x/cb/89/40/cb89404551d9a111eb03ec9dcedd921a.jpg",
    occupation: "Capenter",
  },
  {
    name: "Gabriella",
    image:
      "https://i.pinimg.com/control2/236x/92/28/90/9228902e88d1cda53fb37d695b4dae07.jpg",
    occupation: "Fashion Designer",
  },
  {
    name: "Olorunfemi",
    image:
      "https://i.pinimg.com/control2/236x/ed/a3/33/eda333ccdeac29b6fe647e78d0dc2dac.jpg",
    occupation: "Graphics designer",
  },
  {
    name: "Increase",
    image:
      "https://i.pinimg.com/control2/236x/96/0b/51/960b51f96853c6b7151693712f809d12.jpg",
    occupation: "Logistics",
  },
  {
    name: "Tega",
    image:
      "https://i.pinimg.com/control2/736x/09/95/ae/0995aea48a274b689c7b05954beffc23.jpg",
    occupation: "Full stack developer",
  },

  {
    name: "Tess",
    image:
      "https://i.pinimg.com/control2/236x/df/51/07/df5107a44a4fc5a18535137aee49bdf2.jpg",
    occupation: "Model",
  },
  {
    name: "Ariana",
    image:
      "https://i.pinimg.com/control2/236x/36/ee/88/36ee889cc7ccab5ea43a3d13b02520dd.jpg",
    occupation: "Backend Developer",
  },
  {
    name: "Thompson",
    image:
      "https://i.pinimg.com/control2/236x/db/4e/ec/db4eec7adbe70454c7962b824cddd376.jpg",
    occupation: "ML Engineer",
  },
  {
    name: "Gabriel",
    image:
      "https://i.pinimg.com/control2/236x/e7/32/8d/e7328dda453fab5ce0047ff67d0f9937.jpg",
    occupation: "Capenter",
  },
];
console.log(persons);

let body = document.getElementById("body");

persons.forEach((person) => {
  let card = document.createElement("div");
  card.classList.add("card");
  body.appendChild(card);

  let image = document.createElement("img");
  image.src = person.image;
  card.appendChild(image);

  let name = document.createElement("h1");
  name.textContent = person.name;
  card.appendChild(name);

  let occupation = document.createElement("h2");
  occupation.textContent = person.occupation;
  card.appendChild(occupation);
});
