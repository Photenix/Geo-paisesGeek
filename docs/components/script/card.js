import { inputCoCi, inputContinent } from './index.js'

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

export {createCard}