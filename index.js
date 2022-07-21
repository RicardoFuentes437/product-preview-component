var button = document.querySelector('.btn')

button.addEventListener('mousemove', (event) => {
    event.target.style.backgroundColor = "hsl(212, 21%, 14%)"
})

button.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = "hsl(158, 36%, 37%)"
})