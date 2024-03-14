const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#spinner").style.visibility = "visible";
    } else {
        setTimeout(() => {
            document.querySelector("body").style.visibility = "visible";
            document.querySelector("#spinner").style.visibility = "hidden";
            document.querySelector("#spinner").style.opacity = "0";
            document.querySelector("#spinner").style.transform = "translateY(100%)";
        }, 2000);
        setTimeout(() => {
            document.querySelector("#spinner").style.display = "none";
        }, 3000);
    }
};

const worksContainer = document.querySelector(".worksContainer")

const works = [
    // wingmanApex = {
    //     name: "Model 3D - Wingman Apex",
    //     img: "./assets/images/Wingman_Logo.png",
    //     url: "https://www.artstation.com/artwork/5v8ZdJ",
    //     category: "Model"
    // },
    greekHelmet = {
        name: "Model 3D - Greek Helmet",
        img: "./assets/images/tbrender_003.png",
        url: "https://www.artstation.com/artwork/8bemem",
        category: "Model"
    },
    lockers = {
        name: "Model 3D - Lockers",
        img: "./assets/images/LockerRender.jpg",
        url: "https://www.artstation.com/artwork/blnX5k",
        category: "Model"
    },
    vault = {
        name: "Model 3D - Vault",
        img: "./assets/images/Vault.jpg",
        url: "https://www.artstation.com/artwork/04mY4e",
        category: "Model"
    },
    mailBox = {
        name: "Model 3D - U.S. Mail Box",
        img: "./assets/images/MailBox.png",
        url: "https://www.artstation.com/artwork/YB09L3",
        category: "Model"
    },
    orcPBR = {
        name: "PBR Orc Textured",
        img: "./assets/images/Orco_lat2.jpg",
        url: "https://www.artstation.com/artwork/9ENPzQ",
        category: "Model"
    },
    zBrushModel = {
        name: "Undead head - Digital sculpture",
        img: "./assets/images/undeadHead.jpg",
        url: "https://www.artstation.com/artwork/Evz2lv",
        category: "Model"
    },
    houseDemo = {
        name: "House Demo - Ambient & Lighting",
        img: "./assets/images/houseDemo.png",
        url: "https://gianlucafava.itch.io/demo-environment-ambientation-lightning",
        category: "UnityDemo"
    },
    hospitalDemo = {
        name: "Hospital Demo Cinematic - Ambient & Lighting",
        img: "./assets/images/hospitalDemo.png",
        url: "https://gianlucafava.itch.io/demo-short-cinematic-of-a-abandoned-hospital",
        category: "UnityDemo"
    },
    ruralEnvironment = {
        name: "Abandoned Road Cinematic - Ambient & Lighting",
        img: "./assets/images/RuralSequence.png",
        url: "https://www.youtube.com/watch?v=ra-Ka23Njkg",
        category: "Environments"
    },
    desetEnvironment = {
        name: "Ancient Temple Cinematic - Ambient & Lighting",
        img: "./assets/images/DesertOutdoor_Sequence.png",
        url: "https://www.youtube.com/watch?v=1RoMmqVdmGQ",
        category: "Environments"
    },
    castleEnvironment = {
        name: "Castle Cinematic - Ambient & Lighting",
        img: "./assets/images/Lamp.png",
        url: "https://www.youtube.com/watch?v=6nT-4WDjgsU",
        category: "Environments"
    },
    castleEnvironment = {
        name: "Mansion - Ambient & Lighting",
        img: "./assets/images/Mansion.png",
        url: "https://www.artstation.com/artwork/9EXlGN",
        category: "Environments"
    },
    bunkerEnvironment = {
        name: "Bunker - Environment Art & Lighting",
        img: "./assets/images/Bunker.png",
        url: "https://www.youtube.com/watch?v=Q7B6KuOvssQ",
        category: "Environments"
    },
    hospitalEnvironment = {
        name: "Hospital - Environment Art & Lighting",
        img: "./assets/images/Hospital.png",
        url: "https://www.youtube.com/watch?v=BLtffC68L-g",
        category: "Environments"
    },
    clasroomEnvironment = {
        name: "Classroom - Environment Art & Lighting",
        img: "./assets/images/Classroom.png",
        url: "https://www.artstation.com/artwork/04VW4w",
        category: "Environments"
    },
    researchRoom = {
        name: "Research Room - Environment Art & Lighting",
        img: "./assets/images/MindPlace.png",
        url: "https://www.artstation.com/artwork/39neJB",
        category: "Environments"
    },
    lostCastle = {
        name: "Lost Monastery - Environment Art & Lighting",
        img: "./assets/images/monastery.png",
        url: "https://www.artstation.com/artwork/aomLqk",
        category: "Environments"
    },
    imAlone = {
        name: "Im Alone? - Pc short game",
        img: "./assets/images/imAlone.png",
        url: "https://gianlucafava.itch.io/im-alone-en",
        category: "Games"
    },
    theBag = {
        name: "The Bag - Short game inspired by a short horror film",
        img: "./assets/images/thebag.png",
        url: "https://gianlucafava.itch.io/the-bag-short-horror-game",
        category: "Games"
    },

];
function showWorks (works){
    const seeMore = document.querySelector(".seeMore")
    worksContainer.innerHTML = ""
    works.forEach((work) => {
        const div = document.createElement("div");  
        div.classList.add("work");
        div.style.backgroundImage = `url(${work.img})`
        div.innerHTML = `
            <div class="worksContent">
                <span class="text">
                ${work.name}
                </span>
                <div class="buttonsAndIconsWorks">
                    <div class="buttonsWorks">
                        <a target="_blank" href="${work.url}"><button type="button" class="btnVisit">Visit</button></a>
                    </div>
                </div>
            </div>
        `;
        worksContainer.appendChild(div)
        seeMore.style.display = "block"
        div.addEventListener("mouseover", () => hover(div))
        div.addEventListener("mouseout", () => hoverOut(div, work))
    });
}


function hover(div) {
    div.style.backgroundImage = "linear-gradient(90deg,rgba(255, 191, 0,.8),rgba(244, 44, 4,.8))"
}

function hoverOut(div, work) {
    div.style.backgroundImage = `url(${work.img})`
}

// Captura los botones por su clase
let botones = document.getElementsByClassName("btnFilter");

// Agrega un evento de clic a cada botón
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", filtrarDatos);
}

// Función de filtrado y muestra de resultados
function filtrarDatos() {
    let categoria = this.id; // Obtiene el ID del botón clicado
    let resultados = works.filter(function (objeto) {
        return objeto.category === categoria;
    });

    showWorks(resultados)
}

