import areArraysEqual from './areArrayEqual'

function generateMap ({ start, final, obstacules }) {
  if (obstacules.length === 0) {
    obstacules = [[2, 2], [2, 3], [2, 4]]
  }
  const matrix = []
  for (let i = 0; i < 6; i++) {
    const row = []
    for (let j = 0; j < 6; j++) {
      if (i === start[0] && j === start[1]) {
        row.push({
          id: [i, j],
          isActivate: true,
          isHover: false,
          robot: true,
          obstacule: false,
          finalPlace: false
        })
      } else if (i === final[0] && j === final[1]) {
        row.push({
          id: [i, j],
          isActivate: true,
          isHover: false,
          robot: true,
          obstacule: false,
          finalPlace: true

        })
      } else if (obstacules.some(elem => areArraysEqual(elem, [i, j]))) {
        row.push({
          id: [i, j],
          isActivate: false,
          isHover: false,
          robot: false,
          obstacule: true,
          finalPlace: false
        })
      } else {
        row.push({
          id: [i, j],
          isActivate: false,
          isHover: false,
          robot: false,
          obstacule: false,
          finalPlace: false
        })
      }
    }
    matrix.push(row)
  }

  return matrix
}
export default generateMap
