import React from 'react';

type PropsType = {};
export class Storyline extends React.Component<PropsType> {
  render() {
    return (
      <div className="storyline-container">
        <div className="image-wrapper">
          <div className="storyline-intro-image" />
        </div>
        <div className="storyline-intro-image-text storyline-intro-centered">
          Change starts at home.
        </div>
        <div className="storyline-intro-image-text-blur storyline-intro-centered">
        </div>
        <div className="transition-block"></div>
        <div className="storyline-section-dark">
          <div className="storyline-section-title">
            <div id="problem"> Problem </div>
          </div>
          <div className="storyline-section-hook">
            American community is disappearing.
          </div>
            <img src="/images/grouphouse-entrance-nighttime-min.jpg" className="storyline-image-left" alt="Gloom"></img>
            <div className="storyline-section-text-right">
              There is a shared but divided struggle of feeling unsupported, unsafe, alone.
              Lack of community has raised the stakes in romantic relationships, marriage, and family, placing extraordinary and unhealthy levels of stress on these relations.
            </div>
        </div>
        <div className="transition-skew-right-flush-top"></div>

        <div className="storyline-section-light">
          <div className="storyline-section-title">
            <div id="mission"> Mission </div>
          </div>
          <div className="storyline-section-hook">
            Rebuild safety by rebuilding community.
          </div>
          <img src="/images/grouphouse-flower-min.jpg" className="storyline-image-right"alt="Hope"></img>
          <div className="storyline-section-text-left">
            Home means safety. Our mission is to rebuild community through intentional group-living, so that you can find your people and your home.
          </div>
        </div>
        <div className="transition-skew-left-flush-bottom"></div>

        <div className="storyline-section-dark">
          <div className="storyline-section-title">
            <div id="method"> Method </div>
          </div>
          <div className="storyline-section-hook">
            We build tools for better living.
          </div>
          <img src="/images/grouphouse-porch-daytime-min.jpg" className="storyline-image-left" alt="Porch"></img>
          <div className="storyline-section-text-right">
            Group-living requires skin in the game.
            It's hard. But you get out what you put in. We crowdsource tools to make it easier.
          </div>
        </div>


        <div className="transition-skew-right-flush-top"></div>
        <div className="storyline-section-light">
          <div className="storyline-section-title">
            <div id="incentives"> Incentives </div>
          </div>
          <div className="storyline-section-hook">
            Practice what you preach.
          </div>
          <img src="/images/grouphouse-peaches-min.jpg" className="storyline-image-right"alt="Peaches"></img>
          <div className="storyline-section-text-left">
            We must be beholden to one stakeholder group above else. Not investors. Not shareholders. Our community. Our homes. We're community-powered.
          </div>
        </div>
        <div className="transition-skew-left-flush-bottom"></div>


        <div className="storyline-section-dark">
          <div className="storyline-section-title">
            <div id="code"> Code </div>
          </div>
          <img src="/images/grouphouse-porch-nighttime-min.jpg" className="storyline-image-left" alt="Porch at Night"></img>
          <div className="storyline-section-text-right">
            Group-living requires skin in the game.
            It's hard. But you get out what you put in. We crowdsource tools to make it easier.
          </div>
        </div>

        <div className="community-section-transition"></div>
        <div className="storyline-section-grey">
          
            <div className='community-image-wrapper'>
              <div className='community-image'></div>
            <div className='community-centered community-image-text'>
              <div className='community-section-hook'>The smallest steps are the bravest.</div>
              Join the <a className="embedded-link" href={"https://discord.gg/SejPVdUnM3"}>server</a>,
              contribute to the <a className="embedded-link" href={"https://github.com/grouphouse-io/grouphouse"}>code</a>,
              fork the <a className="embedded-link" href={"https://github.com/stevenelleman/tandem"}>parent</a>.
            </div>
            <div className='community-centered community-image-text-blur'></div>
          </div>
        </div>
      </div>
    );
  }
}
