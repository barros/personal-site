import React from 'react';
import { Media } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

class ExperienceCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getDuration = duration => {
    const years = parseInt(duration / 12);
    const months = duration > 12 ? duration % 12 : duration;
    const yearsText = years > 0 ? years + ' year' + (years > 1 ? 's' : '') : '';
    const monthsText = months > 0 ? months + ' month' + (months > 1 ? 's' : '') : '';
    return months === 0 ? yearsText : years >= 1 ? `${yearsText} and ${monthsText}` : monthsText;
  };

  render() {
    const experience = this.props.experience;
    const roles = experience.roles;
    moment.locale('en');
    let totalDuration = 0;
    let presentDate;
    roles.forEach(role => {
      if (role.internship) {
        if (role.period === 'Summer') {
          totalDuration += role.year.length * 3;
        }
      } else {
        if (role.currentJob) {
          presentDate = moment(role.startDate);
        } else {
          const startDate = moment(role.startDate);
          const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
          totalDuration += timeEnd.diff(startDate, 'months');
        }
      }
    });

    if (presentDate) {
      const currentDate = moment(new Date());
      totalDuration += currentDate.diff(presentDate, 'months');
    }

    let companyLogo =
      experience.logo === 'currentJob' ? (
        <FontAwesomeIcon className="expLogo " color="grey" icon={faBriefcase} />
      ) : (
        <Media className="expLogo" object src={this.props.logo} alt={experience.companyName} />
      );

    return (
      <div
        style={{
          backgroundColor: 'white',
          borderTopLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          paddingLeft: '15px',
          paddingRight: '15px',
          paddingTop: '25px',
          paddingBottom: '15px',
          marginBottom: '30px',
          boxShadow: '10px 10px 20px #888888'
        }}
      >
        <Media>
          <Media left top target="_blank" href={experience.url}>
            {companyLogo}
          </Media>
          <Media body>
            <Media heading>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={experience.url}
                style={{ fontFamily: 'Quicksand', color: 'black' }}
              >
                {experience.companyName}
              </a>
              <span className="jobTotalDuration">{this.getDuration(totalDuration)}</span>
            </Media>
            <hr className="my-2" />
            {roles.map(function (role, i) {
              const startDate = moment(role.startDate);
              const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
              let tasks = [];
              if (role.tasks) {
                role.tasks.forEach(task => {
                  tasks.push(task);
                });
              }
              let line = i !== roles.length - 1 ? <hr className="my-2" /> : '';
              let period;
              if (role.internship) {
                period = `${role.period} `;
                role.year.forEach((year, i) => {
                  if (i === 0) {
                    period += year;
                  } else {
                    period += `, ${year}`;
                  }
                });
              } else {
                period = `${startDate.format('MMM YYYY')} - ${
                  role.currentJob ? 'Present' : timeEnd.format('MMM YYYY')
                }`;
              }
              return (
                <div key={i}>
                  <h5 style={{ fontFamily: 'Poppins' }} className="jobTitle">
                    {role.title}
                  </h5>
                  <span className="jobDuration">{period}</span>
                  <span className="jobLocation">{role.location}</span>
                  {tasks.map((task, i) => {
                    return <div style={{ fontFamily: 'Poppins' }}>{task}</div>;
                  })}
                  {line}
                </div>
              );
            })}
          </Media>
        </Media>
      </div>
    );
  }
}

export default ExperienceCard;
