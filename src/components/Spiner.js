import PropTypes from "prop-types";
import React, { Component } from "react";
import loading from "./loading.gif";

export default class Spiner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} width="50" height="50" alt="" />
      </div>
    );
  }
}
