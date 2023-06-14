import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error=()=> {
    const ok=useRouteError();
  return (
    <div>
        <h1>{ok.status} : {ok.statusText}</h1>
    </div>
  )
}

export default Error