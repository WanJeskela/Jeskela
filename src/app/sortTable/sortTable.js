class SortTable {
	constructor() {
		this._currentSortType = 'ASC'
		this._currentSortProperty = null
	}

	_sortOrder() {
		return this._currentSortType === 'ASC' ? 1 : -1
	}


	_compareFunction() {
		const currentSortProperty = this._currentSortProperty
		const sortOrder = this._sortOrder()

		const getValueObject = (object, keys) => {
			if (typeof object[keys[0]] === 'object') {
				return getValueObject(object[keys[0]], keys.slice(1, keys.length))
			}
			return object[keys[0]]
		}

		return (a, b) => {
			if (getValueObject(a, currentSortProperty) < getValueObject(b, currentSortProperty)) {
				return -1 * sortOrder
			} else if (getValueObject(a, currentSortProperty) > getValueObject(b, currentSortProperty)) {
				return sortOrder
			} else {
				return 0
			}
		}
	}

	_getCurrentSortData() {
		return this._currentSortProperty ? this._data.sort(this._compareFunction()) : this._data
	}

	_checkCurrentSortProperty(property) {
		return this._currentSortProperty && property.join('') === this._currentSortProperty.join('');
	}

	_setData(data) {
		if(data) {
			this._data = data
		}
	}

	_handleClickSort(property) {

		if (this._currentSortProperty && property.join('') === this._currentSortProperty.join('')) {
			this._currentSortType = this._currentSortType === "ASC" ? "DESC" : "ASC"
		}
		else {
			this._currentSortProperty = property
			this._currentSortType = "ASC"
		}
	}

	get(data = null) {
		this._setData(data)
		return {
			currentSortData: this._getCurrentSortData(),
			currentSortType: this._currentSortType,
			currentSortProperty: this._currentSortProperty,
			handleClickSort: property => this._handleClickSort(property),
			checkCurrentSortProperty: property => this._checkCurrentSortProperty(property)
		}
	}
}

const sortTable = new SortTable()
export { sortTable }