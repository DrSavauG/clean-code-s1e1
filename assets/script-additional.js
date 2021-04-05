//#region ссылка на youtube
const linkYouTube = document.querySelector('.links__youtube');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://drsavaug.github.io/links/src.json');
xhr.send();
xhr.onload = function () {
  if (xhr.status != 200) {
    return;
  }
};
xhr.onprogress = function (event) {
  linkYouTube.href = JSON.parse(event.target.responseText)['clean-code-s1e1'];
  console.log(linkYouTube.href);
};
//#endregion