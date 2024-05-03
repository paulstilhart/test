function toggleNavBar() {
    const navOpenBtn = document.querySelector('.js_nav_open');
    const navCloseBtn = document.querySelector('.js_nav_close');
    const nav = document.querySelector('.js_nav');

    navOpenBtn.addEventListener('click', function() {
        toggleNavigation(true);
        document.body.classList.add('overflow-y-hidden');
    });

    navCloseBtn.addEventListener('click', function() {
        toggleNavigation(false);
        document.body.classList.remove('overflow-y-hidden');
    });

    // Fonction pour basculer l'état de la navigation
    function toggleNavigation(open) {
        nav.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
}

toggleNavBar();
