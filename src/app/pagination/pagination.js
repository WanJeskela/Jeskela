class Pagination {

	constructor() {
		this._currentPage = 1
		this._itemsPerPage = 10
	}

	_resetCurrentPage() {
		this._currentPage = 1
	}

	_nextPage() {
		this._currentPage = Math.min(this._currentPage + 1, this._maxPages)
	}

	_prevPage() {
		this._currentPage = Math.max(this._currentPage - 1, 1)
	}

	_changeCurrentPage(page) {
		this._currentPage = page
	}

	_changeItemsPerPage(num) {
		this._itemsPerPage = num
		this._resetCurrentPage()
	}

	_setData(data) {
		if (data) {
			this._data = data
			this._maxPages = Math.ceil(data.length / this._itemsPerPage)
		}
	}

	_getCurrentData() {
		const begin = (this._currentPage - 1) * this._itemsPerPage
		const end = begin + this._itemsPerPage
		return this._data.slice(begin, end)
	}

	get(data = null) {
		this._setData(data)
		return {
			currentData: this._getCurrentData(),
			currentPage: this._currentPage,
			maxPages: this._maxPages,
			nextPage: () => this._nextPage(),
			prevPage: () => this._prevPage(),
			jumpToPage: page => this._changeCurrentPage(page)
		}
	}
}

const pagination = new Pagination()

export { pagination }