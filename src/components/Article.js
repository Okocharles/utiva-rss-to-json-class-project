import React from "react";

function Article() {
  return (
    <div>
      <div v-for="(item, index) in items">
        <div className="card">
          <img
            className="card-img-top"
            // :src="item.thumbnail ? item.thumbnail : altImg"
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">{/*item.title*/}</h5>
            <p className="card-text" v-html="item.description"></p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
}

export default Article;
