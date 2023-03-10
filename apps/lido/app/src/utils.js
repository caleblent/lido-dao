import BN from 'bn.js'

const TEN_TO_15 = new BN(10).pow(new BN(15))

/**
 * Formats wei value to Eth rounded to 3 decimal places.
 * @param {number} wei wei amount
 * @returns {string} equivalent value in Eth
 */
export function formatEth(wei) {
  return String(new BN(wei).div(TEN_TO_15) / 1000)
}

/**
 * Safely multiplies a number by 100
 * @param {number} number an integer or up to 2 decimal places
 * @returns {number} value in basis points
 */
export function toBasisPoints(number) {
  return Math.round(number * 100)
}

/**
 * Safely divides a number by 100
 * @param {number} number an integer up to 10000
 * @returns {number} sum
 */
export function fromBasisPoints(number) {
  return number / 100
}

/**
 * Safely adds three nums together
 * @param {number} n1 first num
 * @param {number} n2 second num
 * @param {number} n3 third num
 * @returns {string} sum total
 */
export function sum(n1, n2, n3) {
  return String(new BN(n1).add(new BN(n2)).add(new BN(n3)))
}

/**
 * Capitalizes the first letter of a string
 * @param {string} string the target string
 * @returns {string} the same string with the first letter capitalized
 */
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
