import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div className="missions" data-testid="missions">
        <Title headline="Missões" />
        {missions
          .map((mission) => <MissionCard key={ mission.name } { ...mission } />)}
      </div>
    );
  }
}

export default Missions;
