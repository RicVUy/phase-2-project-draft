import React from 'react'

const Detail = ({name, value}) => {
  return (
    <div>
        <h3>{name}</h3>
        <p>{value}</p>
    </div>
  )
}

export default Detail