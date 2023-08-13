import areArraysEqual from './areArrayEqual'

export default function finalGame (rowIndex, columnIndex, finalPosition) {
  if (areArraysEqual(finalPosition, [rowIndex, columnIndex])) return true
}
