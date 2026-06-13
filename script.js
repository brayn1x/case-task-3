// ===============================
// МАССИВ ИЗОБРАЖЕНИЙ
// Здесь хранятся пути к картинкам,
// которые будут показываться в слайдере.
// ===============================
const images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg']

// Текущий индекс изображения
let index = 0

// Получение элементов DOM
const slide = document.getElementById('slide')
const counter = document.getElementById('counter')

// ===============================
// ОБРАБОТЧИК КНОПКИ "ВПЕРЕД"
// Увеличиваем индекс, проверяем выход за пределы,
// если вышли — возвращаемся к первому изображению.
// ===============================
document.getElementById('next').addEventListener('click', () => {
	index++
	if (index >= images.length) index = 0
	updateSlider()
})

// ===============================
// ОБРАБОТЧИК КНОПКИ "НАЗАД"
// Уменьшаем индекс, проверяем выход за пределы,
// если вышли — переходим к последнему изображению.
// ===============================
document.getElementById('prev').addEventListener('click', () => {
	index--
	if (index < 0) index = images.length - 1
	updateSlider()
})

// ===============================
// ФУНКЦИЯ ОБНОВЛЕНИЯ СЛАЙДЕРА
// Меняет изображение и обновляет текст счётчика.
// ===============================
function updateSlider() {
	slide.src = images[index]
	counter.textContent = `Изображение ${index + 1} из ${images.length}`
}
