//img
const imgAmerica = document.getElementById("america")
const imgAfrica = document.getElementById("africa")
const imgAsia = document.getElementById("asia")
const imgOceania = document.getElementById("oceania")
const imgEuropa = document.getElementById("europa")

//Container Card
const country = document.getElementById("country")

//modular
const buttonSend = document.getElementById("send-ask")
const imgBottomInfo = document.getElementById("info-img-footer")

//inputs 
const inputCoCi = document.getElementById("input-city-country")
const inputContinent = document.getElementById("input-continent")
const inputCalendar1 = document.getElementById("input-calendar-1")
const inputCalendar2 = document.getElementById("input-calendar-2")
const inputTextArea = document.getElementById("input-big-text")
const inputs = document.getElementsByClassName("in")

//jsons
const jsonOLD = "./json/datos.json"
const jsonNEW = "./json/newData.json"


if(Number(sessionStorage["id"]) == NaN){
    sessionStorage.setItem("id",0)
}
let id = Number(sessionStorage["id"])

for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    element.addEventListener("click",function(e) {
        element.style = ""
    })
}

buttonSend.addEventListener("click",function(event){
    inputCalendar1.style = ""
    inputCalendar2.style = ""
    inputTextArea.style = ""

    if(inputCalendar1.value != "" && 
    inputCalendar2.value != "" && 
    inputTextArea.value != ""){
        let json = {
            continent : inputContinent.value,
            country_city : inputCoCi.value,
            date_after : inputCalendar1.value,
            date_before : inputCalendar2.value,
            coment : inputTextArea.value
        }
        infoErase()
        alert("Datos de tu viaje enviados")
        sessionStorage.setItem(id,JSON.stringify(json))
        id++
        sessionStorage.setItem("id",id)
    }
    else {
        let turnRed = "border: 1px solid red"
        let turnGreen = "border: 2px solid #22ac24"

        if(inputCalendar1.value == "") inputCalendar1.style = turnRed
        else inputCalendar1.style = turnGreen

        if(inputCalendar2.value == "") inputCalendar2.style = turnRed
        else inputCalendar2.style = turnGreen

        if(inputTextArea.value == "") inputTextArea.style = turnRed
        else inputTextArea.style = turnGreen
        
        alert("Por favor ingrese todos los campos")
    }
})

function infoErase(){
    inputCalendar1.value = ""
    inputCalendar2.value = ""
    inputTextArea.value = ""
}

imgAmerica.addEventListener("click",function(event){
    //console.log(imgAmerica.id)
    imgBottomInfo.src = "./img/AMERICA.png"
    country.innerHTML = "Cargando"
    fetch(jsonNEW)
        .then(data => data.json())
        .then(json => {
            country.innerHTML =""
            insertContainer(findByContinent(json, "America"))
        })
})

imgAfrica.addEventListener("click",function(event){
    console.log(imgAfrica.id)
    imgBottomInfo.src = "./img/AFRICA.png"
    country.innerHTML = "Cargando"
    fetch(jsonNEW)
        .then(data => data.json())
        .then(json => {
            country.innerHTML =""
            insertContainer(findByContinent(json, "Africa"))
        })
})

imgAsia.addEventListener("click",function(event){
    //console.log(imgAsia.id)
    imgBottomInfo.src = "./img/ASIA.png"
    country.innerHTML = "Cargando"
    fetch(jsonNEW)
        .then(data => data.json())
        .then(json => {
            country.innerHTML =""
            insertContainer(findByContinent(json, "Asia"))
        })
})

imgOceania.addEventListener("click",function(event){
    //console.log(imgOceania.id)
    imgBottomInfo.src = "./img/OCEANIA.png"
    country.innerHTML = "Cargando"
    fetch(jsonNEW)
        .then(data => data.json())
        .then(json => {
            country.innerHTML =""
            insertContainer(findByContinent(json, "Oceania"))
        })
})

imgEuropa.addEventListener("click",function(event){
    //console.log(imgEuropa.id)
    imgBottomInfo.src = "./img/EUROPA.png"
    country.innerHTML = "Cargando"
    fetch(jsonNEW)
        .then(data => data.json())
        .then(json => {
            country.innerHTML =""
            insertContainer(findByContinent(json, "Europa"))
        })
        
})

let findByContinent = (json, continent) =>{
    //console.log(json)
    return json.filter(c => c.continent == continent)
}

function insertContainer(arr){
    arr.forEach(element => {
        country.appendChild(createCard(element))
    });
}

function createCard(obj){
    let card = document.createElement("div")
    let header = document.createElement("header")
    let img = document.createElement("img")
    let h2 = document.createElement("h2")
    let a = document.createElement("a")
    let button = document.createElement("button")

    a.href = "#info"
    button.innerText = "Ver mas"

    button.addEventListener("click",function(event){
        const imgInfo = document.getElementById("img-city")
        //city country
        const CoCi = document.getElementById("country-city")
        const description = document.getElementById("description")

        imgInfo.src = obj.image
        CoCi.innerText = `${obj.country} - ${obj.city}`
        description.innerText = obj.description

        inputCoCi.value = `${obj.country} - ${obj.city}`
        inputContinent.value = obj.continent
    })

    a.appendChild(button)
    
    card.className = "country-card"

    img.src = obj.image
    h2.innerText = `${obj.country} - ${obj.city}`

    header.appendChild(img)
    card.appendChild(header)
    card.appendChild(h2)
    card.appendChild(a)
    
    return card
}
