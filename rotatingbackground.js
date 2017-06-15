// Load backgrounds for the CSS to use.

(function() {
  backgrounds = [
    "https://www.dropbox.com/s/f40upjzs5jtd2yv/thumb-1920-701999.jpg?dl=1",
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