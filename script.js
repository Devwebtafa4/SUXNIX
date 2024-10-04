const navbarScroll = document.getElementById('navbarScroll');
const socialIcons = document.querySelector('.col2_icones');

// Fonction pour gérer l'affichage des icônes
function toggleSocialIcons() {
    if (navbarScroll.classList.contains('show')) {
        socialIcons.classList.add('hidden'); // Cacher les icônes
    } else {
        socialIcons.classList.remove('hidden'); // Afficher les icônes
    }
}

// Écouter les événements de changement d'état du menu
navbarScroll.addEventListener('shown.bs.collapse', toggleSocialIcons);
navbarScroll.addEventListener('hidden.bs.collapse', toggleSocialIcons);