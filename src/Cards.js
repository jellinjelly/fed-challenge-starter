import React, { useState } from "react";
import Card from "./Card";
import { Row, Col } from "react-bootstrap";
import { initialData } from "./initialData";
import "./card.css";

const Cards = function (props) {
  const [activeCard, setActiveCard] = useState(-1);

  function handleCardClick(e) {
    if (activeCard >= 0) {
      document.getElementById(activeCard).classList.remove("active");
      document
        .getElementById(activeCard)
        .querySelector(".btn-view-details")
        .classList.remove("active");
    }
    setActiveCard(e.currentTarget.id);
    e.currentTarget.classList.add("active");
    e.currentTarget.querySelector(".btn-view-details").classList.add("active");
  }

  let rows = [];
  let row = [];
  initialData.forEach((data, idx) => {
    let col = (
      <Col xs={3} className="fitUi-card-col">
        <Card
          handleCardClick={handleCardClick}
          key={data.title}
          data={data}
          cardId={idx}
        ></Card>
      </Col>
    );
    row.push(col);
    if ((idx + 1) % 4 === 0) {
      rows.push(row);
      row = [];
    }
  });
  rows = rows.map((row) => <Row>{row}</Row>);

  return <section className="card-list">{rows}</section>;
};

export default Cards;
