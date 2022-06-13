//sound
const zombie = new Audio("./mp3/old-sound-of-zombie-in-minecraft.mp3")
const onichan = new Audio("./mp3/recording_15.mp3")
const dick = new Audio("./mp3/dickhead.mp3")
const shoting = new Audio("./mp3/dear-sister.mp3")

const america = new Audio("./mp3/childish_gambino_this_is_america_official_video__cutted.mp3")
const asia = new Audio("./mp3/asian-sound-effect.mp3")
const europa1 = new Audio("./mp3/españa.mp3")
const europa2 = new Audio("./mp3/torero.mp3")
const oceania = new Audio("./mp3/ocean-man.mp3")
const africa = new Audio("./mp3/african-death-dance.mp3")

let audio = [
    america,asia,europa1,
    europa2,oceania,africa,
    zombie,onichan,dick,
    shoting
]

function stopAllAudios(){
    audio.forEach(element => {
        element.pause()
    });
}


let initAudio = () =>{
    //buton social media
    const facebook = document.getElementById("a1")
    const twitter = document.getElementById("a2")
    const instagram = document.getElementById("a3")
    const pinterest = document.getElementById("a4")

    facebook.addEventListener("click",function(e){stopAllAudios();zombie.play()})
    twitter.addEventListener("click",function(e){stopAllAudios();shoting.play()})
    instagram.addEventListener("click",function(e){stopAllAudios();dick.play()})
    pinterest.addEventListener("click",function(e){stopAllAudios();onichan.play()})
}

export {america,africa,asia,europa1,europa2,oceania}

export {stopAllAudios, initAudio}