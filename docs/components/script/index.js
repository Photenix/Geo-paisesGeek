const imgAmerica = document.getElementById("america")
const imgAfrica = document.getElementById("africa")
const imgAsia = document.getElementById("asia")
const imgOceania = document.getElementById("oceania")
const imgEuropa = document.getElementById("europa")

//Container Card
const country = document.getElementById("country")

//modular
const imgBottomInfo = document.getElementById("info-img-footer")

//inputs 
const inputCoCi = document.getElementById("input-city-country")
const inputContinent = document.getElementById("input-continent")

export { inputCoCi, inputContinent }

//jsons
const jsonOLD = "./json/datos.json"
const jsonNEW = "./json/newData.json"

import { stopAllAudios, initAudio } from './audio.js'

import { america,africa,asia,europa1,europa2,oceania } from './audio.js'

import { createCard } from './card.js'

import { initTravel } from './sedTravel.js'

alert("Colocal opcion de reproduccion")
alert("Cuidado volumen alto")

//es meme se puede quitar
initAudio()

initTravel()

imgAmerica.addEventListener("click",function(event){
    //console.log(imgAmerica.id)
    stopAllAudios()
    america.play()
    imgBottomInfo.src = "./img/AMERICA.png"
    country.innerHTML = "Cargando"
    showCard("America")
})

imgAfrica.addEventListener("click",function(event){
    //console.log(imgAfrica.id)
    stopAllAudios()
    africa.play()
    imgBottomInfo.src = "./img/AFRICA.png"
    country.innerHTML = "Cargando"
    showCard("Africa")
})

imgAsia.addEventListener("click",function(event){
    //console.log(imgAsia.id)
    stopAllAudios()
    asia.play()
    imgBottomInfo.src = "./img/ASIA.png"
    country.innerHTML = "Cargando"
    showCard("Asia")
})

imgOceania.addEventListener("click",function(event){
    //console.log(imgOceania.id)
    stopAllAudios()
    oceania.play()
    imgBottomInfo.src = "./img/OCEANIA.png"
    country.innerHTML = "Cargando"
    showCard("Oceania")
})

imgEuropa.addEventListener("click",function(event){
    //console.log(imgEuropa.id)
    stopAllAudios()
    if(getRandomInt(0,10)%2 == 0)europa1.play()
    else europa2.play()
    imgBottomInfo.src = "./img/EUROPA.png"
    country.innerHTML = "Cargando"
    showCard("Europa")
})

async function showCard(continent){
    let data = await fetch(jsonNEW)
    let json = await data.json()
    country.innerHTML = ""
    insertContainer(findByContinent(json, continent))
}

let findByContinent = (json, continent) =>{
    return json.filter(c => c.continent == continent)
}

function insertContainer(arr){
    arr.forEach(element => country.appendChild(createCard(element)));
}

function getRandomInt(min, max) {
    //copia de mozilla
    return Math.floor(Math.random() * (max - min)) + min;
}