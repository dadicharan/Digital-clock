// Select DOM elements
const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const greetingElement = document.getElementById('greeting');

// Update Clock Function
function updateClock() {
  const now = new Date();

  // Format time
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;

  // Format date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString('en-US', options);

  // Update time and date
  timeElement.textContent = timeString;
  dateElement.textContent = dateString;

  // Update greeting and theme
  updateGreeting(hours);
  updateTheme(hours);
}

// Update Greeting Based on Time
function updateGreeting(hours) {
  let greeting = 'Welcome!';
  if (hours >= 1 && hours < 12) {
    greeting = 'Good Morning!';
  } else if (hours >= 12 && hours < 16) {
    greeting = 'Good Afternoon!';
  } else {
    greeting = 'Good Evening!';
  }
  greetingElement.textContent = greeting;
}

// Automatically Update Theme Based on Time
function updateTheme(hours) {
  const body = document.body;

  if (hours >= 3 && hours < 7) {
    // Early Morning: Blue Theme
    body.style.background = 'linear-gradient(135deg, #2964EE, #1E3C72)';
    body.style.color = '#ffffff';
  } else if (hours >= 7 && hours < 17) {
    // Light Mode: Daytime
    body.style.background = 'linear-gradient(135deg, #ffffff, #e0e0e0)';
    body.style.color = '#333';
  } else {
    // Dark Mode: Evening and Night
    body.style.background = 'linear-gradient(135deg, #1e1e1e, #2a2a2a)';
    body.style.color = '#ffffff';
  }
}

// Start the clock
setInterval(updateClock, 1000);
updateClock(); // Initial update
