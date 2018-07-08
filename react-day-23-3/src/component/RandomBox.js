import React from 'react'

const num = (min, max) => {
    return Math.random() * (max - min) + min;
  }

const RandomBox = () => {
    return num(0,10)
}

export default RandomBox