const cocktails = [
  {
    name: "Blue Margarita",
    image: "/uni_project/img/blue_margarita.png",
    tags: ["Tequila", "Martini", "Stark"],
    link: "details.html?cocktail=blue_margarita",
  },
  {
    name: "Caipirinha",
    image: "/uni_project/img/caipirinha.png",
    tags: ["Cachaca", "Klassisch", "Shortdrink", "Extrem Stark"],
    link: "details.html?cocktail=caipirinha",
  },
  {
    name: "Tropical Dream",
    image: "/uni_project/img/tropical_dream.png",
    tags: ["Rum", "Tropisch", "Mittelstark"],
    link: "details.html?cocktail=tropical_dream",
  },
  {
    name: "Blue Arrow",
    image: "/uni_project/img/blue_arrow.png",
    tags: ["Gin", "Martini", "Stark"],
    link: "details.html?cocktail=blue_arrow",
  },
  {
    name: "Manhattan",
    image: "/uni_project/img/manhattan.png",
    tags: ["Whiskey", "Klassisch", "Martini", "Extrem Stark"],
    link: "details.html?cocktail=manhattan",
  },
  {
    name: "Cosmopolitan",
    image: "/uni_project/img/cosmopolitan.png",
    tags: ["Wodka", "Klassisch", "Martini", "Mittelstark"],
    link: "details.html?cocktail=cosmopolitan",
  },
  {
    name: "American Beauty",
    image: "/uni_project/img/american_beauty.png",
    tags: ["Gin", "Shortdrink", "Mittelstark"],
    link: "details.html?cocktail=american_beauty",
  },
  {
    name: "Atomic Cat",
    image: "/uni_project/img/atomic_cat.png",
    tags: ["Saft", "Alkoholfrei"],
    link: "details.html?cocktail=atomic_cat",
  },
  {
    name: "Mojito",
    image: "/uni_project/img/mojito.png",
    tags: ["Rum", "Klassisch", "Longdrink", "Leicht"],
    link: "details.html?cocktail=mojito",
  },
  {
    name: "Cuba Libre",
    image: "/uni_project/img/cuba_libre.png",
    tags: ["Rum", "Klassisch", "Longdrink", "Leicht"],
    link: "details.html?cocktail=cuba_libre",
  },
];

const container = document.getElementById("cards-container");

cocktails.forEach((cocktail) => {
  const card = document.createElement("a");
  card.className = "card";
  card.href = cocktail.link;

  const img = document.createElement("img");
  img.src = cocktail.image;
  img.alt = cocktail.name;
  card.appendChild(img);

  const cardContent = document.createElement("div");
  cardContent.className = "card-content";

  const h2 = document.createElement("h2");
  h2.textContent = cocktail.name;
  cardContent.appendChild(h2);

  const tagsDiv = document.createElement("div");
  tagsDiv.className = "tags";
  cocktail.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.textContent = tag;
    tagsDiv.appendChild(span);
  });
  cardContent.appendChild(tagsDiv);

  card.appendChild(cardContent);
  container.appendChild(card);
});
