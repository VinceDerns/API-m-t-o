/* 
Rajouter clé API :
https://openweathermap.org/
*/
const API_KEY = "";

/*Appel API avec ville en parametre fonction*/
let apiCall = function (city) {    
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=fr&units=metric`;
    
    fetch(url).then(response =>
        response.json().then((data) => {
        console.log(data);
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML = "<i class='fa-solid fa-temperature-half'></i>" + data.main.temp + '°C';
        document.querySelector('#wind').innerHTML = "<i class='fa-sharp fa-solid fa-wind'></i>" + data.wind.speed + ' km/h';
        document.querySelector('#humidity').innerHTML = "<i class='fa-solid fa-droplet'></i>" + data.main.humidity + ' %';
        })
    )
    .catch((err) => console.log('Erreur : ' + err));
}
 
/* Écouteur d'événement sur le formulaire*/
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;

    apiCall(ville);
});

apiCall('Lille');