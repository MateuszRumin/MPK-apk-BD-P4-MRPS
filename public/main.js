const btnLogin = document.querySelector('.btnLogin-popup')
const wrapper = document.querySelector('.wrapper')
const iconClose = document.querySelector('.icon-close')

btnLogin.addEventListener('click', () => {
	wrapper.classList.add('active-popup')
})

iconClose.addEventListener('click', () => {
	wrapper.classList.remove('active-popup')
})
