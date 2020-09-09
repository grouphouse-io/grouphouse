import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Import all styles
import './styles/App.css';
import './styles/Sidebar.css';
import './styles/Topbar.css';

import { Client } from './client';
import { Topbar } from './ui/containers/Topbar';
import { WorkspaceRow } from './ui/containers/WorkspaceRow';
import { CreateView } from './ui/components/reuseable/CreateView';

type StateType = {client: Client};
class App extends React.Component<any, StateType> {
  constructor(props: any) {
    super(props);

    const host = process.env.REACT_APP_HOST || "localhost";
    const protocol = "http";
    const port = 8000;
    this.state = {
      client: new Client(protocol, host, port), // Public API IP:Port
    };
  }

  render() {
    // Pass client to all routes/components that need to make API requests
    const { client } = this.state;
    return (
      <div className="app">
        <Topbar />
        <WorkspaceRow client={client}>
          <Router>
            <Switch>
              <Route path="/silos/create">
                <CreateView client={client} type={"Silos"} />
              </Route>
              <Route path="/forums/create">
                <CreateView client={client} type={"Forums"} />
              </Route>
            </Switch>
          </Router>
        </WorkspaceRow>
      </div>
    );
  }
}

export default App;
