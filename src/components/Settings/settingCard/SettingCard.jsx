import React, { useEffect, useState } from 'react'
import styles from './SettingCard.module.css'
import pointMap from '../../../assest/img/punto-mapa-normal@3x.png'
import pointActivate from '../../../assest/img/punto-mapa-activo@3x.png'
import pointMapHover from '../../../assest/img/punto-mapa-hover@3x.png'
import preMap from '../../../utils/settings/preMap'
import robot from '../../../assest/img/robot@2x.png'
import final from '../../../assest/img/casa-robot@2x.png'
import obstacule from '../../../assest/img/pngwing.com (19).png'

export default function SettingCard ({ action, properties, setProperties }) {
  const [positionCards, setPositionCards] = useState([])

  useEffect(() => {
    if (action === 'reset') {
      const initialMap = preMap()
      setPositionCards(initialMap)
    }
  }, [action])

  const handleClick = (rowIndex, columnIndex) => {
    if (action === 'start') {
      setPositionCards(prevMap => {
        const updatedMap = [...prevMap]
        if (properties.start.length > 0) { // para que solo se pueda seleccionar 1 robot
          updatedMap[properties.start[0]][properties.start[1]].robot = false
        }
        updatedMap[rowIndex][columnIndex].robot = true
        setProperties({ ...properties, start: [rowIndex, columnIndex] })
        return updatedMap
      })
    }

    if (action === 'final') {
      setPositionCards(prevMap => {
        const updatedMap = [...prevMap]
        if (properties.final.length > 0) { // para que solo se pueda seleccionar 1 final
          updatedMap[properties.final[0]][properties.final[1]].final = false
        }
        updatedMap[rowIndex][columnIndex].final = true
        setProperties({ ...properties, final: [rowIndex, columnIndex] })
        return updatedMap
      })
    }

    if (action === 'obstacules') {
      setPositionCards(prevMap => {
        const updatedMap = [...prevMap]
        // if (properties.obstacules.some(elem => areArraysEqual) > 0) { // para que solo se pueda seleccionar 1 final
        //   updatedMap[properties.final[0]][properties.final[1]].final = false
        // }
        updatedMap[rowIndex][columnIndex].obstacules = true
        const newProp = { ...properties, obstacules: [...properties.obstacules, [rowIndex, columnIndex]] }
        setProperties(newProp)
        return updatedMap
      })
    }
  }

  return (
    <main className={styles.main}>
      {positionCards?.map((row, index) => (row.map((cell, columnIndex) => (
        <div key={cell.id.join('-')} className={styles.card}>
          {cell.robot
            ? <img src={robot} />
            : cell.final
              ? <img src={final} />
              : cell.obstacules
                ? <img
                    src={obstacule}
                    style={{ width: '130px' }}
                  />
                : <img
                    src={cell.isHover ? pointMapHover : cell.isActivate ? pointActivate : pointMap}
                    onClick={() => handleClick(cell.id[0], cell.id[1])}
                  />}

        </div>
      ))
      ))}
    </main>
  )
}
