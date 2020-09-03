import { createElement as e } from "app/createElement"
import { pagination } from "app/pagination"
import { store } from "app/store"

import { Table } from "app/components"
import { Pagination } from "app/components"
import { removeAllChild } from "helpers/removeAllChild"
import { sortTable } from "app/sortTable"
import { cropText } from "helpers/multiLineEllipsis"
import { editRow } from "app/editRow"
import { EditRowForm } from "app/components"
import { showHideColumn } from "app/showHideColumn"
import { ShowHide } from "app/components"

export const App = {
	render() {
		/**
		 * Сортировка таблицы.
		 * Отправляем данные из нашего хранилища,
		 * получаем отсортированные данные и функции для работы с сортировкой
		 */
		const {
			currentSortType,
			currentSortProperty,
			currentSortData,
			handleClickSort,
			checkCurrentSortProperty
		} = sortTable.get(store.getData())

		/**
		 * Отправляем отсортированные данные из функции выше,
		 * Получаем только нужный для вывода кусок (по-умолчанию 10 записей на страницу)
		 * так же получаем функции для переключения страниц
		 */
		const {
			currentData,
			currentPage,
			maxPages,
			nextPage,
			prevPage,
			jumpToPage
		} = pagination.get(currentSortData)

		/*
		 * Функция для перехода на первую страницу
		 */
		const jumpToFirstPage = () => jumpToPage(1)


		/**
		 * Открытие, закрытие формы редактирования строки,
		 * id редактируемой строки
		 */
		const {
			handleClickCloseForm,
			handleClickToggleForm,
			formIsOpen,
			rowId
		} = editRow.get()


		/**
		 * Показ/Скрытие колонок
		 */
		const {
			toggleColumn,
			columnsShowHide
		} = showHideColumn.get(['firstName', 'lastName', 'about', 'eyeColor'])

		/**
		 * Перед отрисовкой приложения в нашем корневом элементе,
		 * удалим все содержимое внутри него
		 */
		removeAllChild(document.getElementById('root'))


		/**
		 * В приложении для создания элементов используется функция e (createElement)
		 *
		 * e( Тег элемента, Атрибуты элемента, Дочерние элементы )
		 *
		 * О том как она работает можно посмотреть в самом файле с функцией
		 */


		// Добавляем все элементы в корень
		root.appendChild(
			e('div', {class: 'app__wrapper'},


				/**
				 * Блок с кнопками для показа/скрытия колонок
				 */
				ShowHide(toggleColumn, columnsShowHide),
				/**
				* Блок с таблицей
				*/
				e('div', {class: 'table__wrapper'},
					Table({
						data: currentData,
						sort: {
							currentSortType,
							currentSortProperty,
							handleClickSort,
							checkCurrentSortProperty,
							jumpToFirstPage
						},
						rowForm: {
							handleClickToggleForm,
							handleClickCloseForm,
							rowId
						},
						showHide: {
							columns: columnsShowHide
						}
					}),
					formIsOpen() ? EditRowForm(rowId, handleClickCloseForm) : ''
				),

				/**
				 * Блок с пагинацией
				 */
				Pagination(currentPage, maxPages, nextPage, prevPage, jumpToPage, handleClickCloseForm)
			)
		)
		//

		/**
		 * Обрезаем текст описания до двух строк
		 */
		cropText('.text-ellipsis-two-line')
	}
}