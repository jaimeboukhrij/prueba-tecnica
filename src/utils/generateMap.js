import areArraysEqual from './areArrayEqual'

function generateMap (userPosition) {
  const matrix = []
  const obstacules = [[4, 4], [3, 4], [4, 3], [3, 3]]
  for (let i = 0; i < 6; i++) {
    const row = []
    for (let j = 0; j < 6; j++) {
      if (i === userPosition[0] && j === userPosition[1]) {
        row.push({
          id: [i, j],
          isActivate: true,
          isHover: false,
          robot: false,
          obstacule: false
        })
      } else if (obstacules.some(elem => areArraysEqual(elem, [i, j]))) {
        row.push({
          id: [i, j],
          isActivate: false,
          isHover: false,
          robot: false,
          obstacule: true
        })
      } else {
        row.push({
          id: [i, j],
          isActivate: false,
          isHover: false,
          robot: false,
          obstacule: false
        })
      }
    }
    matrix.push(row)
  }

  return matrix
}
export default generateMap
