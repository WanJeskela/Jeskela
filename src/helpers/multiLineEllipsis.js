/**
 * Функция для обрезки текста в две строки
 */
export const cropText = selector => {
	const containers = document.querySelectorAll(selector)
	containers.forEach(item => {
		const p = item.querySelector('p')
		const divh = item.clientHeight
		while (p.offsetHeight > divh) {
			p.textContent = p.textContent.replace(/\W*\s(\S)*$/, '...')
		}
	})
}