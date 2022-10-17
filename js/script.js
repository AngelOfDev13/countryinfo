const input = document.querySelector('#country-input');
let info = document.querySelector('#pais-contenedor');
const url = '//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=';
let countries = [];



const getCountry = async () => {
    countries = await (await fetch('https://restcountries.com/v3.1/all', { method: 'GET', })).json();
    

}
getCountry();



input.addEventListener('input', e => {
    
        let listaFiltrada = countries.filter(element => element.name.common.toLowerCase().startsWith(e.target.value.toLowerCase()));
       
        // if (listaFiltrada.length > 10 && countries === 1 ) {
        //     info.innerHTML = 
        //     `<p> Espicifica Tu Busqueda</p>`
        // } else if (condition) {
            
        // } else if (condition) {
            
        // } else { 

        // }
        
         listaFiltrada.forEach(element => { 
            info.innerHTML = 
            `
            <img src="${element.flags.svg}">
            <p>Pais: ${element.name.common} </p>
            <p>Capital: ${element.capital}</p>
            <p>Habitantes: ${element.population}</p>
            <p>clima: ${Math.floor(element.latlng[0])} C</p>
            <p>Region: ${element.region}</p>
            `
            
         });

        });
          

           // let name = listaFiltrada.find(element => element.flags);

//   let convertir = (listaFiltrada) => { 
//     if (listaFiltrada === object) {
//         JSON.stringify(name);
                
//     } 
//     console.log(convertir);
//   }


// {/* <div class="loader"></div> */} ///////loader
        
     // funcion del clima   
    // const getClima = async () => { 
//     clima = await (await fetch(url, {method: 'GET', })).json();
//     console.log(clima);
// }

// getClima();



            
// info.innerHTML = 
      
// `<p></p>
// <p>Pais:</p>
// <p>Capital:</p>
// <p>Habitantes:</p>
// <p>Region:</p>
// `  
    
    
// const getCountry = async () => { 

//     const countryInfo = await (await fetch('https://restcountries.com/v3.1/all', {method: 'GET'})).json();
//         console.log(countryInfo);
//         }


// getCountry ();


// document.queryselector('search').addEventListener('input', e =>{

//     const listaFiltrada = lista.filter(elemento => elemento.name.lowrcase().starWidth(e.target.value));



// })


// estilo del input
document.querySelectorAll('.text-input').forEach((Element) => {
    Element.addEventListener('blur', (event) => {
        if (event.target.value != '') {
            event.target.nextElementSibling.classList.add('filled');

        } else {
            event.target.nextElementSibling.classList.remove('filled')
        }
    })
})

// input.addEventListener('submit', async e  => { 
//        e.preventDefault();

//         const countryInfo = await (await fetch('https://restcountries.com/v3.1/all', {method: 'GET'})).json();
//         const infoPais = [...input.children].find(option => option.selected).value;


//         infoCountry.innerHTML = 
//         `
//         <p>pais:${name.common}</p>
//         <p>capital:</p>
//         <p>habitantes:</p>
//         <p>region:</p>
// `




// });

// informacion de la pag
        