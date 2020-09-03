class EditRow {
	constructor() {
		this._id = null
	}

	_handleClickOpenForm(id) {
		this._id = id
	}

	_handleClickCloseForm() {
		this._id = null
	}

	_handleClickToggleForm(id) {

		this._id = this._id === id ? null : id
	}

	_formIsOpen() {
		return this._id !== null
	}

	get() {
		return {
			handleClickToggleForm: id => this._handleClickToggleForm(id),
			handleClickCloseForm: () => this._handleClickCloseForm(),
			formIsOpen: () => this._formIsOpen(),
			rowId: this._id
		}
	}
}

const editRow = new EditRow()
export { editRow }