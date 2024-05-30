# Pay2u

## Описание проекта

Pay2u - это веб-приложение, разработанное для облегчения отслеживания подписок и возможности оформления новых подписок прямо в приложении. Оно предназначено для помощи пользователям в управлении и контроле за различными услугами и подписками, такими как стриминговые сервисы, музыка, кино и т. д..

## Адрес сайта https://pay2u.myddns.me

## Разработчик проекта

Ольга Панкрашина (https://t.me/olyaolya2713)

## Используемые технологии

<div>
<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="React" alt="React" width="40" height="40"/>&nbsp
  <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="typescript" alt="typescript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/materialui/materialui-plain.svg" title="MUI" alt="MUI" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/sass/sass-original.svg" title="Sass" alt="Sass" width="40" height="40"/>&nbsp;
</div>

## Основные точки max,min width 375px

## Инструкции по установке и запуску

1. Клонируйте репозиторий: `git clone git@github.com:Olyaolya13/Pay2u__front.git`
2. Перейдите в директорию проекта: `cd Pay2u__front`
3. Установите зависимости: `npm install`
4. Запустите проект: `npm run dev`

## Структура проекта

<img src="./src/assets/ScrinshotReadme/ProjectStructure.png" alt="Project Structure" width="550" height="400">

## End points

- /history ( компонент History) истории подписок
- /services (компонент Services) главная страница развлекательные сервисы
- /sell_history (компонент SellHistory) история покупок
- /catalog (компонент CatalogSubscriptions) каталог подписок
- /categories (компонент CategoriesMovie) категории(Кино)
- /subscriptions (компонент MySubscriptions) мои подписки
- /manage_subcription (компонент ManageSubscription) упарвление подпиской по id
- /manage_subcription/id (компонент ManageSubscriptionWaitId) упарвление подписками
- /autopayment (компонент Autopayment) подключение автоплатежа
- /subscribe (компонент Subscribe) подключение подписки
- /subscribe/id (компонент AboutSubscribe) подключение подписки по id
- /subscription_payment (компонент SubscriptionPayment) оплата подписки

## Скриншоты

### При первом заходе на сайт появляются истории, которые объясняют преимущества оформления подписок

<img src="./src/assets/ScrinshotReadme/History.png" alt="History" width="250" height="550">

### С главной страницы попадаем в Истории подписок по клику на иконку часы или по одноименному компоненту, где показана деталицация покупок подписок

<img src="./src/assets/ScrinshotReadme/Sell_history.png" alt="Sell History" width="250" height="550">

### С главной страницы попадаем в Каталог подписок на title 'Все', где отображены карточки подпискок, рассортированные по категориям с поиском

<img src="./src/assets/ScrinshotReadme/Catalog.png" alt="Catalog" width="250" height="550">

### В Категориях (в данном случае Кино) есть фильтрация, где можно сортировать по цене и рейтингу

<img src="./src/assets/ScrinshotReadme/Filter.png" alt="Filter" width="250" height="550">

### В Управлении подпиской мы попадаем из Мои подписки, есть возможность подключения автоплатежа,отключение подписки и смены тарица

<img src="./src/assets/ScrinshotReadme/Manage_subscription.png" alt="Manage subscription" width="250" height="550">

### При подключении автоплатежа, появляется попап с информацией об успешном подключении, сумме и дальнейшем списании

<img src="./src/assets/ScrinshotReadme/Autopayment.png" alt="Autopayment" width="250" height="550">

### В Подключение подписок попадаем из Каталога подписок, кликнув по карточке подписки, представлена информация о тарифах

<img src="./src/assets/ScrinshotReadme/Subscribe.png" alt="Subscribe" width="250" height="550">

### При оплате подписки, появляется попап с промокодом и информацией о платеже, кнопка скопировать и перейти на сайт сервиса, кнопка вернуться в главное меню(Развлекательные сервисы), так же реализован тултип и возможность подключить автоплатеж, скачать чек

<img src="./src/assets/ScrinshotReadme/Subscription_payment.png" alt="Subscription payment" width="250" height="550">
