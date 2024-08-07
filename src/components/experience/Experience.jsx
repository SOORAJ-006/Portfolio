import React from "react";
import {Card , Button } from 'react-bootstrap'
import "./Experience.css";
import "../style.css";
import "../media.css";
import checkMark from "../../assets/checkmark.png";
import arrow from "../../assets/arrow.png";
import mongo from '../../assets/Mongo.png'
import MediaCard from "../cards/MediaCard";
import {skills} from '../../data/skillData'


const Experience = () => {
  console.log(skills);
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title mb-5">Skills</h1>
      <div className="experience-details-container">


      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "#projects")}
      />

      <div className="row justify-content-center">

        {skills.map((skill) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-5 skill_card">
          <MediaCard skill={skill}/>
          </div>

        ))}

      </div>
    </section>
  );
};

export default Experience;
