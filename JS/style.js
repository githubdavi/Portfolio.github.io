const card = document.querySelectorAll(".card");
card.forEach(el => {
    el.addEventListener("mousemove", e => {
        let elRect = el.getBoundingClientRect();

        let x = e.clientX - elRect.x;
        let y = e.clientY - elRect.y;

        let midCardWidth = elRect.width / 2;
        let midCardHeight = elRect.height / 2;

        let angleY = -(x - midCardWidth) / 8;
        let angleX = (y - midCardHeight) / 8;

        el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    });
    el.addEventListener("mouseleave", () => {
        el.children[0].style.transform = "rotateX(0) rotateY(0)";
    });
});

// import Swal from 'sweetalert2'
// const Swal = require('sweetalert2')
let amaswal=document.getElementById('ama');
let coiffeurswal=document.getElementById('coiffeur');
let cookiewal=document.getElementById('cookie');
let lingeswal=document.getElementById('linge');
amaswal.addEventListener("click",function(){
    Swal.fire({
      title: 'Projet Ama',
      text: "Ce projet avait pour but de créer un site internet pour une garderie montargoise. J'avais pour principale tâche de m'occuper de la partie PDF et envoie de mail ce qui m'a permis de me familiariser avec différentes bibliothèques et bases de données",
      icon: 'info',
      confirmButtonText: 'Retour'
    })
})
coiffeurswal.addEventListener("click",function(){
    Swal.fire({
      title: 'Projet SoSoBarber',
      text: "Ce projet est actuellement en cours et sera publié très prochainement.Il a pour but la création d' un site internet pour un coiffeur montargeois, sur ce site est possible de prendre rendez-vous et ainsi avoir un agenda pour le coiffeur et le client",
      icon: 'info',
      confirmButtonText: 'Retour'
    })
})
cookiewal.addEventListener("click",function(){
    Swal.fire({
      title: 'Projet Popotte Cookie',
      text: "Ce projet est actuellement en cours et sera publié très prochainement.Il a pour but la création d' un site internet où il sera possible de passer commande et de créer un compte client",
      icon: 'info',
      confirmButtonText: 'Retour'
    })
})
