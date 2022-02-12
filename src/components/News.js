import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };
   constructor() {
    super();
    console.log("hey i m constructor new ");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/everything?q=${this.props.news}&apiKey=ae94d749c59c424faa772c8be93005a8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    data = await data.json();
    this.setState({
      articles: data.articles,
      totalArticles: data.totalResults,
      loading: false,
    });
    console.log(this.state.totalArticles);
  }

  handelNextClick = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/everything?q=${
      this.props.news
    }&apiKey=ae94d749c59c424faa772c8be93005a8&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    data = await data.json();
    console.log(data);
    this.setState({
      page: this.state.page + 1,
      articles: data.articles,
      loading: false,
    });
  };
  handelPreviousClick = async () => {
    let url = `https://newsapi.org/v2/everything?q=${
      this.props.news
    }&apiKey=ae94d749c59c424faa772c8be93005a8&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    data = await data.json();
    this.setState({ page: this.state.page - 1, articles: data.articles });
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center my-4"> News moneky - {this.props.news} </h2>
        {this.state.loading && <Spiner />}
        <div className="row g-3 gx-4">
          {this.state.articles &&
            !this.state.loading &&
            this.state.articles.map((item) => {
              return (
                <div className="col-md-3 gx-3 m-3" key={item.url}>
                  <NewsItem
                    title={item.title.slice(0, 50) || " "}
                    description={item.description.slice(0, 88) || "discription"}
                    imgUrl={item.urlToImage || "no img"}
                    newsUrl={item.url || "no url"}
                  />
                </div>
              );
            })}{" "}
        </div>
        <div className="contaner d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handelPreviousClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous Page
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handelNextClick}
            disabled={
              this.state.page >
              Math.ceil(this.state.totalArticles / this.props.pageSize)
            }
          >
            Next page &rarr;
          </button>
        </div>
      </div>
    );
  }
}

// export default News
