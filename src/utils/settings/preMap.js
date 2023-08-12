function preMap (userPosition) {
  const matrix = []
  for (let i = 0; i < 6; i++) {
    const row = []
    for (let j = 0; j < 6; j++) {
      row.push({
        id: [i, j],
        isActivate: false,
        isHover: false,
        robot: false,
        obstacules: false,
        final: false
      })
    }
    matrix.push(row)
  }

  return matrix
}
export default preMap
