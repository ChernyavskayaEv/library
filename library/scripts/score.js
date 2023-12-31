// const score1 = `
// Library#1 - Фиксированная вёрстка
// Score: 192 / 204

// 1. Вёрстка валидная +10 - "Document checking completed. No errors or warnings to show."

// 2. Вёрстка семантическая +16:
//    В коде страницы присутствуют следующие элементы (указано минимальное количество, может быть больше):
// - <header>, <main>, <footer> +2.
// - шесть элементов <section> (по количеству секций) +2.
// - только один заголовок <h1> +2.
// - пять заголовков <h2> +2.
// - один элемент <nav> (панель навигации в хедере) +2.
// - два списка ul > li > a (панель навигации, ссылки на соцсети в футере) +2.
// - семь кнопок <button> +2.
// - два инпута <input> +2.

// 3. Вёрстка соответствует макету +54
// - блок <header> +8:
//   - Текст совпадает с макетом, расстояние между элементами меню одинаковое, 30px.
//   - Элементы меню работают как якоря.
//   - Сами элементы меню при наведении (эффект hover) интерактивные
//   - Расстояние от самого меню до иконки пользователя - 40px. Иконка является отдeльным элементом, и не входит в <nav>.
//   - Текст "Brooklyn Public Library" находится в <h1>.
// - секция Welcome +4.
// - секция About +6:
//   - Добавлены все картинки, которые будут использованы в папку с картинками.
//   - Расстояния между кнопками пагинации 10px.
//   - Кнопки хоть и имеют вид круга, но интерактивная область (область нажатия, выделяемая cursor:pointer) размером +5px в каждую сторону.
// - секция Favorites +8:
//   - Интерактивные кнопки имеют структуру input type="radio" + label.
//   - Картинки и описания для 4х секций добавилены в проект и скрыты с помощью CSS свойств, display: none;.
//   - Кнопки "buy" интерактивные, плавно меняют свой цвет при наведении на них, как указано в макете styleguides.
//   - Кнопка "own" не интерактивная, не нажимается и на ней присутствует атрибут disabled.
// - секция CoffeShop +6.
// - секция Contacts +6:
//   - Карту вставлена просто картинкой
//   - Везде, где в тексте встречаются цифры в виде телефонного номера, это ссылки с типом "tel" и номером.
//   - Там, где в тексте встречается текст с именем контактного лица, это ссылка с типом "mailto" и адресом почты (AmandaHirst@gmail.com).
// - секция LibraryCard +8:
//   - "Find your Library card" - это форма с полями input.
//   - Присутствуют ограничения в полях input на использование только букв и цифр, а также дефиса.
//   - Все 3 кнопки интерактивные, плавно менют свой цвет при наведении на них, как указано в макете styleguides.
//   - Иконки из модального окна (Visits, Bonuses, Books) добавлены в соответствующую папку проекта.
// - блок <footer> +8:
//   - Адрес библиотеки ссылка на место на карте.
//   - Иконки соцсетей ссылки (на адреса этих сервисов).
//   - Вместо Username мое имя и ссылка на GitHub.

// 4. Общие требования к верстке **+20**
// - для построения сетки используются флексы (display: flex...) +2.
// - при уменьшении масштаба страницы браузера вся вёрстка (контент и фоны) размещается по центру, а не сдвигается в сторону +2.
// - иконки добавлены в формате .svg. +2.
// - изображения добавлены в формате .jpg (.jpeg) или .png +2.
// - есть favicon +2. Иконка содержит 3 буквы "BPL" (Brooklyn Public Library)
// - плавная прокрутка по якорям +2.
// - в футере название ссылки Username заменено и ведет на GitHub студента +2.
// - в футере ссылка The Rolling Scopes School ведет на страницу курса https://rs.school/js-stage0/ +2.
// - интерактивность элементов согласно макету. Интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, подчеркивание. _+2_.
// - обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияет на соседние элементы _+2_.
// `;

// // console.log(score1);

// const score2 = `
// Library#2 - Адаптивная вёрстка

// 1. Вёрстка соответствует макету. Ширина экрана 768px +26
// - блок <header> +2
// - секция Welcome +2
// - секция About +2. Новые элементы в виде стрелок, 5 точек навигации по слайдам под картинкой.
// - секция Favorites +4
// - секция CoffeShop +4
// - секция Contacts +4
// - секция LibraryCard +4
// - блок <footer> + 2

