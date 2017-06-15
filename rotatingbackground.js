(function() {
  backgrounds = [
    "https://my.foxgirlsare.sexy/static/felix2.png",
    "https://my.foxgirlsare.sexy/static/lost%20at%20sea%204.jpg",
    "https://my.foxgirlsare.sexy/static/dance%20with%20the%20spirits%202.jpg",
    "https://my.foxgirlsare.sexy/static/flow%20of%20souls%202.jpg",
    "https://my.foxgirlsare.sexy/static/moonlight%20night%202.jpg",
    "https://my.foxgirlsare.sexy/static/felix1.jpg",
    "https://my.foxgirlsare.sexy/static/felix3.png",
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
