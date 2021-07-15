import React from 'react';

export class Topbar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <div className="header-logo">
          {/*<img src="grouphouse-logo.png" className="header-logo-img"/>*/}
          <div className="header-logo-title">Grouphouse</div>
        </div>
        <div className="header-links">
          <div className="header-link">
            <a href="#problem">Problem</a>
          </div>
          <div className="header-link">
            <a href="#approach">Approach</a>
          </div>
          <div className="header-link">
            <a href="#values">Values</a>
          </div>
          <div className="header-link">
            <a href="#code">Code</a>
          </div>
          <div className="header-link header-emphasis">
            <a href="#community">Join the Community</a>
          </div>
        </div>
      </div>
    );
  }
}
