function appendTo(elementId, html) {
  const element = document.getElementById(elementId);
  element.innerHTML += html;
}

function replaceHtml(elementId, html) {
  document.getElementById(elementId).innerHTML = html;
}

function appendParagraph(elementId, paragraph) {
  document.getElementById(elementId).innerHTML += `<p>${paragraph}</p>`;
}

function renderTrueFalseExercises() {
  const trueFalseItems = document.querySelectorAll('.trueFalseItem');

  for (let item of trueFalseItems) {
    renderTrueFalseItem(item);
  }
}

function renderTrueFalseItem(item) {
  renderTrueFalseButton(item, 'true');
  renderTrueFalseButton(item, 'false');
}

function renderTrueFalseButton(item, truthValue) {
  let button = document.createElement('button');
  button.classList.add(`${truthValue}Button`);
  button.addEventListener('click', (e) => handleTrueFalseItem(item, truthValue));
  item.append(button);
}

function handleTrueFalseItem(item, truthValue) {
  console.log(truthValue);
  if (item.classList.contains(truthValue)) {
    item.classList.add('correct');
  } else {
    item.classList.add('incorrect');
  }
}
