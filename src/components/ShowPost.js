import React, {Component} from 'react';

class ShowPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      title: '',
      blog: ''
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;

    fetch(URL).then(response => response.json()).then(data =>
      this.setState({name: data.name, title: data.title, blog: data.blog}))
  }

  render() {
    return (
      <div className="container">
        <h1 className="blog-title">{this.state.title}</h1>
        <h4 className="blog-name">{this.state.name}</h4>
        <p>{this.state.blog}</p>
      </div>
    )
  }
}

export default ShowPost;
