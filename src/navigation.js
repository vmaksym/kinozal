export function createNavigation() {
  return `Сортувати: <a href="${location.origin + location.pathname + '?sort=name'}">Назва</a>
    <a href="${location.origin + location.pathname + '?sort=date'}">Дата</a>`;
}