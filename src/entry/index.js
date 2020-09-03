/**
 * Подключаем стили
 * Получаем ссылку на json файл с данными
 */
import 'style/index.scss'
import json from 'data'

import { initApp } from "app/initApp"

initApp({
	jsonUrl: json
})
