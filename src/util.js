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
  const controls = document.createElement('nav');
  controls.classList.add('trueFalseButtons');
  item.append(controls);
  renderTrueFalseButton(item, 'true');
  renderTrueFalseButton(item, 'false');
}

function renderTrueFalseButton(item, truthValue) {
  const button = document.createElement('button');
  button.classList.add('button');
  button.classList.add(`${truthValue}Button`);
  if (truthValue === 'true') {
    button.innerHTML = '&#10003;';
  } else {
    button.innerHTML = '&#65794;';
  }
  button.addEventListener('click', (e) => handleTrueFalseItem(item, truthValue));
  item.querySelector('.trueFalseButtons').append(button);
}

function handleTrueFalseItem(item, truthValue) {
  const question = item.querySelector('.question');

  if (item.classList.contains(truthValue)) {
    question.classList.add('correct');
    question.classList.remove('incorrect');
  } else {
    question.classList.add('incorrect');
    question.classList.remove('correct');
  }
}
