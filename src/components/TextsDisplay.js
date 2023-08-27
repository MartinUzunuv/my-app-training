import React from 'react'
import Text1 from './Text1'

const TextsDisplay = ({arr}) => {
  return (
    <div>
      {
        arr.map((txt,i) => {
          return <Text1 key={i} txt={txt} />
        })
      }
    </div>
  )
}

export default TextsDisplay