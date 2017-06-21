/**
 * Кодирует строку
 * @param {string} string - исходная строка
 * @return {string} - закодированное представление
 */
export function encode(string) {
  return window.btoa(string);
}

/**
 * Декодирует строку
 * @param {string} string - закодированная строка
 * @return {string} - исходная строка
 */
export function decode(string) {
  return window.atob(string);
}
