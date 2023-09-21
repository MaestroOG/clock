function updateTime() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    document.getElementById("time-hour").textContent = hours;
    document.getElementById("time-min").textContent = minutes;
    document.getElementById("time-sec").textContent = seconds;
    document.getElementById('ampm').textContent = ampm;
}

updateTime();

setInterval(updateTime, 1000);