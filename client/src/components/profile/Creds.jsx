import React, { Component } from "react";
import Moment from "react-moment";
import resume from "../../doc/David Mayes Resume FSWD (2).pdf";
import myImg from "../../img/david.jpg";

class ProfileCreds extends Component {
  render() {
    const { education } = this.props;

    const eduItems = education.map(edu => (
      <li key={edu._id} className="p-3 mb-2 text-center">
        <h4>{edu.school}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
          {edu.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </p>
        <p>{edu.fieldofstudy}</p>
        <p>
          {edu.description === "" ? null : (
            <span>
              <strong>Description: </strong> {edu.description}
            </span>
          )}
        </p>
        <hr />
      </li>
    ));
    return (
      <section id="experience" className="service-area section-gap bg">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-6 mt-2">
              <h3 className="text-center text-info">My Education</h3>
              {eduItems.length > 0 ? (
                <ul className="list-group mt-3">{eduItems}</ul>
              ) : (
                <p className="text-center">No Education Listed</p>
              )}
            </div>

            <div className="col-md-6 mt-2">
              <img className="img-fluid rounded mb-3" src={myImg} alt="" />
            </div>
          </div>
          <div className=" text-center">
						<a className="btn btn-info badge-pill shadow p-3" href={resume} download="David_Mayes_Resume">
							<i className="fas fa-file-download mr-2" />
							Download Resume/CV
						</a>
					</div>
          
        </div>
      </section>
    );
  }
}

export default ProfileCreds;
