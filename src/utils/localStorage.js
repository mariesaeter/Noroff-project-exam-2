export function saveLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
