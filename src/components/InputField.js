import React from 'react'

function InputField(props) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Enter RSS URL"
      required
      value={props.url}
      onChange={props.getUrl}
    />
  )
}

export default InputField
