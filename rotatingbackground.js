(function() {
  backgrounds = [
    "http://static.zerochan.net/Yatogami.Kuroh.full.1359059.jpg",
    "http://cdn.wallpapersafari.com/55/61/fIcg4P.jpg",
    "http://fungyung.com/data/out/61/62839689-k-project-wallpapers.jpg",
    "http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1301/21/c0/17582218_1358742073462.jpg",
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
