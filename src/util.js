function appendTo(elementId, html) {
  const element = document.getElementById(elementId);
  element.innerHTML += html;
}

function replaceHtml(elementId, html) {
  document.getElementById(elementId).innerHTML = html;
}
