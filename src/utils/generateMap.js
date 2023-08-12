function generateMap (userPosition) {
  const matrix = []

  for (let i = 0; i < 6; i++) {
    const row = []
    for (let j = 0; j < 6; j++) {
      if (i === userPosition[0] && j === userPosition[1]) {
        row.push({
          id: [i, j],
          isActivate: true,
          isHover: false,
          robot: false
        })
      } else {
        row.push({
          id: [i, j],
          isActivate: false,
          isHover: false,
          robot: false
        })
      }
    }
    matrix.push(row)
  }

  return matrix
}
export default generateMap
