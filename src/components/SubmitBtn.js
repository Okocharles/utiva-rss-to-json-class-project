import React from "react";

function SubmitBtn() {
  return (
    <div>
      <input
        type="submit"
        className="btn btn-primary btn-block"
        value="Search"
        //   @click.prevent="handleSearch"
        //   v-else
      />
    </div>
  );
}

export default SubmitBtn;
