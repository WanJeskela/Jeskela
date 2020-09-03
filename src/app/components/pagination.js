import { createElement as e } from "app/createElement"
import { pagination } from "app/pagination"
import { App } from "app/components"


/**
 * Компонент пагинации
 * @param currentPage
 * @param maxPages
 * @param nextPage
 * @param prevPage
 * @param jumpToPage
 * @param handleClickCloseForm
 * @returns {*}
 * @constructor
 */
export const Pagination = (
	currentPage,
	maxPages,
	nextPage,
	prevPage,
	jumpToPage,
	handleClickCloseForm
) => {

	const pageNumbers = []

	/**
	 * Шаблон кнопки пагинации
	 * @param i
	 * @returns {*}
	 */
	const paginationItemId = i => (
		e('div', {
			class: `page-num ${currentPage === i ? 'active' : ''}`,
			onclick: () => {
				jumpToPage(i)
				if (currentPage !== i) {
					handleClickCloseForm()
				}
				App.render()
			}
		}, `${i}`)
	)

	if (maxPages <= 10) {
		for (let i = 1; i <= maxPages; i++) {
			pageNumbers.push(paginationItemId(i))
		}
	}
	else {

		/**
		 * Если страниц больше 10, то рисуем пагинацию с разделителями, чтобы не выводить все кнопки страниц
		 */
		let breakView
		let leftSide = 2
		let rightSlide = 2

		if (currentPage > maxPages - 2) {
			rightSlide = maxPages - currentPage
			leftSide = 2 - rightSlide
		} else if (currentPage < 2) {
			leftSide = currentPage
			rightSlide = 2 - leftSide
		}

		for (let i = 1; i <= maxPages; i++) {

			if (i <= 3) {
				pageNumbers.push(paginationItemId(i))
				continue
			}

			if (i > maxPages - 3) {
				pageNumbers.push(paginationItemId(i))
				continue
			}

			if (i >= currentPage - leftSide && i <= currentPage + rightSlide) {
				pageNumbers.push(paginationItemId(i))
				continue
			}

			if (pageNumbers[pageNumbers.length - 1] !== breakView) {
				/**
				 * Разделитель ...
				 */
				breakView = e('div', {class: 'page-ellipsis'}, '...')
				pageNumbers.push(breakView)
			}
		}
	}

	/**
	 * Возвращаем готовый блок пагинации
	 */
	return (
		e('div', { id: 'pagination'},
			/**
			 * Кнопка предыдущей страницы
			 */
			e('div', {
				class: `page-prev ${currentPage !== 1 ? 'active' : ''}`,
				onclick: () => {
					prevPage()
					if (currentPage !== 1) {
						handleClickCloseForm()
					}
					App.render()
				}
			}, '<'),

			/**
			 * Основные кнопки пагинации
			 */
			...pageNumbers,


			/**
			 * Кнопка следующей страницы
			 */
			e('div', {
				class: `page-next ${currentPage !== maxPages ? 'active' : ''}`,
				onclick: () => {
					nextPage()
					if (currentPage !== maxPages) {
						handleClickCloseForm()
					}
					App.render()
				}
			}, '>')
		)
	)
}