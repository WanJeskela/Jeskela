class Store {
	constructor() {
		this._setDataCall = false
	}

	setData(data) {
		if (!this._setDataCall) {
			this._data = data
			this._setDataCall = true
		}
	}

	getData() {
		return this._data
	}

	getDataRowById(id) {
		return this._data.find(item => item.id === id)
	}

	getIndexDataById(id) {
		return this._data.findIndex(item => item.id === id)
	}

	addRow(row) {
		this._data = [...this._data, row]
	}

	changeRow(row) {
		this._data.splice(this.getIndexDataById(row.id), 1, row)
	}
}

const store = new Store()
export { store }