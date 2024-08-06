import React from "react";
import "./ProjectCard.css";
import { Button, Card } from "react-bootstrap";

const ProjectCard = ({ image , git, live }) => {

  const handleGitClick = () => {
    window.open(git, "_blank");
  }

  const handleLiveClick = () => {
    window.open(live ,"_blank" );
  }
  return (
    <>
      <Card className="project_card" style={{ width: "30rem" }}>
        <Card.Img variant="top" src={image} />

        <div className="project_card_overlay d-flex justify-content-center align-items-center gap-4">
 
            <button onClick={handleGitClick} className="btn btn-dark btn_overlay" type="submit">GitHub</button>
            <button onClick={handleLiveClick} className="btn btn-dark btn_overlay" type="submit">Live</button>

        </div>
      </Card>

      
    </>
  );
};

export default ProjectCard;
 