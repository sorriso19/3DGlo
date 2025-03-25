const timer = (deadline) => {
    console.log(deadline)
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')

    const twoDigits = (num) => {
        return('0' + num).slice(-2)
    }

    const getTimeRemaining = () => {

        const dateStop = new Date(deadline).getTime()
        const dateNow = new Date().getTime()
        const timeRemaining = (dateStop - dateNow) / 1000
        console.log(timeRemaining)

        const hours = twoDigits(Math.floor(timeRemaining / 60 / 60))
        const minutes = twoDigits(Math.floor((timeRemaining / 60) % 60))
        const seconds = twoDigits(Math.floor(timeRemaining % 60))

        return {
            timeRemaining,
            hours,
            minutes,
            seconds
        }

    }
    
    const updateClock = () => {
        const getTime = getTimeRemaining()
        console.log(getTime)
        
        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;

       

        if (getTime.timeRemaining < 0) {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';

        }

    }
    
        let idInerval = setInterval(() => {
        updateClock()
    }, 1000)
    if ((new Date(deadline).getTime() - new Date().getTime()) < 0) {
        clearInterval(idInerval);
    }
   

}
export default timer