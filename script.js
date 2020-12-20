'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const inputCountry = document.querySelector('.input-country');



 

  btn.addEventListener('click', function(e){
    e.preventDefault();  
  
  const inputcountry = inputCountry.value;
  const firstRequest = new XMLHttpRequest;
  firstRequest.open('GET', `https://restcountries.eu/rest/v2/name/${inputcountry}`);
  firstRequest.send(); 
  
    firstRequest.addEventListener('load', function(){
      //data is in json format
      // console.log(this.responseText);

      //converting data from json to object
      const [data] = JSON.parse(this.responseText);
      // console.log(data);
      //country card
      const html = `
      <article class="country">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}M People</p>
              <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
              <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
          </article>
          `;
          countriesContainer.insertAdjacentHTML('beforeend', html);
          countriesContainer.style.opacity = 1;
      });

  });

///////////////////////////////////////
/*
const getData = function(country){
  btn.addEventListener('click', function(){  
const firstRequest = new XMLHttpRequest;
firstRequest.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
firstRequest.send();    

firstRequest.addEventListener('load', function(){
    //data is in json format
    // console.log(this.responseText);

    //converting data from json to object

    const [data] = JSON.parse(this.responseText);
    // console.log(data);
    const html = `
    <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
});

});
}
getData('bharat');
getData('usa');
*/
