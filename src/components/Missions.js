import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <section className="missions">
          {missions.map((eachMission) => (
            <MissionCard
              key={ eachMission.name }
              name={ eachMission.name }
              year={ eachMission.year }
              country={ eachMission.country }
              destination={ eachMission.destination }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Missions;
