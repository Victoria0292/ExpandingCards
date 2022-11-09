//Thanks to study sqad academy on YouTube for the very informative video.

//querySelectorAll will select all my cards not just one
const cards = document.querySelectorAll('.card')

//Loops through each card
cards.forEach(card => {
    //Listening for a click, when click happens function will run
    card.addEventListener('click', () => {
        removeActiveClasses()
        card.classList.add('active')
    })
})

//Removes the classes that are not active
function removeActiveClasses() {
    //Loops through each card
    cards.forEach(card => {
        card.classList.remove('active')
    })
}