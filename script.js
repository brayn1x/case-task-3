// Массив изображений
const images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg']

let index = 0

const slide = document.getElementById('slide')
const counter = document.getElementById('counter')

document.getElementById('next').addEventListener('click', () => {
	index++
	if (index >= images.length) index = 0
	updateSlider()
})

document.getElementById('prev').addEventListener('click', () => {
	index--
	if (index < 0) index = images.length - 1
	updateSlider()
})

function updateSlider() {
	slide.src = images[index]
	counter.textContent = `Изображение ${index + 1} из ${images.length}`
}
