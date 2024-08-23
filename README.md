# React Timers

![App Screenshot](https://i.imgur.com/VOSeQNG_d.webp?maxwidth=760&fidelity=grand)


## Implementation

- RequestAnimationFrame is better optimized than setTimeout or setInterval for real-time animations and updates because it synchronizes with the refresh rate of the display.
- Using performance.now() instead of Date.now() for more accurate time measurement.


# Техническое задание для React / Fullstack

Необходимо создать приложение (в https://stackblitz.com/ или любой другой системе, где можно онлайн запускать код и пошарить ссылку на решение), которое позволит создать несколько независимых таймеров. Приложение должно быть написано на React+Typescript

Каждый таймер должен:

- иметь кнопку "start/pause": по нажатию запускает таймер, по повторному нажатию останавливает таймер. Если нажимаем еще раз, то время продолжит тикать с места паузы. и т.д;
- иметь кнопку "reset", которая сбрасывает таймер;
- иметь кнопку “remove”, которая удаляет последний добавленный таймер;
- вести счет в миллисекундах (minutes:seconds.milliseconds). Рекомендуемое время обновления интерфейса 100мс.
- работать более менее точно (на сколько это возможно в условиях браузера) в течение продолжительного времени. Максимальная допустимая погрешность 10 секунд в течение суток;

На его точность не должна влиять загрузка в очередях eventloop (или оказывать минимальное влияние).

Допускается использование сторонних библиотек с Weekly Downloads > 1000000.

Консоль должна быть чистой, линтер не должен нигде выводить ошибки или предупреждения.