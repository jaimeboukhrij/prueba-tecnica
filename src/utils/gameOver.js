import areArraysEqual from './areArrayEqual'

export default function gameOver (rowIndex, columnIndex, positionCards) {
  const posGameOver = []
  let countGameOver = 0
  if (rowIndex - 1 >= 0) posGameOver.push([rowIndex - 1, columnIndex])
  if (rowIndex + 1 <= 5) posGameOver.push([rowIndex + 1, columnIndex])
  if (columnIndex - 1 >= 0) posGameOver.push([rowIndex, columnIndex - 1])
  if (columnIndex + 1 <= 5) posGameOver.push([rowIndex, columnIndex + 1])

  for (let i = 0; i < positionCards.length; i++) {
    for (let j = 0; j < positionCards[i].length; j++) {
      if ((posGameOver.some(elem => areArraysEqual(elem, positionCards[i][j].id))) &&
       ((positionCards[i][j].obstacule === true) || (positionCards[i][j].isActivate === true))
      ) {
        countGameOver += 1
      }
    }
  }
  if (posGameOver.length === countGameOver) {
    return true
  }
}
