/**
 * Удаляем все дочерние элементы у родителя
 * @param element
 */
export const removeAllChild = element => {
	while(element.firstChild) {
		element.removeChild(element.firstChild)
	}
}