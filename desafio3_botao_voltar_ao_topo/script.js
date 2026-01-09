const botao = document.getElementById("btn")


function capitarScroll(){
    if (window.scrollY>=300){
        botao.style.visibility = 'visible'
    }else{
        botao.style.visibility = 'hidden'
    };

};

window.addEventListener('scroll',capitarScroll);

botao.addEventListener("click", function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

