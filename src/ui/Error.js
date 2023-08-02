import React from 'react'

export default function Error({message}) {
  return (
    <div className="col-span-12">{message ? message : 'Error Occured'}</div>
    
  )
}
