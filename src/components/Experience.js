import React from "react";
import { Container, Row, Col } from "reactstrap";
import profile from "../data/profile";
import moment from "moment";
import { Media } from "reactstrap";

function getDuration(duration) {
  const years = parseInt(duration / 12);
  const months = (duration > 12)? duration % 12 : duration;
  const yearsText = (years > 0 ? years + " year" + (years > 1? "s": "") : "");
  const monthsText = (months > 0? months + " month" + (months > 1? "s": "") : "");
  return (months === 0 ? yearsText : (years >= 1 ? (`${yearsText} and ${monthsText}`) : monthsText));
};

class Experience extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col>
          {profile.experiences.map(function (experience, i) {
            moment.locale('en');

            // const totalDuration = experience.roles.reduce(function (cnt, role) {
            //   console.log(`experience: ${role.title}`)
            //   const startDate = moment(role.startDate);
            //   console.log(`startDate: ${startDate}`)
            //   const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
            //   console.log(`timeEnd: ${timeEnd}`)
            //   const duration = moment.duration(timeEnd.diff(startDate));
            //   console.log(`TEST FOR MONTHS: ${timeEnd.diff(startDate, 'months')}`)
            //   // console.log(`duration: ${duration}`)
            //   // console.log(`duration.asMonths().toPrecision(1) = ${Number(duration.asMonths().toPrecision(1))}`)
            //   return Number(cnt) + Number(duration.asMonths().toPrecision(1));;
            // }, 0);
            const totalDuration = experience.roles.reduce(function (cnt, role) {
              const startDate = moment(role.startDate);
              const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
              const duration = moment.duration(timeEnd.diff(startDate));
              return Number(cnt) + Number(duration.asMonths().toPrecision(1));
            }, 0);

            return (
              <div key={i}>
                <Media>
                  <Media left top href={experience.url}>
                    <Media object src={experience.logo} alt={experience.companyName}/>
                  </Media>
                  <Media body>
                    <Media heading>
                      <a href={experience.url}>{experience.companyName}</a>
                      <span className="jobTotalDuration">{getDuration(totalDuration)}</span>
                    </Media>

                    {experience.roles.map(function (role, i) {
                      const startDate = moment(role.startDate);
                      const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
                      const duration = timeEnd.diff(startDate, 'months');

                      return <div key={i}>
                        <h5>{role.title}</h5>
                        <span
                          className="jobDuration">{startDate.format('MMM YYYY')} - {role.currentJob ? 'Present' : timeEnd.format('MMM YYYY')} ({getDuration(duration)})</span>
                        <span className="jobLocation">{role.location}</span>
                        <p className="jobDescription">{role.description}</p>
                      </div>
                    })}
                  </Media>
                </Media>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  }
}

export default Experience;