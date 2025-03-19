let date = new Date()
let hours = date.getHours()
greetings = ''
const days = ['Понедельник', 'Вторник', 'Среда' , 'Четверг', 'Пятница']

const  options = { weekday: 'long' }
let today = document.getElementById('day')
let currentTime = document.getElementById('current-time')
let timeTillNewYear = document.getElementById('time-till-NY')


elements = document.getElementById('greeting'),

greeting = elements.innerHTML;

switch (true) {
case (hours >= 5) && (hours < 11):
    elements.innerHTML = 'Доброе утро, ';
    break;
case (hours >= 11) && (hours < 18):
    elements.innerHTML = 'Добрый день, ';
    break;
case (hours >= 18) && (hours <= 23):
    elements.innerHTML = 'Добрый вечер, ';
    break;
case (hours >= 0) && (hours < 5):
    elements.innerHTML = 'Доброй ночи, ';
    break;
default:
    elements.innerHTML = 'Здравствуйте, ';
    break;
}

today.innerHTML = 'Cегодня: ' + date.toLocaleString('ru', options);

currentTime.innerHTML = 'Текущее время: ' + date.toLocaleTimeString("ru")


let deadline = '01 January 2026 00:00'

const getTimeRemaining = () => {

    let dateStop = new Date(deadline).getTime()
    let dateNow = new Date().getTime()
    let timeRemaining = (dateStop - dateNow) / 1000


    let days = Math.floor(timeRemaining / 60 / 60 / 24)

    console.log(days)
    
    timeTillNewYear.innerHTML = `До нового года осталось: ${days} дней`

}

getTimeRemaining()


console.log(date);