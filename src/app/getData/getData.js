/**
 * Промис получения данных
 * @param url
 * @returns {Promise}
 */
const getData = url => new Promise((resolve, reject) => {
	return fetch(url, { mode: 'no-cors' })
		.then(response => {
			if (response.ok) {
				 resolve(response.json())
			}
			else {
				alert('Произошла ошибка, подробности в консоли!')
				reject(`Ошибка: ${response.status} ${response.statusText}`)
			}
		})
})

export { getData }