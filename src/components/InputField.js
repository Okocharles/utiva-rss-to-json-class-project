import React from "react";

function InputField() {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Enter RSS URL"
      required
      //   v-model.trim="rssUrl"
      //   v-else
    />
  );
}

export default InputField;
