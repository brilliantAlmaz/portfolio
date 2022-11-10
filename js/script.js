
const headerBurger =document.querySelector('.header__burger')
const headerMenu =document.querySelector('.header__menu')
const body =document.querySelector('body')
const html =document.querySelector('html')
const content =document.querySelector('.content')

headerBurger.addEventListener('click', function(){
	headerBurger.classList.toggle('active')
	headerMenu.classList.toggle('active')
	//body.classList.toggle('lock');
	html.classList.toggle('lock');
	content.classList.toggle('blur')
	content.addEventListener('click', function(){
		headerBurger.classList.remove('active')
		headerMenu.classList.remove('active')
		//body.classList.remove('lock');
		html.classList.remove('lock');
		content.classList.remove('blur')
	})
})