import { createElement as e } from "app/createElement"
import { App } from "app/components/_app"

/**
 * Проверка статуса колонки (показать или скрыть)
 * @param columns
 * @param name
 * @returns boolean
 */
const getStatusColumn = (columns, name) => {
	return columns.find(item => item.name === name).show
}

// свойства для сортировки таблицы
const firstNameProperty = ['name', 'firstName']
const lastNameProperty = ['name', 'lastName']
const aboutProperty = ['about']
const eyeColorProperty = ['eyeColor']

/**
 * Шапка таблицы с кнопками сортировки
 * @param sort
 * @param handleClickCloseForm
 * @param showHide
 * @returns {*}
 * @constructor
 */
const THead = (sort, handleClickCloseForm, showHide) => {


	const TH = (name, attrs, children) => getStatusColumn(showHide.columns, name) ? (
		e('th', attrs, children)
	) : ''

	return (
		e('thead', null,
			e('tr', null,

				/**
				 * Колонка с именем
				 * TH проверяет статус колонки, при положительном ответе выводит колонку
				 */
				TH('firstName', {
						/**
						 * Событие при клике на элемент
						 */
						onclick: () => {
							// Событие клика сортировки, передаем свойства для сортировки
							sort.handleClickSort(firstNameProperty)
							// Прыгаем на первую страницу пагинации
							sort.jumpToFirstPage()
							// Скрываем форму редактирования строки
							handleClickCloseForm()
							// Перерисовка элементов
							App.render()
						}
					},
					// Вложенный элемент с названием столбца и для отслеживания текущей сортировки
					e('div', {
						class: `arrow-sort ${sort.checkCurrentSortProperty(firstNameProperty) ? sort.currentSortType : ''}`
					}, 'Имя')
				),
				/**
				 * Остальные колонки по аналогии
				 */
				TH('lastName', {
						onclick: () => {
							sort.handleClickSort(['name', 'lastName'])
							sort.jumpToFirstPage()
							handleClickCloseForm()
							App.render()
						}
					},
					e('div', {
						class: `arrow-sort ${sort.checkCurrentSortProperty(lastNameProperty) ? sort.currentSortType : ''}`
					}, 'Фамилия')
				),
				TH('about', {
						onclick: () => {
							sort.handleClickSort(['about'])
							sort.jumpToFirstPage()
							handleClickCloseForm()
							App.render()
						}
					},
					e('div', {
						class: `arrow-sort ${sort.checkCurrentSortProperty(aboutProperty) ? sort.currentSortType : ''}`
					}, 'Описание')
				),
				TH('eyeColor', {
						onclick: () => {
							sort.handleClickSort(['eyeColor'])
							sort.jumpToFirstPage()
							handleClickCloseForm()
							App.render()
						}
					},
					e('div', {
						class: `arrow-sort ${sort.checkCurrentSortProperty(eyeColorProperty) ? sort.currentSortType : ''}`
					}, 'Цвет глаз')
				)
			)
		)
	)
}

/**
 * Тело таблицы
 * @param data
 * @param rowForm
 * @param showHide
 * @returns {*}
 * @constructor
 */
const TBody = (data, rowForm, showHide) => {

	const TD = (name, attrs, children) => getStatusColumn(showHide.columns, name) ? (
		e('td', attrs, children)
	) : ''


	const children = data.map(item => (
			e('tr', {
					class: rowForm.rowId === item.id ? 'active' : false,
					onclick: () => {
						rowForm.handleClickToggleForm(item.id)
						App.render()
					}
				},

				/**
				 * Колонка с именем
				 * TD проверяет статус колонки, при положительном ответе выводит колонку
				 */
				TD('firstName', null, item.name.firstName),
				TD('lastName', null, item.name.lastName),
				TD('about', { class: 'width-300' },
					e('div', { class: 'about text-ellipsis-two-line'},
						e('p', null, item.about)
					)
				),
				TD('eyeColor', null,
					e('div', {
						class: 'eye-color',
						style: `background-color: ${item.eyeColor}`
					})
				)
			)
		)
	)
	return e('tbody', null, ...children)
}

/**
 * Таблица
 * @param data
 * @param sort
 * @param rowForm
 * @param showHide
 * @returns {*}
 * @constructor
 */
export const Table = ({ data, sort, rowForm, showHide }) => (
	e('table', null,
		THead(sort, rowForm.handleClickCloseForm, showHide),
		TBody(data, rowForm, showHide)
	)
)