// PAGE TRANSITION
let transition = document.querySelector(".transition")
let links = document.querySelectorAll('a')
if (links) {
    links.forEach((link) => {
        link.onclick = (e) => {
            console.log(e)
            e.preventDefault()
            setTimeout(function () {
                if (transition.classList.contains('leave')) {
                    // récupère le lien du parent s'il existe
                    if (!e.target.parentElement.href) {
                        if (!e.target.href) {
                            // lien du parent du parent pour certains cas
                            window.location = e.target.parentElement.parentElement.href
                        } else {
                            window.location = e.target.href;
                        }
                    } else {
                        window.location = e.target.parentElement.href
                    }
                } else {
                    console.log('whoops', e.target)
                }
            }, 1500)
            // en attendant les 1,5 secondes 
            // je lance les animations avec les classes CSS
            transition.classList.toggle("leave")
            transition.classList.toggle("enter")
        }
    })
}