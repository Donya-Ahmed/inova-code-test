import React from "react";
import Box from "@mui/material/Box";
import styles from "./HeroSection.module.css";
import Slider from "react-slick";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function HeroSection() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Box className={styles.hero}>
      <Box className={styles.title}>
      <Typography component="h3" sx={{color:"white",fontSize:"24px",fontWeight:500,textAlign:"center"}}><em>TRAINING COURSES, BOOKS</em></Typography>
        <Typography component="h1" sx={{color:"white",fontSize:"40px",fontWeight:700,textAlign:"center",width:"80%"}}><em>MAKE YOUR HEALTHY BODY STRONG IS OUR RESPONSIBILITY</em></Typography>
        <Button className={styles.btnPay}>
            About Us
        </Button>
      </Box>
      </Box>
    </>
  );
}
