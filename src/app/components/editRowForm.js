import { createElement as e } from "app/createElement"
import { store } from "app/store"
import { App } from "app/components"

/**
 * Форма редактирования строки
 * @param id
 * @param handleClickCloseForm
 * @returns {*}
 * @constructor
 */
export const EditRowForm = (id, handleClickCloseForm) => {

	//Получаем строку из хранилища
	const rowData = store.getDataRowById(id)

	// Инпут для имени
	const firstNameInput = e('input', {
		name: 'firstName',
		value: rowData.name.firstName,
		placeholder: 'Имя'
	})

	const lastNameInput = e('input', {
		name: 'lastName',
		value: rowData.name.lastName,
		placeholder: 'Фамилия'
	})

	const aboutTextarea = e('textarea', {
		name: 'about',
		placeholder: 'Описание'
	}, rowData.about)

	const eyeColorInput = e('input', {
		name: 'eyeColor',
		value: rowData.eyeColor,
		placeholder: 'Цвет глаз'
	})

	// обрабатываем клик по кнопке "Изменить"
	const handleClickChange = () => {
		if (confirm(`Подтвердите изменение`)) {
			store.changeRow({
				id: rowData.id,
				name: {
					firstName: firstNameInput.value,
					lastName: lastNameInput.value
				},
				about: aboutTextarea.value,
				eyeColor: eyeColorInput.value
			})

			handleClickCloseForm()
			App.render()
		}
	}

	/**
	 * Возвращаем форму
	 */
	return (
		e('div', {class: 'edit-row-form__wrapper'},
			e('div', {class: 'form'},
				e('div', {class: 'title'},
					e('b', null, `Форма изменения строки`)
				),
				e('div', {class: 'description'}, `id: ${rowData.id}`),


				firstNameInput,
				lastNameInput,
				aboutTextarea,
				eyeColorInput,


				e('div', {class: 'buttons'},

					e('div' , {
						class: 'button secondary-button',
						onclick: () => {
							handleClickCloseForm()
							App.render()
						}
					}, 'Закрыть'),

					e('div', {
						class: 'button success-button',
						onclick: handleClickChange
					}, 'Изменить')

				)
			)
		)
	)
}