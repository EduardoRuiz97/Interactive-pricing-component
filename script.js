let slider = document.querySelector(".slider");
let toggle =  document.querySelector(".switch");

let viewsText = document.querySelector(".container__subtitle");
let price = document.querySelector(".value");

let viewsArray = ["10k", "50k", "100k", "500k", "1M"];
let priceArray = [8, 12, 16, 24, 36];
let toggleSwitchValue =  false;



slider.addEventListener("input", ()=> {

  viewsText.innerHTML = `${viewsArray[slider.value]} Pageviews`;
  updatePrice();
  
});


function updatePrice() {
  if (toggleSwitchValue == true) {
    price.innerHTML = `$${priceArray[slider.value]*0.75}.00`
  } else {
    price.innerHTML = `$${priceArray[slider.value]}.00`
  }
}



  toggle.addEventListener("change", ()=> {

    if (toggleSwitchValue == false) {
      toggleSwitchValue = true;

    } else {
      toggleSwitchValue = false;
    }

    updatePrice();

  })









