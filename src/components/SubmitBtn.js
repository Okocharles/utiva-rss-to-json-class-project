import React from 'react'

function SubmitBtn(props) {
  return (
    <input
      type="submit"
      className="btn btn-primary"
      value="Search"
      onClick={props.handleSubmit}
    />
  )
}

export default SubmitBtn
