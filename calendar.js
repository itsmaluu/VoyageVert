calendar
document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const currentMonthYear = document.getElementById('currentMonthYear');
    const prevMonthBtn = document.getElementById('prevMonthBtn');
    const nextMonthBtn = document.getElementById('nextMonthBtn');
  
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
  
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];
  
    function generateCalendar(month, year) {
      calendar.innerHTML = '';
      currentMonthYear.textContent = `${months[month]} ${year}`;
  
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const startDay = firstDay.getDay();
      const daysInMonth = lastDay.getDate();
  
      for (let i = 0; i < startDay; i++) {
        const prevMonthDay = document.createElement('div');
        prevMonthDay.textContent = lastDay.getDate() - (startDay - i) + 1;
        prevMonthDay.classList.add('calendar-day', 'other-month');
        calendar.appendChild(prevMonthDay);
      }
  
      for (let day = 1; day <= daysInMonth; day++) {
        const currentDay = document.createElement('div');
        currentDay.textContent = day;
        currentDay.classList.add('calendar-day', 'current-month');
        calendar.appendChild(currentDay);
      }
    }
  
    generateCalendar(currentMonth, currentYear);
  
    prevMonthBtn.addEventListener('click', function () {
      currentMonth--;
      if (currentMonth < 0) {
        currentYear--;
        currentMonth = 11;
      }
      generateCalendar(currentMonth, currentYear);
    });
  
    nextMonthBtn.addEventListener('click', function () {
      currentMonth++;
      if (currentMonth > 11) {
        currentYear++;
        currentMonth = 0;
      }
      generateCalendar(currentMonth, currentYear);
    });
  
    calendar.addEventListener('click', function (event) {
      const clickedDay = event.target.textContent;
      if (clickedDay !== '') {
        const selectedDay = document.querySelector('.selected-day');
        if (selectedDay) selectedDay.classList.remove('selected-day');
        event.target.classList.add('selected-day');
      }
    });
  });
  