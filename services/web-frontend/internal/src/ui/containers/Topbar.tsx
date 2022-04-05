import React from 'react';

export class Topbar extends React.Component {
  render() {
    const origin = window.origin;
    return (
      <div className="topbar">
        <div className="header-logo">
          <img src="/images/grouphouse-logo.png" alt="Mushroom Header"className="header-logo-img"/>
        </div>
        <div className="header-logo-title">Grouphouse</div>
        <div className="header-links">
          <a className="header-link" href={`${origin}#problem`}>Problem</a>
          <a className="header-link" href={`${origin}#mission`}>Mission</a>
          <a className="header-link" href={`${origin}#method`}>Method</a>
          <a className="header-link" href={`${origin}#incentives`}>Incentives</a>
          <a className="header-link" href={`${origin}#code`}>Code</a>
          <a className="header-link header-emphasis" href={`${origin}#community`}>Join the Community</a>
        </div>
      </div>
    );
  }
}
