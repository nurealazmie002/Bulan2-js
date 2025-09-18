import { randomNumber } from "./utils.js";

/**
 * @param {number} tebakan
 * @param {number} target
 * @returns {string} 
 */
export function tebakAngka(tebakan, target) {
  if (tebakan < target) return "Terlalu kecil!";
  if (tebakan > target) return "Terlalu besar!";
  return "Benar!";
}

/**
 * @param {number} min 
 * @param {number} max 
 * @returns {number} 
 */
export function buatTarget(min = 1, max = 10) {
  return randomNumber(min, max);
}
