import React from "react";

function InputField() {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Enter RSS URL"
        required
        //   v-model.trim="rssUrl"
        //   v-else
      />
    </div>
  );
}

export default InputField;
