import PropTypes from "prop-types";
import React, { Component } from "react";

export default class NewsItem extends Component {
  static propTypes = {};
  constructor() {
    super();
    console.log("hey i m constructor");
  }

  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card">
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn bt-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
