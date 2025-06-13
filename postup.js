let countdownTime = 0;
        let timerInterval;
    
        // Функция для обновления таймера
        function updateTimer() {
            if (countdownTime <= 0) {
                clearInterval(timerInterval);
                document.getElementById("timer").innerHTML = "Время вышло!";
                return;
            }
    
            // Вычисляем оставшееся время
            let hours = Math.floor(countdownTime / 3600);
            let minutes = Math.floor((countdownTime % 3600) / 60);
            let seconds = countdownTime % 60;
    
            // Форматируем время
            hours = String(hours).padStart(2, '0');
            minutes = String(minutes).padStart(2, '0');
            seconds = String(seconds).padStart(2, '0');
    
            // Обновляем содержимое элемента таймера
            document.getElementById("timer").innerHTML = `${hours}:${minutes}:${seconds}`;
    
            // Уменьшаем оставшееся время
            countdownTime--;
        }
    // Функция для запуска таймера
        function startTimer() {
            const inputTime = document.getElementById("timeInput").value;
            countdownTime = parseInt(inputTime, 10);
    
            if (isNaN(countdownTime) || countdownTime <= 0) {
                alert("Пожалуйста, введите положительное число.");
                return;
            }
    
            clearInterval(timerInterval); // Очищаем предыдущий таймер
            timerInterval = setInterval(updateTimer, 1000);
        }
    
        // Обработчик события для кнопки
        document.getElementById("startButton").addEventListener("click", startTimer);
    </script>