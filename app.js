var getprogressbar = document.getElementById("progress-bar");

window.onscroll = function () {
  scrollpoint();
};

// st *100 /(ph - clienth)
function scrollpoint() {
  //   console.log("I am on scroll");
  var getscrolltop = document.documentElement.scrollTop; //st
  var getprojectht = document.documentElement.scrollHeight; //ph
  var getclientht = document.documentElement.clientHeight; //window height //current screen height //client height
  //   console.log(getscrolltop);
  //   console.log(getprojectht);
  //   console.log(getclientht);

  var calcheight = getprojectht - getclientht;
  var getfinal = Math.round((getscrolltop * 100) / calcheight);

  getprogressbar.style.width = `${getfinal}%`;

  //   console.log(getfinal);
}
function printme() {
  window.print();
}
