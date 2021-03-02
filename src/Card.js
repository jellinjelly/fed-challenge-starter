import React from "react";
import { Card as BsCard, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faRunning, faBars } from "@fortawesome/free-solid-svg-icons";

const Card = function (props) {
  const { data, cardId, handleCardClick } = props;

  return (
    <BsCard id={cardId} onClick={handleCardClick}>
      <BsCard.Img
        className="fitUi-card-img"
        variant="top"
        src={`images/${data.img}`}
        alt={data.imgAlt}
      />
      {data.videoCt && (
        <div className="fitUI-overlay-container">
          <div className="fitUi-overlay-content">
            <p className="fitUi-overlay-ct">{data.videoCt}</p>
            <p className="fitUi-overlay-text">WORKOUTS</p>
            <p className="fitUi-overlay-icon">
              <FontAwesomeIcon icon={faBars} />
            </p>
          </div>
          <div className="fitUi-img-overlay"></div>
        </div>
      )}
      <BsCard.Body className="fitUi-card-body">
        <Row>
          <Col xs={9}>
            <BsCard.Title as="h4" className="fitUi-card-title">
              {data.heading}
            </BsCard.Title>
          </Col>
          <Col xs={3}>
            <BsCard.Img
              className="fitUi-thumbnail"
              as="img"
              src={`images/${data.avatar}`}
              alt={data.avatarAlt}
            />
          </Col>
          <Col>
            {data.time && data.miles && (
              <div className="fitUi-metrics">
                <span>
                  <FontAwesomeIcon icon={faClock} />
                </span>
                <span className="pr-2 pl-1">{data.time}</span>
                <span>
                  <FontAwesomeIcon icon={faRunning} />
                </span>
                <span className="pr-2 pl-1">{data.miles}</span>
              </div>
            )}
          </Col>
        </Row>
        <button className="btn-view-details" variant="primary">
          VIEW DETAILS
        </button>
      </BsCard.Body>
    </BsCard>
  );
};

export default Card;
