const banner = document.getElementById("banner");

const botao = document.getElementById("btn")


document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() =>{
        banner.style.bottom = "20px";
    },100)
});

botao.addEventListener("click", () =>  {
    banner.style.bottom = "-150px";
});