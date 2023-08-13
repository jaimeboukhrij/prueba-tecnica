import React, { useEffect, useState } from 'react'
import styles from './Card.module.css'
import generateMap from '../../../utils/generateMap'
import pointMap from '../../../assest/img/punto-mapa-normal@2x.png'
import pointActivate from '../../../assest/img/punto-mapa-activo@2x.png'
import pointMapHover from '../../../assest/img/punto-mapa-hover@2x.png'
import robot from '../../../assest/img/robot@2x.png'
import obstacule from '../../../assest/img/pngwing.com (19).png'
import final from '../../../assest/img/casa-robot@2x.png'
import CardHover from '../../../utils/cardHover'
import areArraysEqual from '../../../utils/areArrayEqual'
import finalGame from '../../../utils/finalGame'
import FinalModal from '../../Others/FinalModal'

export default function Card ({ properties, resetMap, setReresetMap }) {
  const [positionCards, setPositionCards] = useState([])
  const [userPosition, setUserPosition] = useState(properties.start)
  const [finalPosition, setFinalPosition] = useState(properties.final)
  const [show, setShow] = useState(false)

  useEffect(() => {
    setUserPosition(properties.start)
    setFinalPosition(properties.final)
    const initialMap = generateMap(properties)
    setPositionCards(initialMap)
  }, [resetMap])

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

  const handelFinal = (cell, finalPosition) => {
    if (finalGame(cell.id[0], cell.id[1], finalPosition)) {
      setShow(true)
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
                  onClick={() => handelFinal(cell, finalPosition)}

                />
              : cell.obstacule
                ? <img
                    className={styles.obstacule}
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
      <FinalModal show={show} setShow={setShow} setReresetMap={setReresetMap} resetMap={resetMap} />

    </main>
  )
}
