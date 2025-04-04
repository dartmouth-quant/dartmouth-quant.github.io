document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.schedule-container');
    fetch('../data/schedule.json')
        .then(response => response.json())
        .then(data => {
            data.schedule.forEach(event => {
                const scheduleItem = document.createElement('div');
                scheduleItem.classList.add('schedule-item');
                
                const dateTime = `${event.date} in ${event.location}`;
                const leadersText = event.leaders.length > 0 ? `Led by ${event.leaders.join(' and ')}` : '';
                
                scheduleItem.innerHTML = `
                    <div class="schedule-header">
                        Week ${event.week} — ${event.title}
                        <div class="schedule-date">${dateTime}</div>
                    </div>
                    <div class="schedule-description">${event.description}</div>
                    <div class="schedule-content">
                        <b>Topics:</b> ${event.topics}${leadersText ? ` - <i>${leadersText}</i>` : ''}
                        ${event.note ? ` (${event.note})` : ''}
                    </div>
                `;
                
                container.appendChild(scheduleItem);
            });
        })
        .catch(error => {
            console.error('Error loading schedule:', error);
        });
}); 