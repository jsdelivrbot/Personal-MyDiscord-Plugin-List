(function() {
  backgrounds = [
    "http://i.imgur.com/JuMdLBB.jpg",
    "http://i.imgur.com/nFrvLMO.jpg",
    "http://i.imgur.com/fIkaKnK.jpg",
    "http://i.imgur.com/MX3fDMA.jpg",
    "http://i.imgur.com/OVKLgET.jpg",
    "http://i.imgur.com/Y8ozn71.jpg",
    "http://i.imgur.com/947agi9.jpg",
    "http://i.imgur.com/Lu39kSx.jpg",
    "http://i.imgur.com/PJNT590.jpg",
  ];

  var currentIndex = getRandomInt(0, backgrounds.length - 1)
  var previousIndex = currentIndex;

  function switchBackground() {
    if (backgrounds.length > 1) {
      while (currentIndex == previousIndex) {
      currentIndex = getRandomInt(0, backgrounds.length - 1);
      }
      previousIndex = currentIndex;
      var url = backgrounds[currentIndex];
      document.getElementsByClassName('app')[0].style.backgroundImage = 'url(' + url + ')';
    }
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  setInterval(switchBackground, 600000);
  switchBackground();
})()
