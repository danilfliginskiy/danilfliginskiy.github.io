const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')

button1.addEventListener('click', () => {
	playSound('./sounds/check.mp3') // Заменить на имя вашего аудиофайла
})

button2.addEventListener('click', () => {
	playSound('./sounds/error.mp3') // Заменить на имя вашего аудиофайла
})

button3.addEventListener('click', () => {
	// Добавлен новый обработчик события
	playSound('./sounds/new.mp3') // Добавьте имя вашего аудиофайла
})

function playSound(soundURL) {
	const audio = new Audio(soundURL)
	audio.play()
}
