import { App } from "app/components"
import { createElement as e } from "app/createElement"

/**
 *
 * @param toggleColumn
 * @param columnsShowHide
 * @returns {*}
 * @constructor
 */
export const ShowHide = (toggleColumn, columnsShowHide) => {

	const getLabel = name => {
		switch (name) {
			case 'firstName': return 'Имя'
			case 'lastName': return 'Фамилия'
			case 'about': return 'Описание'
			case 'eyeColor': return 'Цвет глаз'
			default: return ''
		}
	}

	const children = columnsShowHide.map(item => {
		return (
			e('div', {
				class: 'button',
				onclick: () => {
					toggleColumn(item.name)
					App.render()
				}
			},
				e('div', {class: 'status'}, !item.show ? 'показать' : 'скрыть'),
				e('div', {class: 'label'}, getLabel(item.name))
			)
		)
	})


	return (
		e('div', {class: 'show-hide__wrapper'},
			...children
		)
	)
}