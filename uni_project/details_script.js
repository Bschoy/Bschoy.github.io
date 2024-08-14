const urlParams = new URLSearchParams(window.location.search);
const cocktailParam = urlParams.get("cocktail");

const cocktails = {
  blue_margarita: {
    image: "/uni_project/img/blue_margarita.png",
    ingredients: [
      "½ Teelöffel Salz",
      "3 Teile Tequila",
      "1½ Teile Triple Sec",
      "1½ Teile Limettensaft",
      "1½ Teile blauer Curaçao",
      "1 Teelöffel Zucker",
      "Eiswürfel",
    ],
    instructions: [
      "Eis in Shaker geben",
      "Tequila, Salz, Zucker, Limettensaft, Triple Sec, blauen Curaçao in Shaker geben",
      "schütteln",
      "durch ein Sieb in Cocktailglas gießen",
      "mit Limettenspalte garnieren",
    ],
    background: "url('/uni_project/img/blue_magarita_background.png')",
  },
  caipirinha: {
    image: "/uni_project/img/caipirinha.png",
    ingredients: [
      "4 Limettenspalten",
      "3 Teelöffel Zucker",
      "2½ Teile Cachaça",
      "gemahlenes Eis",
    ],
    instructions: [
      "Limettenspalten und Zucker in altmodisches Glas geben",
      "Limettenspalten und Zucker mit Muddler zerdrücken",
      "mit gemahlenem Eis auffüllen",
      "Cachaça in Glas gießen",
      "verrühren",
      "mit Limettenspalte garnieren",
    ],
    background: "url('/uni_project/img/caipirinha_background.png')",
  },
  tropical_dream: {
    image: "/uni_project/img/tropical_dream.png",
    ingredients: [
      "2¼ Teile weißer Rum",
      "2¼ Teile Minzlikör",
      "1 Esslöffel Kokoscreme",
      "3 Esslöffel Ananassaft",
      "1 Teil Crème de Bananes",
      "½ Stück Banane",
      "Eiswürfel",
    ],
    instructions: [
      "weißen Rum, Ananassaft, Minzlikör, Kokoscreme, Banane und Eiswürfel in Blender geben",
      "vermischen",
      "durch ein Sieb in Hurricaneglas gießen",
    ],
    background: "url('/uni_project/img/trpoical_dream_background.png')",
  },
  blue_arrow: {
    image: "/uni_project/img/blue_arrow.png",
    ingredients: [
      "2 Teile Gin",
      "1 Teil Triple Sec",
      "1 Teil blauer Curaçao",
      "1 Teil Limettensaft",
      "zerbrochenes Eis",
    ],
    instructions: [
      "mit gemahlenem Eis auffüllen",
      "Limettensaft, blauen Curaçao, Triple Sec und Gin in Shaker gießen",
      "schütteln",
      "durch ein Sieb in Cocktailglas gießen",
      "mit Cocktailkirsche garnieren",
    ],
    background: "url('/uni_project/img/blue_arrow_background.png')",
  },
  manhattan: {
    image: "/uni_project/img/manhattan.png",
    tags: ["Whiskey", "Klassisch", "Martini", "Extrem Stark"],
    ingredients: [
      "1 Schuss Angostura",
      "1 Teil roter Wermut",
      "2½ Teile kanadischer Whisky",
      "Eiswürfel",
    ],
    instructions: [
      "mit Eiswürfeln auffüllen",
      "Angostura, roten Wermut und Whiskey in Mixer Glas gießen",
      "verrühren",
      "durch ein Sieb in Cocktailglas gießen",
      "mit Cocktailkirsche garnieren",
    ],
    background: "url('/uni_project/img/manhattan_background.png')",
  },
  cosmopolitan: {
    image: "/uni_project/img/cosmopolitan.png",
    ingredients: [
      "¾ Teile Cointreau",
      "2 Teile Zitruswodka",
      "¾ Teile Limettensaft",
      "1½ Teile Preiselbeersaft",
      "Eiswürfel",
    ],
    instructions: [
      "mit Eiswürfeln auffüllen",
      "Wodka, Preiselbeersaft, Limettensaft und Cointreau in Shaker gießen",
      "schütteln",
      "durch ein Sieb in Cocktailglas gießen",
      "mit Orangenspalte garnieren",
    ],
    background: "url('/uni_project/img/cosmopolitan_background.png')",
  },
  american_beauty: {
    image: "/uni_project/img/american_beauty.png",
    ingredients: [
      "3 Teile Gin",
      "1½ Teile Zitronensaft",
      "1 Teil Zuckersirup",
      "3 Stück Himbeeren",
      "3 Stück Blaubeeren",
      "6 Stück Minzblätter",
      "Eis",
    ],
    instructions: [
      "Himbeeren, Minzblätter, Zitronensaft und Blaubeeren in Shaker geben",
      "Himbeeren, Minzblätter, Zitronensaft und Blaubeeren mit Muddler zerdrücken",
      "Zuckersirup, Eis und Gin in Shaker geben",
      "schütteln",
      "durch ein Sieb in altmodisches Glas gießen",
      "mit Zitronenspirale garnieren",
    ],
    background: "url('/uni_project/img/american_beauty_background.png')",
  },
  atomic_cat: {
    image: "/uni_project/img/atomic_cat.png",
    ingredients: ["4 Teile Orangensaft", "4 Teile Tonic Water", "Eiswürfel"],
    instructions: [
      "mit Eis auffüllen",
      "Tonic Water und Orangensaft in Glas gießen",
      "verrühren",
      "mit Orangenscheibe garnieren",
    ],
    background: "url('/uni_project/img/atomic_cat_background.png')",
  },
  mojito: {
    image: "/uni_project/img/mojito.png",
    ingredients: [
      "2 Teile weißer Rum",
      "2 Teelöffel Zuckersirup",
      "1½ Teile Limettensaft",
      "3 Teile Sodawasser",
      "6 Stück Minzblätter",
      "gemahlenes Eis",
    ],
    instructions: [
      "Zucker und Minzblätter in Collins-Glas geben",
      "Limettensaft in Glas gießen",
      "Limettensaft, Zucker und Minzblätter mit Muddler zerdrücken",
      "mit gemahlenem Eis auffüllen",
      "weißen Rum in Glas gießen",
      "mit Sodawasser auffüllen",
      "mit Minzblatt und Limettenspalte garnieren",
    ],
    background: "url('/uni_project/img/mojito_background.png')",
  },
  cuba_libre: {
    image: "/uni_project/img/cuba_libre.png",
    ingredients: [
      "2½ Teile weißer Rum",
      "½ Teile Limettensaft",
      "6 Teile Kola",
      "Eiswürfel",
    ],
    instructions: [
      "mit Eis auffüllen",
      "Limettensaft und weißen Rum in Glas gießen",
      "mit Kola auffüllen",
      "mit Limettenspalte garnieren",
    ],
    background: "url('/uni_project/img/cuba_libre_background.png')",
  },
};

if (cocktailParam && cocktails[cocktailParam]) {
  const cocktail = cocktails[cocktailParam];

  // Apply image background to the specific element
  const gradientContainer = document.getElementById("gradient-container");
  if (gradientContainer) {
    gradientContainer.style.background = `${cocktail.background} no-repeat center center / cover`;
  }

  document.getElementById("cocktail-image").src = cocktail.image;
  document.getElementById("cocktail-image").alt = cocktail.name;

  const ingredientsList = document.getElementById("cocktail-ingredients");
  ingredientsList.innerHTML = ""; // Clear previous ingredients
  cocktail.ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    ingredientsList.appendChild(li);
  });

  const instructionsList = document.getElementById("cocktail-instructions");
  instructionsList.innerHTML = ""; // Clear previous instructions
  cocktail.instructions.forEach((instruction) => {
    const li = document.createElement("li");
    li.textContent = instruction;
    instructionsList.appendChild(li);
  });
} else {
  document.getElementById("cocktail-image").alt = "Cocktail not found";
}
