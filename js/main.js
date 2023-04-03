function clock() {
    const hoursArrow = document.querySelector('.hours');
    const minutesArrow = document.querySelector('.minutes');
    const seconsdArrow = document.querySelector('.seconds');
    const deg = 6; // 360 / 60

    setInterval(() => {
        const day = new Date();
        const hours = day.getHours() * 30; // 360 / 12
        const minutes = day.getMinutes() * deg;
        const seconds = day.getSeconds() * deg;

        hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
        minutesArrow.style.transform = `rotateZ(${minutes}deg)`
        seconsdArrow.style.transform = `rotateZ(${seconds}deg)`
    }, 0)
}

clock();