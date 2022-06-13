import { inputCoCi, inputContinent } from './index.js'

let id

let idNumber = () => {
    if(sessionStorage["id"] == "NaN"){
        sessionStorage.setItem("id",0)
    }
    id = Number(sessionStorage["id"])
}

let initTravel = () =>{
    idNumber()
    
    const form = document.getElementById("form")
    const inputCalendar1 = document.getElementById("input-calendar-1")
    const inputCalendar2 = document.getElementById("input-calendar-2")
    const inputTextArea = document.getElementById("input-big-text")
    const inputs = document.getElementsByClassName("in")

    for (let i = 0; i < inputs.length; i++) {
        const element = inputs[i];
        element.addEventListener("click",function(e) {
            element.style = ""
        })
    }

    form.addEventListener("submit",function(e){
        e.preventDefault();
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
            const turnRed = "border: 1px solid red"
            const turnGreen = "border: 1px solid #22ac24"

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

}

export { initTravel }