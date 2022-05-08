const name = document.querySelector('.name')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    name.classList.toggle('active')
    
})