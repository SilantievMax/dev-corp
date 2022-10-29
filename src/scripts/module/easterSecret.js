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
    author.innerHTML = `Разработчики:  <a style="color: inherit;" target="_blank"  href="https://github.com/SilantievMax" >SilantievMax</a>, <a style="color: inherit;" target="_blank" href="https://www.behance.net/elenavi2" >ElenaVi</a>`;
    author.style.color = "#0A0046";
    author.style.fontSize = "20px";
    author.style.fontWeight = "bold";
    appendElement(easterSecret, author);
};

const StylesForDescription = () => {
    description.innerText =
        "Ты красавчик, что нашел эту пасхалку, переходи на наши профили☝️. Проект написан на чистом HTML, CSS, JS и собран при помощи Gulp сборки. Ссылка на этот проект:👉 https://github.com/SilantievMax/dev-corp Не переживай, окно пропадет через 10 с⏳";
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
                setTimeout(remove, 10000)
            } else {
                document.onkeyup = null;
            }
        };
    }
};
