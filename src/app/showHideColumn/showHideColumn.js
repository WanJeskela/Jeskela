class ShowHideColumn {

	constructor() {
		this._columns = []
	}

	_setColumns(columns) {
		if (Array.isArray(this._columns) && !this._columns.length && columns) {
			columns.forEach(item => {
				this._columns.push({
					name: item,
					show: true
				})
			})
		}
	}

	_toggleColumn(name) {
		const column = this._columns.find(item => item.name === name)
		column.show = !column.show
	}

	get(columns = null) {
		this._setColumns(columns)

		return {
			toggleColumn: name => this._toggleColumn(name),
			columnsShowHide: this._columns
		}
	}
}

const showHideColumn = new ShowHideColumn()
export { showHideColumn }