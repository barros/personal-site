import React from 'react';
import { Media } from 'reactstrap';
import moment from 'moment';

class ExperienceCard extends React.Component {
  constructor(props) {
    super(props)
  }

  getDuration = (duration) => {
    const years = parseInt(duration / 12);
    const months = (duration > 12)? duration % 12 : duration;
    const yearsText = (years > 0 ? years + " year" + (years > 1? "s": "") : "");
    const monthsText = (months > 0? months + " month" + (months > 1? "s": "") : "");
    return (months === 0 ? yearsText : (years >= 1 ? (`${yearsText} and ${monthsText}`) : monthsText));
  }


  render() {
    const experience = this.props.experience;
    const roles = experience.roles;
    moment.locale('en');
    const totalDuration = roles.reduce(function (cnt, role) {
      const startDate = moment(role.startDate);
      const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
      const duration = moment.duration(timeEnd.diff(startDate));
      return Number(cnt) + Number(duration.asMonths().toPrecision(1));
    }, 0);
    return (
      <div style={{backgroundColor: 'white', borderTopLeftRadius: '10px', borderBottomRightRadius: '10px', padding: '15px', marginBottom: '30px', boxShadow: '10px 10px 20px #888888'}}>
        <Media>
          <Media left top href={experience.url}>
            <Media className="expLogo" object src={experience.logo} alt={experience.companyName}/>
          </Media>
          <Media body>
            <Media heading>
              <a href={experience.url} style={{color: "black"}}>{experience.companyName}</a>
              <span className="jobTotalDuration">{ this.getDuration(totalDuration) }</span>
            </Media>
            {roles.map(function (role, i) {
              const startDate = moment(role.startDate);
              const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
              const duration = timeEnd.diff(startDate, 'months');
              let tasks = []
              role.tasks.forEach(task => {
                tasks.push(task)
              });
              let line = ((i !== roles.length-1) ? <hr className="my-2" /> : '');

              return <div key={i}>
                <h5 className="jobTitle">{role.title}</h5>
                <span className="jobDuration">
                  {startDate.format('MMM YYYY')} - {role.currentJob ? 'Present' : timeEnd.format('MMM YYYY')} {() => this.getDuration(duration)}
                </span>
                <span className="jobLocation">{ role.location }</span>
                {
                  tasks.map((task, i) => {
                    return (<div>{ task }</div>);
                  })
                }
                {line}
              </div>
            })}
          </Media>
        </Media>
      </div>
    );
  }
}

export default ExperienceCard;