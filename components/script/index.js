const imgAmerica = document.getElementById("america")
const imgAfrica = document.getElementById("africa")
const imgAsia = document.getElementById("asia")
const imgOceania = document.getElementById("oceania")
const imgEuropa = document.getElementById("europa")

const country = document.getElementById("country")

//modular

const buttonSed = document.getElementById("set-ask")

const imgBottomInfo = document.getElementById("info-img-footer")


buttonSed.addEventListener("click",function(event){
    console.log("Funciona")
})





imgAmerica.addEventListener("click",function(event){
    //console.log(imgAmerica.id)
    imgBottomInfo.src = "./img/AMERICA.png"
    country.innerHTML = "Cargando"
    fetch("./json/datos.json")
        .then(data => data.json())
        .then(json => {
            country.innerHTML =""
            for (const key in json.America) {
                if (Object.hasOwnProperty.call(json.America, key)) {
                    const element = json.America[key];
                    let tour = createCard(element)
                    country.appendChild(tour)
                }
            }
        })
})

imgAfrica.addEventListener("click",function(event){
    console.log(imgAfrica.id)
})

imgAsia.addEventListener("click",function(event){
    //console.log(imgAsia.id)
    imgBottomInfo.src = "./img/ASIA.png"
    country.innerHTML = "Cargando"
    fetch("./json/datos.json")
        .then(data => data.json())
        .then(json => {
            country.innerHTML =""
            for (const key in json.Asia) {
                if (Object.hasOwnProperty.call(json.Asia, key)) {
                    const element = json.Asia[key];
                    let tour = createCard(element)
                    country.appendChild(tour)
                }
            }
        })
})

imgOceania.addEventListener("click",function(event){
    console.log(imgOceania.id)
})

imgEuropa.addEventListener("click",function(event){
    //console.log(imgEuropa.id)
    imgBottomInfo.src = "./img/EUROPA.png"
    country.innerHTML = "Cargando"
    fetch("./json/datos.json")
        .then(data => data.json())
        .then(json => {
            country.innerHTML =""
            for (const key in json.Europa) {
                if (Object.hasOwnProperty.call(json.Europa, key)) {
                    const element = json.Europa[key];
                    let tour = createCard(element)
                    country.appendChild(tour)
                }
            }
        })
})


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

        imgInfo.src = obj.imagen
        CoCi.innerText = `${obj.Pais} - ${obj.Ciudad}`
        description.innerText = obj.Descripsion
    })

    a.appendChild(button)

    card.className = "country-card"

    img.src = obj.imagen
    h2.innerText = `${obj.Pais} - ${obj.Ciudad}`
    

    header.appendChild(img)
    card.appendChild(header)
    card.appendChild(h2)
    card.appendChild(a)

    return card
}
