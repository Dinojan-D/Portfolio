import {importJson} from "./jsonFilesHandler.js"





async function loadSkills() {
    const skillsInfos = await importJson('../Assets/skills.json');

    for (const category in skillsInfos) {
        if (skillsInfos.hasOwnProperty(category)) {
            const categoryData = skillsInfos[category];

   
            for (const itemType in categoryData) {
                if (categoryData.hasOwnProperty(itemType)) {
                    const items = categoryData[itemType];

           
                    items.forEach(item => {
                        const parentClass = `${itemType}`; 
                        createItemButton(item, parentClass);
                    });
                }
            }
        }
    }
}

function createItemButton(buttonInfo,parentClass) {
    const button = document.createElement("button");
    button.classList.add("item");
    button.style.background = "none";
    button.style.border = "none";


    const img = document.createElement("img");
    img.src = buttonInfo.img;
    img.alt = buttonInfo.name;
    img.style.width = "90%";
    img.style.height = "90%";
    img.style.objectFit = "contain";

    button.appendChild(img);

    
    const parentElement = document.querySelector(`.${parentClass}`);
    if (parentElement) {
        parentElement.appendChild(button);
    } else {
        console.error(`Classe du parent "${parentClass}" non trouvée.`);
        return;
    }

 
    button.addEventListener("click", () => {
        window.open(buttonInfo.link, "_blank");
    });
}

loadSkills()
