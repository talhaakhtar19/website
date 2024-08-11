document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('theme-toggle');
    
    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
      document.getElementById('section2').setAttribute('background-color','black');
      document.getElementById('section3').setAttribute('background-color','black');
      document.getElementById('section4').setAttribute('background-color','black');
      document.getElementById('section5').setAttribute('background-color','black');
    }
  
    toggleButton.addEventListener('click', () => {
      document.getElementById('section2').setAttribute('background-color','black');
      document.getElementById('section3').setAttribute('background-color','black');
      document.getElementById('section4').setAttribute('background-color','black');
      document.getElementById('section5').setAttribute('background-color','black');
      
      // Save the current theme to localStorage
      const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    });
  });