const main = document.querySelector("main");
const easterSecret = document.createElement("div");
const author = document.createElement("div");
const description = document.createElement("div");

const appendElement = (parent, children) => {
    parent.append(children);
};

const StylesForEasterSecret = () => {
    easterSecret.style.zIndex = "1000";
    easterSecret.style.position = "fixed";
    easterSecret.style.bottom = "20px";
    easterSecret.style.left = "20px";
    easterSecret.style.width = "500px";
    easterSecret.style.height = "200px";
    easterSecret.style.padding = "20px";
    easterSecret.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    easterSecret.style.borderRadius = "20px";
    appendElement(main, easterSecret);
};

const StylesForAuthor = () => {
    author.innerText = "Разработчики: SilantievMax, ElenaVi";
    author.style.color = "#0A0046";
    author.style.fontSize = "20px";
    author.style.fontWeight = "bold";
    appendElement(easterSecret, author);
};

const StylesForDescription = () => {
    description.innerText =
        "Проект написан на HTML, CSS, JS и собран при помощи Gulp... Ссылка на проект: https://github.com/SilantievMax/dev-corp";
    description.style.color = "#0A0046";
    description.style.marginTop = "10px";
    appendElement(easterSecret, description);
};

const open = () => {
    StylesForEasterSecret();
    StylesForAuthor();
    StylesForDescription();
};

const remove = () => {
    easterSecret.remove();
};

document.onkeydown = (e) => {
    if (e.code === "KeyS") {
        document.onkeyup = (e) => {
            if (e.code === "KeyL") {
                open();
                setTimeout(remove, 5000)
            } else {
                document.onkeyup = null;
            }
        };
    }
};
