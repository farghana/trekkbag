import React from 'react'

const Counter = ({totalNumberofItems, numberOfItemsPacked}) => {
  return (
    <div>
      <b>{numberOfItemsPacked}</b> / {totalNumberofItems}{" "}items packed
    </div>
  )
}

export default Counter
