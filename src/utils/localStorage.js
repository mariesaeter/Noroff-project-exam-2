export function saveLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeLocal(key) {
  localStorage.removeItem(key);
}

export function loadLocal(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}
