export default function CardHover (prevMap, rowIndex, columnIndex, userPosition) {
  console.log([rowIndex, columnIndex], userPosition)
  const updatedMap = [...prevMap]
  if (updatedMap[rowIndex][columnIndex].isActivate === false && (
    (rowIndex === userPosition[0] && ((columnIndex >= userPosition[1] - 1) && (columnIndex <= userPosition[1] + 1))) ||
    (columnIndex === userPosition[1] && ((rowIndex >= userPosition[0] - 1) && (rowIndex <= userPosition[0] + 1)))
  )) {
    updatedMap[rowIndex][columnIndex].isHover = true
  } else {
    updatedMap[rowIndex][columnIndex].isHover = false
  }
  return updatedMap
}