// 2. Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12
// - нет полосы прокрутки при ширине страницы от 1440рх до 640рх +4.
// - элементы не выходят за пределы окна браузера при ширине страницы от 1440рх до 640рх +4.
// - элементы не наезжают друг на друга при ширине страницы от 1440рх до 640рх +4. Например, меню в хедере должно преобразоваться в бургер-меню до того, как элементы начнут наезжать друг на друга.

// 3. На ширине экрана 768рх реализовано адаптивное меню +12 (Рекомендуется сделать появление бургер-меню на ширине 1024px):
// - если при ширине страницы в 768рх панель навигации не скрыта, а бургер-иконка не появилась (при этом учитывайте "Особенности проверки адаптивности в DevTools"), то ставим 0 за данный пункт, и дальше его не проверяем. Иначе:
// - при нажатии на бургер-иконку плавно появляется адаптивное меню +4
// - при нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран +4
// - ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям при нажатии, а само адаптивное меню при этом плавно скрывается +4
// `;

// // console.log(score2);

// const score3 = `
// Library#3 - Добавление функционала при помощи JavaScript

// Этап 1: Пользователь не зарегистрирован

// 1. Ограниченная карусель в блоке About
// - Карусель реагирует на нажатие кнопок (кнопки под каруселью и стрелочки слева и справа в мобильной версии) и происходит анимация перелистывания. +15
// - На экране шириной 1440px проверяем, чтобы было доступно 2 других скрытых картинки. При каждом нажатии выезжает следующая, и так до границ справа и слева. +2
// - Выделенная кнопка под каруселью (имеется ввиду кнопка соответствующая активному слайду и которая имеет коричневый цвет) - неактивная. +2
// - Если анимация карусели не успела завершиться, при этом нажата была следующая кнопка, то картинка не должна зависнуть в промежуточном состоянии. +2
// - На экране шириной 768px проверяем, чтобы было доступно 4 других скрытых картинки. Для этого меняем разрешение и перезагружаем страницу. Теперь доступных перемещений становится 5. +2
// - Неактивными становятся не только выделенные кнопки, но и стрелочки на границах карусели. +2
// 2. Слайдер в блоке Favorites
// - "Слайдер" реагирует на нажатие кнопок панели навигации и происходит анимация затухания и проявления. +15
// - На любой ширине экрана все 4 карточки с книгами одновременно будут плавно затухать, а затем плавно проявляться следующие. +2
// - Анимация может быть прервана следующим нажатием на кнопку выбора поры года, но при этом анимация не должна застывать в промежуточном состоянии. Если анимация не была прервана следующим нажатием кнопки, то она должна отрабатывать до конца. +2
// - Во время анимаций высота блока Favorites не должна меняться. +2
// - ❗Панель навигации "слайдера" сделана по технологии "sticky" для разрешений с одним рядом книг (768px и меньше), т.е. опускается вниз вместе со скроллом страницы, прилипая к верхней части экрана, в рамках блока Favorites. +2
// 3. До регистрации
// - Нажатие на кнопку Check the card ни к чему не приведёт.
// 4. До авторизации
// - Иконка юзера в хедере отображается в виде силуэта.
// - В блоке Favorites все кнопки должны иметь имя Buy, а не Own. +2

// Этап 2: Пользователь на этапе регистрации

// 1. Меню авторизации при нажатии на иконку пользователя
// - Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой. +2
// - На разрешении 768px, при открытом бургер-меню, оно закрывается и открывается меню авторизации. +2
// - То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна при открытом меню авторизации. +2
// - Нажатие на любую область или элемент вне меню приводят к закрытию меню авторизации. +2
// 2. Модальное окно REGISTER
// - Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).
// - При нажатии на кнопку Register в открытом меню авторизации появляется модальное окно REGISTER, где есть поля First name, Last name, E-mail и Password. +2
// - При нажатии кнопки Sign Up в блоке Digital Library Cards также появляется модальное окно REGISTER. +2
// - Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2
// - При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2
// - В данном случае, ограничения по полям - все поля должны быть не пустыми. +2
// - Пароль должен быть не короче 8 символов. +2
// - В поле E-mail должна быть валидация типа email. +2
// 3. Окончание регистрации
// - Данные сохраняются в хранилище localStorage, в том числе и пароль, хотя в реальной жизни так делать нельзя. +2
// - Иконка пользователя меняется на заглавные буквы имени. +2
// - Отображение страницы приходит в состояние после авторизации (этап 4). +2
// - Будет сгенерирован девятизначный Card Number случайным образом в формате 16-ричного числа. +2
// 4. При наличии регистрации, но будучи не авторизованным
// - Блок Digital Library Cards. Если введённые имя и номер карты совпадают с данными пользователя, то отображается панель с информацией, вместо кнопки Check the card на 10 секунд. ❗-2
// - Там же после отображения информации, кнопка возвращается в прежнее состояние, а поля в форме сбрасываются. ❗-2

