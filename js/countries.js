const loadCountries = () => {
     fetch('https://restcountries.com/v3.1/all')
          .then(res => res.json())
          .then(data => displayCountries(data))
};

const displayCountries = countries => {
     // console.log(countries[0]);
     const countriesHTML = countries.map(country => getCountryHTML(country))
     // console.log(countriesHTML);
     const container = document.getElementById('countries');
     container.innerHTML = countriesHTML.join(' ');
}

/* const getCountryHTML = country => {
     //option-1
     const {name, flags} = country;
     return `
          <div class="country">
          <h2>${name.common}</h2>
          <img src="${flags.png}">
          </div>
     `
} */


const getCountryHTML = ({ name, capital, population, area, region, flags }) => {
     //option-2
     return `
          <div class="country">
          <h2>${name.common}</h2>
          <h3>Capital: ${capital}</h3>
          <p>Population: ${population}</p>
          <p>Area: ${area} km²</p>
          <p>Region: ${region}</p>
          <img src="${flags.png}">
          </div>
     `
}


/* const getCountryHTML = (country) => {
     return `
          <div class="country">
          <h2>${country.name.common}</h2>
          <img src="${country.flags.png}">
          </div>
     `
} */

loadCountries();
