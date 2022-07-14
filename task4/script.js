/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

function getRandomColor() {
  let letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Mtach.random() * 16)];
  }
  return color;
}

const renderCard = (brand) => {
  const card = document.createElement("div");

  const brandNameElem = document.createElement("h2");
  const listEl = document.createElement("ul");

  brandNameElem.textContent = brand.brand;
  brand.models.forEach((models) => {
    const modelEl = document.createElement("li");
    modelEl.textContent = models;
    listEl.append(modelEl);
  });

  brandNameElem.style.textAlign = "center";

  card.className = "card";
  card.style.background = card.append(brandNameElem, listEl);
  document.getElementById("output").append(card);
};

fetch(ENDPOINT)
  .then((resp) => resp.json())
  .then((response) => {
    console.log(response);
    response.forEach((brand) => renderCard(brand));
  })
  .catch((error) => {
    console.error(error);
  });
