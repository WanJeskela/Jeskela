/**
 * Проверка браузера на наличие fetch
 * @returns {boolean}
 */
export const checkBrowser = () => {
	if (!window.fetch) {
		alert('Ваш браузер устарел!')
		return false
	}
	return true
}