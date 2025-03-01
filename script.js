const timings = [
    { date: "2 March", sehri: "05:04 AM", iftar: "06:02 PM" },
    { date: "3 March", sehri: "05:03 AM", iftar: "06:03 PM" },
    { date: "4 March", sehri: "05:02 AM", iftar: "06:03 PM" },
    { date: "5 March", sehri: "05:01 AM", iftar: "06:04 PM" },
    { date: "6 March", sehri: "05:00 AM", iftar: "06:04 PM" },
    { date: "7 March", sehri: "04:59 AM", iftar: "06:05 PM" },
    { date: "8 March", sehri: "04:58 AM", iftar: "06:05 PM" },
    { date: "9 March", sehri: "04:57 AM", iftar: "06:06 PM" },
    { date: "10 March", sehri: "04:56 AM", iftar: "06:06 PM" },
    { date: "11 March", sehri: "04:55 AM", iftar: "06:07 PM" },
    { date: "12 March", sehri: "04:54 AM", iftar: "06:07 PM" },
    { date: "13 March", sehri: "04:53 AM", iftar: "06:08 PM" },
    { date: "14 March", sehri: "04:52 AM", iftar: "06:08 PM" },
    { date: "15 March", sehri: "04:51 AM", iftar: "06:09 PM" },
    { date: "16 March", sehri: "04:50 AM", iftar: "06:09 PM" },
    { date: "17 March", sehri: "04:49 AM", iftar: "06:10 PM" },
    { date: "18 March", sehri: "04:48 AM", iftar: "06:10 PM" },
    { date: "19 March", sehri: "04:47 AM", iftar: "06:11 PM" },
    { date: "20 March", sehri: "04:46 AM", iftar: "06:11 PM" },
    { date: "21 March", sehri: "04:45 AM", iftar: "06:12 PM" },
    { date: "22 March", sehri: "04:44 AM", iftar: "06:12 PM" },
    { date: "23 March", sehri: "04:43 AM", iftar: "06:13 PM" },
    { date: "24 March", sehri: "04:42 AM", iftar: "06:13 PM" },
    { date: "25 March", sehri: "04:41 AM", iftar: "06:14 PM" },
    { date: "26 March", sehri: "04:40 AM", iftar: "06:14 PM" },
    { date: "27 March", sehri: "04:39 AM", iftar: "06:15 PM" },
    { date: "28 March", sehri: "04:38 AM", iftar: "06:15 PM" },
    { date: "29 March", sehri: "04:37 AM", iftar: "06:16 PM" },
    { date: "30 March", sehri: "04:36 AM", iftar: "06:16 PM" },
    { date: "31 March", sehri: "04:35 AM", iftar: "06:17 PM" },
];

function updateCountdown() {
    const today = new Date();
    document.getElementById("currentDate").innerText = `Today's Date: ${today.toDateString()}`;
    const formattedDate = `${today.getDate()} March`;
    const timing = timings.find(t => t.date === formattedDate);
    
    if (timing) {
        const sehriTime = convertTo24HourFormat(`2025-03-${today.getDate()} ${timing.sehri}`);
        const iftarTime = convertTo24HourFormat(`2025-03-${today.getDate()} ${timing.iftar}`);
        
        function getTimeRemaining(targetTime) {
            const now = new Date();
            const diff = targetTime - now;
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            return diff > 0 ? `${hours}:${minutes}:${seconds}` : "Time over";
        }
        
        document.getElementById("sehriCountdown").innerText = `Countdown to Sehri: ${getTimeRemaining(sehriTime)}`;
        document.getElementById("iftarCountdown").innerText = `Countdown to Iftar: ${getTimeRemaining(iftarTime)}`;
    } else if (today.getDate() === 1 && today.getMonth() === 3) {
        // Redirect to Eid Mubarak page on 1st April
        window.location.href = "eid.html";
    }
}

function convertTo24HourFormat(timeString) {
    const [time, modifier] = timeString.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
        hours = '00';
    }
    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }
    return new Date(`2025-03-${new Date().getDate()}T${hours}:${minutes}:00`);
}

function populateTimingsTable() {
    const timingsTable = document.getElementById("timingsTable");
    timings.forEach((timing, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${timing.date}</td>
            <td>${new Date(`2025-03-${timing.date.split(' ')[0]}`).toLocaleString('en-US', { weekday: 'long' })}</td>
            <td>${timing.sehri}</td>
            <td>${timing.iftar}</td>
        `;
        timingsTable.appendChild(row);
    });
}

setInterval(updateCountdown, 1000);
updateCountdown();
populateTimingsTable();

window.addEventListener("resize", function() {
    const width = window.innerWidth;
    const fontSize = width < 600 ? "14px" : "18px";
    document.body.style.fontSize = fontSize;
});

document.addEventListener("DOMContentLoaded", function() {
    const width = window.innerWidth;
    const fontSize = width < 600 ? "14px" : "18px";
    document.body.style.fontSize = fontSize;
});