import React, { useState } from "react";

const projects = {
  Photoshop: [
    {
      image: "images/1.jpg",
    },
    {
      image: "images/2.jpg",
    },
  ],
  Illustrator: [
    {
      image: "images/3.jpg",
    },
    "4",
  ],
  Other: ["5", "6"],
};

export default function Work() {
  const [activeCat, setActiveCat] = useState("all");
  return (
    <div className="dad">
      <h2>Work</h2>
      <div className="cards">
        {Object.keys(projects).map((e, i) =>
          Object.keys(projects[e]).map((k, j) => (
            <WorkCard data={projects[e][k]} key={j} />
          ))
        )}
      </div>
      <style jsx>{`
        .dad {
          margin: 40px auto;
        }
        h2 {
          margin: 30px auto;
          font-size: 2.2em;
          text-align: center;
        }
        .cat-select {
          margin: 20px 0;
          display: flex;
          flex-wrap: wrap;
        }
        h4 {
          margin: 0;
        }
        .cat-select .cat {
          flex: 1;
          border: 1px solid transparent;
          opacity: 0.9;
          margin: 4px;
          text-align: center;
          font-size: 1.4em;
          text-transform: capitalize;
          cursor: pointer;
          transition-duration: 300ms;
          padding: 30px 20px;
          color: var(--dark);
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 140px;
        }
        .cat-select .cat:hover {
          transform: scale(1.1);
        }
        .cat-select .cat.active {
          opacity: 1;
          transition-duration: 0ms;
          transform: scale(1);
          border-color: var(--primary);
          color: var(--primary);
        }
        .cards {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
}

const WorkCard = (props) => {
  let data = props.data;
  return (
    <div className="card">
      <img src={data.image} alt={data.title} />
      <style jsx>{`
        .card {
          width: 47%;
          min-height: 300px;
          max-height: 600px;
          margin: 0 auto;
          margin-bottom: 40px;
          text-decoration: none;
          transition-duration: 200ms;
        }
        .card:hover {
          transform: scale(0.95);
        }
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
        @media screen and (max-width: 800px) {
          .card {
            width: 96%;
            max-height: 900px;
          }
          .right img {
            height: 100%;
            max-height: 600px;
          }
        }
      `}</style>
    </div>
  );
};
