/* Author: Hannah Bauer
Course: CGS2829.0M1
Date: 11/7/2024
Assignment: Exercise 12: Activity with Ajax
*/

fetch('data/config.json')

  .then(response => response.json())

  .then(config => {
    const backgroundElement = document.querySelector('.gradient-background');

    const toggleButton = document.getElementById('toggleTheme');

    let currentColors = config.background.colors;
    
    const setGradientColor = () => {
      backgroundElement.style.background = `linear-gradient(${config.background.direction}, ${currentColors.join(', ')})`;

      backgroundElement.style.backgroundSize = '220% 220%';
    };
    setGradientColor();

    document.styleSheets[0].insertRule(`

      @keyframes dynamicGradientAnimation {
        ${config.background.keyframes.map(f => `${f.position} { background-position: ${f.backgroundPosition}; }`).join(' ')}
      }

    `, 0);

    backgroundElement.style.animation = `dynamicGradientAnimation ${config.background.animationSpeed} ease infinite`;

    toggleButton.onclick = () => {
      currentColors = currentColors === config.background.themes.day ? config.background.themes.night : config.background.themes.day;
      
      toggleButton.textContent = currentColors === config.background.themes.day ? "Night Mode" : "Day Mode";
      
      setGradientColor();
    };

    document.getElementById('homeButton').onclick = () => location.reload();
  })