import React from 'react';
import profile from '../../../data/profile';
import ExperienceCard from './ExperienceCard.js';

import bcGetLogo from '../../../images/bcGetLogo.png';
import crbLogo from '../../../images/cristoReyLogo.png';

import '../../../Presentational/Experience.css';

let companyLogosObj = { bcGetLogo, crbLogo };

class Experience extends React.Component {
  render() {
    console.log("companyLogosObj['bcGetLogo']", companyLogosObj['bcGetLogo']);
    return (
      <div>
        <div style={{ height: '15px' }}>
          <hr className="my-2" />
        </div>
        <div>
          {profile.experiences.map(function (experience, i) {
            let logo = experience.logo.startsWith('http')
              ? experience.logo
              : companyLogosObj[experience.logo];
            return <ExperienceCard experience={experience} logo={logo} />;
          })}
        </div>
      </div>
    );
  }
}

export default Experience;
