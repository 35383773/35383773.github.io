let secret = [38,38,40,40,37,39,37,39,66,65];
let i=0;
document.onkeydown = function (e) {
  e = e || window.event;
  if (i<secret.length) {
    if (secret[i] == e.keyCode) {
      i++;
      if (i==secret.length){
        i=0;
        window.alert('La fin du parcours se trouve ici:\n jjj.zbaFvgr.pbz/synt.ugzy');
      }
    } else {
      i=0;
    }
  } else {
    i=0;
  }
};
