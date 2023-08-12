import React, { useEffect, useState } from 'react'
import styles from './Card.module.css'
import generateMap from '../../utils/generateMap'
import pointMap from '../../assest/img/punto-mapa-normal@3x.png'
import pointActivate from '../../assest/img/punto-mapa-activo@3x.png'
import pointMapHover from '../../assest/img/punto-mapa-hover@3x.png'
import robot from '../../assest/img/robot@2x.png'
import obstacule from '../../assest/img/pngwing.com (19).png'
import final from '../../assest/img/casa-robot@2x.png'
import CardHover from '../../utils/cardHover'
import areArraysEqual from '../../utils/areArrayEqual'
import finalGame from '../../utils/finalGame'

export default function Card ({ properties }) {
  const [positionCards, setPositionCards] = useState([])
  const [userPosition, setUserPosition] = useState(properties.start)
  const [finalPosition] = useState(properties.final)

  useEffect(() => {
    const initialMap = generateMap(properties)
    setPositionCards(initialMap)
  }, [])

  const handleMouseEnter = (rowIndex, columnIndex) => {
    setPositionCards(prevMap => CardHover(prevMap, rowIndex, columnIndex, userPosition))
  }

  const handleMouseLeave = (rowIndex, columnIndex) => {
    setPositionCards(prevMap => {
      const updatedMap = [...prevMap]
      updatedMap[rowIndex][columnIndex].isHover = false
      return updatedMap
    })
  }

  const handleClick = (rowIndex, columnIndex, isHover) => {
    if (isHover) {
      setUserPosition([rowIndex, columnIndex])
      setPositionCards(prevMap => {
        const updatedMap = [...prevMap]
        updatedMap[rowIndex][columnIndex].isActivate = true
        updatedMap[rowIndex][columnIndex].isHover = false

        return updatedMap
      })
    }
  }

  return (
    <main className={styles.main}>
      {positionCards?.map((row, index) => (row.map((cell, columnIndex) => (
        <div key={cell.id.join('-')} className={styles.card}>
          {areArraysEqual(userPosition, cell.id)
            ? <img
                src={robot}
              />
            : cell.finalPlace
              ? <img
                  src={final}
                  onClick={() => finalGame(cell.id[0], cell.id[1], finalPosition)}

                />
              : cell.obstacule
                ? <img
                    style={{ width: '130px' }}
                    src={obstacule}

                  />

                : <img
                    src={cell.isHover ? pointMapHover : cell.isActivate ? pointActivate : pointMap}
                    onMouseEnter={() => handleMouseEnter(cell.id[0], cell.id[1])}
                    onMouseLeave={() => handleMouseLeave(cell.id[0], cell.id[1])}
                    onClick={() => handleClick(cell.id[0], cell.id[1], cell.isHover)}
                  />}
        </div>
      ))
      ))}
    </main>
  )
}
