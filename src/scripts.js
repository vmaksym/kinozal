export function appendContent(to, content) {
  const el = document.querySelector(`.${to}`);
  const fragment = createFragmentTemplate(content);
  el.appendChild(fragment);
}

function createFragmentTemplate(str){
  const template = document.createElement("template");
  template.innerHTML = str;
  return template.content;
}