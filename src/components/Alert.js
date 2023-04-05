import React from 'react'

export default function Alert(props) {
  return (
   props.alert && <div className="alert alert-info alert-dismissible fade show" role="alert">
          <strong>{props.alert.type}</strong>  {props.alert.msg}
    </div>
  )
}
