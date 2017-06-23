function setTextColor() {
  document.querySelectorAll(".comment").forEach((el) => {
    var username = el.querySelector(".user-name")
    if (username != null) {
      var color = username.style.color;
      if (color != "") {
        el.querySelectorAll(".message").forEach((el) => {
          el.querySelector(".markup").style.cssText = "color: " + color + " !important";
        });
      }
    }
  });
}
setTextColor();
var observer = new MutationObserver(setTextColor);
observer.observe(document.documentElement, {childList: true, subtree: true, attributes: false});
