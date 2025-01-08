document.addEventListener('DOMContentLoaded', () => {
    // Loading screen logic
    const loadingScreen = document.getElementById('loading-screen');
    const tabContent = document.getElementById('tab-content');

    // Show the loading screen for 3 seconds
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Hide the loading screen
        tabContent.style.display = 'block'; // Show the main content
    }, 3000); // 3000 milliseconds = 3 seconds

    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabs = document.querySelectorAll('.tab');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabs.forEach(tab => tab.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Example of dynamically adding events to the calendar section
    const eventCarousel = document.getElementById('event-carousel');
    const events = [
        { title: '3D Printing Workshop', date: '2023-11-01' },
        { title: 'Annual Tech Fair', date: '2023-12-15' },
        { title: 'Hackathon', date: '2024-01-20' }
    ];

    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event-item');
        eventDiv.innerHTML = `<h3>${event.title}</h3><p>${event.date}</p>`;
        eventCarousel.appendChild(eventDiv);
    });
});
