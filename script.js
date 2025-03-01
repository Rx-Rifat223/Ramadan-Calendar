    const timings = [
        { date: "1 March", sehri: "05:05", iftar: "18:01" },
        { date: "2 March", sehri: "05:04", iftar: "18:02" },
        { date: "3 March", sehri: "05:03", iftar: "18:03" },
        { date: "4 March", sehri: "05:02", iftar: "18:03" },
        { date: "5 March", sehri: "05:01", iftar: "18:04" },
        { date: "6 March", sehri: "05:00", iftar: "18:04" },
        { date: "7 March", sehri: "04:59", iftar: "18:05" },
        { date: "8 March", sehri: "04:58", iftar: "18:05" },
        { date: "9 March", sehri: "04:57", iftar: "18:06" },
        { date: "10 March", sehri: "04:56", iftar: "18:06" },
        { date: "11 March", sehri: "04:55", iftar: "18:07" },
        { date: "12 March", sehri: "04:54", iftar: "18:07" },
        { date: "13 March", sehri: "04:53", iftar: "18:08" },
        { date: "14 March", sehri: "04:52", iftar: "18:08" },
        { date: "15 March", sehri: "04:51", iftar: "18:09" },
        { date: "16 March", sehri: "04:50", iftar: "18:09" },
        { date: "17 March", sehri: "04:49", iftar: "18:10" },
        { date: "18 March", sehri: "04:48", iftar: "18:10" },
        { date: "19 March", sehri: "04:47", iftar: "18:11" },
        { date: "20 March", sehri: "04:46", iftar: "18:11" },
        { date: "21 March", sehri: "04:45", iftar: "18:12" },
        { date: "22 March", sehri: "04:44", iftar: "18:12" },
        { date: "23 March", sehri: "04:43", iftar: "18:13" },
        { date: "24 March", sehri: "04:42", iftar: "18:13" },
        { date: "25 March", sehri: "04:41", iftar: "18:14" },
        { date: "26 March", sehri: "04:40", iftar: "18:14" },
        { date: "27 March", sehri: "04:39", iftar: "18:15" },
        { date: "28 March", sehri: "04:38", iftar: "18:15" },
        { date: "29 March", sehri: "04:37", iftar: "18:16" },
        { date: "30 March", sehri: "04:36", iftar: "18:16" },
        { date: "31 March", sehri: "04:35", iftar: "18:17" }
    ];

    function updateCountdown() {
        const today = new Date();
        const day = today.getDate();
        const month = today.toLocaleString('en-US', { month: 'long' });
        const formattedDate = `${day} ${month}`;

        document.getElementById("currentDate").innerText = `Today's Date: ${today.toDateString()}`;

        let timing = timings.find(t => t.date === formattedDate);
        if (!timing) return;

        const sehriTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), parseInt(timing.sehri.split(":")[0]), parseInt(timing.sehri.split(":")[1]), 0);
        const iftarTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), parseInt(timing.iftar.split(":")[0]), parseInt(timing.iftar.split(":")[1]), 0);

        function getTimeRemaining(targetTime) {
            const now = new Date();
            let diff = targetTime - now;
            if (diff < 0) return "Time Over";
            let hours = Math.floor(diff / (1000 * 60 * 60));
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diff % (1000 * 60)) / 1000);
            return `${hours}h ${minutes}m ${seconds}s`;
        }

        document.getElementById("sehriCountdown").innerText = `Countdown to Sehri: ${getTimeRemaining(sehriTime)}`;
        document.getElementById("iftarCountdown").innerText = `Countdown to Iftar: ${getTimeRemaining(iftarTime)}`;
    }

    function populateTimingsTable() {
        const timingsTable = document.getElementById("timingsTable");
        timings.forEach((timing, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${timing.date}</td>
                <td>${new Date(`2025-03-${timing.date.split(' ')[0]}`).toLocaleString('en-US', { weekday: 'long' })}</td>
                <td>${convertTo12HourFormat(timing.sehri)}</td>
                <td>${convertTo12HourFormat(timing.iftar)}</td>
            `;
            timingsTable.appendChild(row);
        });
    }
    function convertTo12HourFormat(time) {
        let [hours, minutes] = time.split(":");
        hours = parseInt(hours);
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        return `${hours}:${minutes} ${ampm}`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
    populateTimingsTable();
});

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
