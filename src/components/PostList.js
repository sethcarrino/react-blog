import React, { Component } from 'react';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }

    this.fetchData = this.fetchData.bind(this);
  }


  componentDidMount() {
    fetch(URL)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ posts: data });
        console.log(data);
      });
  }

  fetchData = e => {
    e.preventDefault();
    fetch(URL)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ posts: data });
      });
  };

  render() {
    const { id } = this.props.match.params;
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
    return (
      <div>

      </div>
    );
  }
}

export default PostList;
