document.onreadystatechange = function() {
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
    imAlone = {
        name: "Im Alone - PC Game",
        img: "./assets/images/imAlone.png",
        url: "https://gianlucafava.itch.io/im-alone-en",
    },
    theBag = {
        name: "The Bag - PC Game",
        img: "./assets/images/thebag.png",
        url: "https://gianlucafava.itch.io/the-bag-short-horror-game",
        backgroundImage: "../assets/images/thebag.png"
    },
    wingmanApex = {
        name: "Model 3D - Wingman Apex",
        img: "./assets/images/Wingman_Logo.png",
        url: "https://www.artstation.com/artwork/5v8ZdJ",
    },
    greekHelmet = {
        name: "Model 3D - Greek Helmet",
        img: "./assets/images/tbrender_003.png",
        url: "https://www.artstation.com/artwork/8bemem",
    },
    orcPBR = {
        name: "PBR Orc Textured",
        img: "./assets/images/Orco_lat2.jpg",
        url: "https://www.artstation.com/artwork/9ENPzQ",
    },
    zBrushModel = {
        name: "Undead head - Digital sculpture",
        img:"./assets/images/undeadHead.jpg",
        url:"https://www.artstation.com/artwork/Evz2lv"
    },
    houseDemo = {
        name: "House Demo - Ambient & Lighting",
        img: "./assets/images/houseDemo.png",
        url: "https://gianlucafava.itch.io/demo-environment-ambientation-lightning",
    },
    hospitalDemo = {
        name: "Hospital Demo Cinematic - Ambient & Lighting",
        img:"./assets/images/hospitalDemo.png",
        url:"https://gianlucafava.itch.io/demo-short-cinematic-of-a-abandoned-hospital"
    }
];

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
                    <a target="_blank" href="${work.url}"><button type="button" class="nes-btn is-success">Visit</button></a>
                </div>
                <div class="iconsWorks">
                    <i class="nes-icon is-small star"></i>
                    <i class="nes-icon is-small star"></i>
                    <i class="nes-icon is-small star"></i>
                </div>
            </div>
        </div>
    `;
    worksContainer.appendChild(div)

    div.addEventListener("mouseover", () => hover(div))
    div.addEventListener("mouseout", () => hoverOut(div,work))
});

function hover(div){
    div.style.backgroundImage = "linear-gradient(90deg,rgba(112,157,255,.8),rgba(87,82,229,.8))"
}
function hoverOut(div,work){
    div.style.backgroundImage = `url(${work.img})`
}
