const startDate = new Date("2018-03-18");
        function updateCountUp() {
            const currentDate = new Date();
            const timeDiff = currentDate.getTime() - startDate.getTime();
            const totalSeconds = Math.floor(timeDiff / 1000);
            const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
            const months = Math.floor((totalSeconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
            const weeks = Math.floor((totalSeconds % (30 * 24 * 60 * 60)) / (7 * 24 * 60 * 60));
            const days = Math.floor((totalSeconds % (7 * 24 * 60 * 60)) / (24 * 60 * 60));
            const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
            const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
            const seconds = totalSeconds % 60;

            document.getElementById("years").textContent = years;
            document.getElementById("months").textContent = months;
            document.getElementById("weeks").textContent = weeks;
            document.getElementById("days").textContent = days;
            document.getElementById("hours").textContent = hours;
            document.getElementById("minutes").textContent = minutes;
            document.getElementById("seconds").textContent = seconds;
        }

        updateCountUp();
        setInterval(updateCountUp, 1000);
        