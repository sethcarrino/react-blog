import React, {Component} from 'react';

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      title: '',
      blog: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBlogChange = this.handleBlogChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  };

  handleTitleChange = (event) => {
    this.setState({title: event.target.value});
  };

  handleBlogChange = (event) => {
    this.setState({blog: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let listItem = JSON.stringify(this.state);

    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/', {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => this.props.history.push('/'))

    .catch(error => console.log('Booo'));

    this.setState({name:'', title:'', blog:''});
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="container">
        <div className="form-group">
          <label htmlFor="name">Author:</label>
          <input className="form-control" name="name" type="text" value={this.state.name}onChange={this.handleNameChange} />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input className="form-control" name="title" type="text" value={this.state.title}onChange={this.handleTitleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="blog">Write your blog...</label>
          <textarea className="form-control" rows="10" name="blog" type="text" value={this.state.blog}onChange={this.handleBlogChange} />
        </div>

        <button type="submit" className="btn btn-primary form-control" href="/">Submit</button>
      </form>
    )
  }
}

export default CreatePost;
