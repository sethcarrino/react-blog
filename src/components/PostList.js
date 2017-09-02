import React, { Component } from 'react';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      title: '',
      entry: ''
    }

    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleEntry = this.handleEntry.bind(this);
  }

  handleAuthor(e) {
    this.setState({author: e.target.value});
  }

  handleTitle(e) {
    this.setState({title: e.target.value});
  }

  handleEntry(e) {
    this.setState({entry: e.target.value});
  }

  // creating a function to call that will add to the list of posts
  addToList = (e) => {
      e.preventDefault();
      this.setState({author: e.target.value, title: e.target.value, entry: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({author: '', title: '', entry: ''});
  }



  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ posts: data });
        console.log(data);
      });
  }

  render() {
    const { id } = this.props.match.params;
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
    let blogs = this.props.posts.map( post => {
      return (
          <ul className="card" key={post._id}>
            <li>
              {post.title}
            </li>
          </ul>
        );
      });
      return (
        <div className="cards">
          {blogs}
        </div>
      );
  }
}

export default PostList;
