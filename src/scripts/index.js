window.onload = function () {
    animateCSS(".imgPrincipal","fadeIn", function () {
        animateCSS(".imgPrincipal","fadeOut",function () {
            window.location.href = "home.html";
        },"delay-2s")
    })
}


function animateCSS(element, animationName, callback, tiempo="none") {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName, tiempo)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}