// Update current time in milliseconds
    function updateTime() {
      const timeElement = document.getElementById('currentTime');
      const currentMs = Date.now();
      timeElement.textContent = `Current Time: ${currentMs}ms`;
    }

    // Initialize time on page load
    updateTime();

    // Update time every second for demonstration
    setInterval(updateTime, 1000);

    // Keyboard accessibility enhancement
    document.addEventListener('DOMContentLoaded', () => {
      const focusableElements = document.querySelectorAll('a, button, [tabindex="0"]');
      
      focusableElements.forEach(el => {
        el.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            if (el.tagName === 'A') {
              e.preventDefault();
              el.click();
            }
          }
        });
      });
    });