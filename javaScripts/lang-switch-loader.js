import {importJson} from "./jsonFilesHandler.js"

const langTable = {
    "FR": "../translations/fr.json",
    "EN": "../translations/en.json",
    "TA":"../translations/ta.json"
};
let isCooldown = false;



function loadLang(langData) {
    for (let key in langData) {
        let elements = document.querySelectorAll(`.${key}`);
        elements.forEach(element => {
            if (element) {
                element.innerHTML = langData[key];
    
            }
        });
    }
    isCooldown = false;
}

async function changeLang(langCode) {
    if (!(langCode in langTable) || isCooldown) {
        return;
    }
    
    const langData = await importJson(langTable[langCode]);
    isCooldown = true;
    loadLang(langData);
}

const langButtons = document.querySelectorAll('.lang-switch button');
langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const langCode = button.getAttribute('data-lang');
        changeLang(langCode);

    
        let oldbutton = document.querySelectorAll(".active");
        oldbutton[0].classList.remove("active")
        button.classList.add("active");
    });
});
