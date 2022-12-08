
* Frontend https://olgatovstaya.mesto.nomoredomains.club
* Backend https://api.olgatovstaya.mesto.nomoredomains.club

# Проект: Mesto React Api-full
Автор: Товстая Ольга

## Описание
Mesto: интерактивная страница с возможностью размещать фотографии, удалять их и ставить лайки.
Cайт сделан в рамках обучения по професии "Веб разработчик" в Яндекс Практикуме.

## Посмотреть проект
https://olgatovstaya.mesto.nomoredomains.club

## Функциональность проекта
### Frontend
__Стэк__: HTML/CSS, JavaScript, React.js

* Сайт создан через Create React App
* Использованы функциональные компоненты
* Применяются React-хуки, React Router
* Реализована связка с сервером через Api 
* Верстка по методологии БЭМ, организация файловой структуры по Nested (сверстан по макету из Figma)

### Backend
__Стэк__: Express.js, MongoDB
 
* Создана база данных MongoDB
* Cервер развернут через Express.js. 
* Связь с фронтендом через REST API
* Бэкенд производит регистрацию и авторизацию пользователей, редактирование данных пользователя, создание и удаление карточек.

## Инструкция по развёртыванию и системные требования
### Frontend

`npm run start` — запускает проект на локальном сервере. Если проект не запустился автоматически, откройте по ссылке http://localhost:3000/   
`npm run build` — собирает проект для деплоя на сервер (папка build)

### Backend
  
`npm run start` — запускает сервер   
`npm run dev` — запускает сервер с hot-reload