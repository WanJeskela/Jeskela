/**
 *
 * Пример работы функции:
 *
 * createElement('div', { id: 'app' },
 *     createElement('h1', { class: 'title' }, 'Привет!')
 * )
 *
 * В приложении везде используется сокращение createElement as e
 *
 * e('div', { id: 'app' },
 *     e('h1', { class: 'title' }, 'Привет!')
 * )
 *
 * Этот код создаст нам HTML элементы:
 *
 * <div id="app">
 *     <h1 class="title">Привет!</h1>
 * </div>
 *
 *
 * @param tag
 * @param attrs
 * @param children
 * @returns {*}
 */
export function createElement(tag, attrs, children) {
	// create html element
	const element = document.createElement(tag)

	// attribute for element
	for (let name in attrs) {
		if (name === 'onclick') {
			element.onclick = attrs['onclick']
			continue
		}
		if (name && attrs.hasOwnProperty(name)) {
			let value = attrs[name]
			if (value === true) {
				element.setAttribute(name, name)
			} else if (value !== false && value != null) {
				element.setAttribute(name, value.toString())
			}
		}
	}

	// add all child element
	for (let i = 2; i < arguments.length; i++) {
		let child = arguments[i]
		element.appendChild(child.nodeType == null ? document.createTextNode(child.toString()) : child)
	}

	return element
}