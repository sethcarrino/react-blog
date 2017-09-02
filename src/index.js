import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

// Import Components
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import ShowPost from './components/ShowPost';

// Import Router
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/show/:id" component={ShowPost} />
      <Route path="/show" component={PostList} />
      <Route path="/create" component={CreatePost} />
    </Switch>
  </BaseLayout>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
