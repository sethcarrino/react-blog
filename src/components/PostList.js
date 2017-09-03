import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
      this.setState({posts: data});
    });
  }

  render() {

    let blogs = this.state.posts.map((post) => {
      return (
        
        <NavLink to={`/show/${post._id}`} key={post._id}>{post.title}</NavLink>
      )
    });

    return (
      <div className="container-fluid blog-list">
        <section className="list-group">
          {blogs}
        </section>
      </div>
    );
  }
}

export default PostList;