// Этап 3: Пользователь на этапе входа в учётную запись после регистрации.

// 1. Модальное окно LOGIN
// - Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).
// - При нажатии на кнопку Log In появляется модальное окно LOGIN, где есть поля E-mail or readers card и Password. +2
// - При нажатии кнопки Log In в блоке Digital Library Cards также появляется модальное окно LOGIN. +2
// - Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2
// - При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2
// - Для авторизации все поля должны быть не пустыми. +2
// - Пароль должен быть не короче 8 символов. +2
// 2. Блок Favorites
// - Если пользователь ещё не вошёл в учётную запись, то при нажатии на любую кнопку Buy открывается модальное окно LOGIN. +2

// Этап 4: Пользователь после входа в учётную запись

// 1. Меню профиля при нажатии на иконку с инициалами пользователя
// - При наведении курсором на иконку пользователя должно отображаться полное имя пользователя (атрибут title). +2
// - Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой. +2
// - На разрешении 768px при открытом бургер-меню, оно закрывается и открывается меню авторизации. +2
// - То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна. +2
// - Нажатие на любую область или элемент вне меню приводят к закрытию меню профиля. +2
// - ❗Вместо надписи Profile отображается девятизначный Card Number. Для Card Number можно использовать меньший шрифт чтобы надпись вметилась в контейнер, +2
// - Нажатие на кнопку My Profile открывает модальное окно MY PROFILE. +2
// - Нажатие на кнопку Log Out приводит к выходу пользователю из состояния авторизации, возвращаемся к этапу #1. +2
// 2. Модальное окно MY PROFILE
// - Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).
// - В случае если имя и фамилия слишком длинные и не влазят в блок то должен произойти перенос фамилии на следующую строку.
// - Счетчик для Visits отображает, сколько раз пользователь проходил процесс авторизации, включая самый первый - регистрацию. +2
// - Счетчик для Books отображает, сколько у пользователя книг находятся в состоянии Own. Значение варьируется 0-16. ❗-2
// - Рядом с Card Number есть кнопка, нажатие на которую копирует код карты клиента в буфер обмена. +2
// - Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2
// - При нажатии на крестик в углу окна, или на затемненную область вне этого окна, оно закрывается. +2
// 3. Блок Favorites
// - При нажатии на любую кнопку Buy, еще до покупки абонемента, открывается модальное окно BUY A LIBRARY CARD. +2
// - При нажатии на любую кнопку Buy, после покупки абонемента, меняет вид кнопки на неактивную Own, добавляя единицу к счетчику книг в профиле. ❗-2
// - Кроме того после нажатия обновляется не только счетчик, но и название книги должно отобразится в разделе Rented Books. Название формируется по принципу <название книги>, <автор книги>. В случае если название книги слишком длинное или список стал слишком большой список книг в блоке Rented Books становится скроллируемым (по необходимости горизонтально/ вертикально или оба скролла сразу) Тайтл Rented Books скроллироваться не должен ❗-2
// 4. Модальное окно BUY A LIBRARY CARD
// - ❗Модальное окно нужно сделать шириной 640px. Будет это обрезка по 5px по бокам, или просто уменьшение длины с сохранением сетки - значения не имеет, хотя при правильной сеточной структуре, сделать это будет намного проще. +2
// - Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).
// - При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2
// - Для того, чтобы кнопка Buy была активна, все поля должны быть не пустыми. +2
// - Bank card number должен содержать 16 цифр. С пробелами каждые 4 символа или нет - значения не имеет. +2
// - Expiration code содержит 2 поля с ограничением в 2 цифры. +2
// - CVC должен содержать 3 цифры. +2
// - После удачного нажатия на кнопку Buy, окно закрывается, и больше мы к нему не возвращаемся.
// 5. Блок Digital Library Cards
// - При наличии авторизации вместо кнопки Check the Card будут отображаться данные пользователя и бейджи, как на дизайне LibraryCard after login in account. ❗-2
// `;

// console.log(score3);
