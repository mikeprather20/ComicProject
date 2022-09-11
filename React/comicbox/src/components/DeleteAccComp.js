//may incorporate this

import React from 'react'

export default function DeleteAcc(id) {
    fetch('/users/'+id, {
        method: 'DELETE',
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
        }
    })
  return (
    <div>
            <button onClick={() => DeleteAcc(id)}>DELETE ACCOUNT</button>
    </div>
  )
}
