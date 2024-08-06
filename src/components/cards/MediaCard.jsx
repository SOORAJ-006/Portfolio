import * as React from "react";
import "./MediaCard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import css from "../../assets/css.png";

export default function MediaCard({skill}) {
  return (
    <Card
      sx={{
        maxWidth: 245,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        transition: "transform 0.3s ease", 
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
      key={skill.id}
    >
      <CardMedia
        sx={{ height: 60, width: 60, marginBottom: 2 }}
        image={skill.image}
        title="green iguana"
      />
      <CardContent sx={{ padding: 0, paddingBottom: 0 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ padding: 0, paddingBottom: 0 }}
          align="center"
        >
          {skill.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
