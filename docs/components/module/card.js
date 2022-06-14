import { inputCoCi, inputContinent } from '../script/index.js'

function createCard(obj){
    let card = document.createElement("div")
    let header = document.createElement("header")
    let img = document.createElement("img")
    let h2 = document.createElement("h2")
    let a = document.createElement("a")
    let button = document.createElement("button")

    a.href = "#info"
    button.innerText = "Ver mas"

    let { image, country, city, description:des, continent} = obj

    button.addEventListener("click", () =>{
        const imgInfo = document.getElementById("img-city")
        //city country
        const CoCi = document.getElementById("country-city")
        const description = document.getElementById("description")

        imgInfo.src = image
        CoCi.innerText = `${country} - ${city}`
        description.innerText = des

        inputCoCi.value = `${country} - ${city}`
        inputContinent.value = continent
    })

    a.appendChild(button)
    
    card.className = "country-card"

    img.src = image
    h2.innerText = `${country} - ${city}`

    header.appendChild(img)
    card.appendChild(header)
    card.appendChild(h2)
    card.appendChild(a)
    
    return card
}

export {createCard}