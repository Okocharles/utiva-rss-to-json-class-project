import React from "react";

function Article(props) {
  return (
    <div>
      <div className="card">
        <img className="card-img-top" src={props.imgSrc} alt="Feed" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text" v-html="item.description"></p>
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default Article;
