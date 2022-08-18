import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>
          {planets.map((eachPlanet) => (
            <PlanetCard
              key={ eachPlanet.name }
              planetName={ eachPlanet.name }
              planetImage={ eachPlanet.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
