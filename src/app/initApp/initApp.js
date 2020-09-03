import { getData } from "app/getData"
import { checkBrowser } from "app/checkBrowser"
import { store } from "app/store"
import { App } from "app/components"

/**
 * @param options
 */
export const initApp = options => {
	/**
	 * 1. Проверка браузера
	 * 2. Получение данных из json
	 * 3. Отрисовка приложения или вывод ошибки
	 */
	if (checkBrowser()) {
		getData(options.jsonUrl).then(result => {

			// Сохраняем данные в хранилище
			store.setData(result)
			// Отрисовка элементов
			App.render()
		}, error => {
			// Сообщение об ошибке если с получением данных возникли проблемы
			console.error(error)
		})
	}
}