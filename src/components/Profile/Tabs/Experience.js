import React from 'react';
import profile from '../../../data/profile';
import ExperienceCard from './ExperienceCard.js';

import '../../../Presentational/Experience.css';

class Experience extends React.Component {
  render() {
    return (
      <div>
        <div style={{ height: '15px' }}>
          <hr className="my-2" />
        </div>
        <div>
          {profile.experiences.map(function (experience, i) {
            return <ExperienceCard experience={experience} />;
          })}
        </div>
      </div>
    );
  }
}

export default Experience;
