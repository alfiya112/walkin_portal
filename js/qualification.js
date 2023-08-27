'use strict'

const conditional = document.getElementById('conditional')
const experienced = document.getElementById('experienced')
const fresher = document.getElementById('fresher')

experienced.addEventListener('click', (e) => {
    console.log("wtffff", experienced.checked)
    if (experienced.checked === true) {
        conditional.classList.remove('hidden')
    }
    else {
        conditional.classList.add('hidden')
    }
})
fresher.addEventListener('click', (e) => {
    if (np_no.checked === true) {
        conditional.classList.add('hidden')
    }
})