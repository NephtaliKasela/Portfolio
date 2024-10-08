/*====== toggle icon navbar =======*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x-circle');
    navbar.classList.toggle('active');
};

/* ========= scroll sections active link ========= */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Array.from(sections).forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            Array.from(navLinks).forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });
    /*========= sticky navbar ===========*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*====== remove toggle icon and navbar when click navbar link (scroll) =======*/
    menuIcon.classList.remove('bx-x-circle');
    navbar.classList.remove('active');
};

/*=========== scroll reveal ============*/
ScrollReveal({ 
    /*reset: true,*/
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'bottom' });

/*========== typed js ===========*/
const typed = new Typed('.multiple-text', {
    strings: ['.Net Developer', 'Student'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});





// Récupérer le formulaire
var form = document.querySelector('form');

// Écouter l'événement de soumission du formulaire
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêcher le rechargement de la page

  // Récupérer les valeurs des champs du formulaire
  var fullName = form.querySelector('input[type="text"][placeholder="Full name"]').value;
  var email = form.querySelector('input[type="email"]').value;
  var mobileNumber = form.querySelector('input[type="number"]').value;
  var subject = form.querySelector('input[type="text"][placeholder="Email Subject"]').value;
  var message = form.querySelector('textarea').value;

  // Créer un objet JSON avec les valeurs du formulaire
  var formData = {
    fullName: fullName,
    email: email,
    mobileNumber: mobileNumber,
    subject: subject,
    message: message
  };

  // Télécharger le fichier JSON existant
  var jsonFile = 'data.json';

  fetch(jsonFile)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Ajouter les nouvelles données au fichier JSON existant
      data.push(formData);

      // Convertir le tableau de données en JSON
      var updatedJsonData = JSON.stringify(data);

      // Télécharger le fichier JSON mis à jour
      var downloadLink = document.createElement('a');
      downloadLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(updatedJsonData);
      downloadLink.download = 'data.json';
      downloadLink.click();
    })
    .catch(function(error) {
      console.error('Une erreur s\'est produite:', error);
    });

  // Réinitialiser le formulaire
  form.reset();

  // Afficher un message de confirmation ou rediriger l'utilisateur si nécessaire
});