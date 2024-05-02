import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaMedium } from "react-icons/fa";
import { AiFillMediumCircle } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";

import { MdEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

const BoxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Cloud = () => {
  const fillOpacity = 0.7;
  return (
    <svg viewBox="-20 20 150 100">
      <defs>
        <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="0%"
            style={{ stopColor: "#f00658", stopOpacity: fillOpacity }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "#f06", stopOpacity: fillOpacity }}
          />
        </linearGradient>
      </defs>
      <path
        fill="url(#pinkGradient)"
        d="M 25,60 a 20,20 1 0,0 0,40 h 50 a 20,20 1 0,0 0,-40 a 10,10 1 0,0 -15,-10 a 15,15 1 0,0 -35,10 z"
      />
    </svg>
  );
};

export default function HomePage() {
  return (
    <div>
      <Grid container>
        <Grid item xs={3}>
          <Box border={0}>
            <Cloud></Cloud>
          </Box>
          <Box minHeight="10vh"></Box>
          <Box sx={BoxStyle} width="90%">
            <Typography
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "20pt",
                fontWeight: "800",
                color: "#f00658",
              }}
            >
              {"< Contacts >:"}
            </Typography>
          </Box>
          <Box ml={8} mt={4}>
            <Typography
              sx={{
                fontFamily: '"Courier Prime", "Courier", monospace',
                fontSize: "13pt",
              }}
            >
              {
                <GitHubIcon
                  sx={{ position: "relative", top: "3pt" }}
                ></GitHubIcon>
              }
              :{" "}
              <a
                href="https://github.com/ROLFFFX"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f00658", textDecoration: "underline" }}
              >
                ROLFFFX
              </a>
            </Typography>
          </Box>
          <Box ml={8}>
            <Typography
              sx={{
                fontFamily: '"Courier Prime", "Courier", monospace',
                fontSize: "13pt",
              }}
            >
              {
                <AiFillMediumCircle
                  style={{ position: "relative", top: "3pt" }}
                  size="25px"
                ></AiFillMediumCircle>
              }
              :{" "}
              <a
                href="https://medium.com/@yshi373"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f00658", textDecoration: "underline" }}
              >
                Rolf Shi
              </a>
            </Typography>
          </Box>

          <Box ml={8}>
            <Typography
              sx={{
                fontFamily: '"Courier Prime", "Courier", monospace',
                fontSize: "13pt",
              }}
            >
              {
                <CiLinkedin
                  style={{ position: "relative", top: "3pt" }}
                  size="25px"
                ></CiLinkedin>
              }
              :{" "}
              <a
                a
                href="https://www.linkedin.com/in/rolf-shi/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f00658", textDecoration: "underline" }}
              >
                Rolf Shi
              </a>
            </Typography>
          </Box>
          <Box ml={8}>
            <Typography
              sx={{
                fontFamily: '"Courier Prime", "Courier", monospace',
                fontSize: "13pt",
              }}
            >
              {
                <MdEmail
                  style={{ position: "relative", top: "3pt" }}
                  size="25px"
                ></MdEmail>
              }
              : yshi373@emory.edu
            </Typography>
          </Box>
          <Box ml={8}>
            <Typography
              sx={{
                fontFamily: '"Courier Prime", "Courier", monospace',
                fontSize: "13pt",
              }}
            >
              {
                <CiPhone
                  style={{ position: "relative", top: "3pt" }}
                  size="25px"
                ></CiPhone>
              }
              : +(1)857-498-2756
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box sx={BoxStyle} minHeight="16vh">
            <Box>
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "20pt",
                  fontWeight: "800",
                  color: "#f00658",
                }}
              >
                {"< ROLF'S BIO >:"}
              </Typography>
            </Box>
          </Box>
          <Box border={0}>
            <Typography
              sx={{
                fontFamily: '"Courier Prime", "Courier", monospace',
                fontSize: "13pt",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Hello.</span> I'm{" "}
              <span style={{ color: "#f00658" }}>Yuxuan(Rolf) Shi</span>, a
              junior at Emory University majoring in Computer Science. I am a
              full-stack{" "}
              <span style={{ color: "#f00658" }}>software developer</span> who{" "}
              <span style={{ color: "#f00658" }}>designs</span>. In addition,
              I'm also interested in AI/ML & Creative Coding.
              <br></br>
              <br></br>
              Thourghout the past few months in 2024, I've explored various
              dimensions and modalities of{" "}
              <span style={{ color: "#f00658" }}>
                Human-Computer Interaction
              </span>{" "}
              through various projects. This website serves to showcase each of
              these projects,where you can find in greater detail in{" "}
              <span
                style={{ color: "#f00658", textDecoration: "underline" }}
                onClick={() => {
                  alert("hi");
                }}
              >
                "Personal Projects"
              </span>{" "}
              and{" "}
              <span
                style={{ color: "#f00658", textDecoration: "underline" }}
                onClick={() => {
                  alert("hi");
                }}
              >
                "Group Projects"
              </span>{" "}
              tab.
              <br></br>
              <br></br>During my free time, I play guitar and enjoys all kinds
              of music. Check out{" "}
              <a
                href="https://showstart-release.bandcamp.com/track/--391"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f00658", textDecoration: "underline" }}
              >
                my band
              </a>{" "}
              if you are intersted!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={BoxStyle} width="100%">
            <Typography
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "20pt",
                fontWeight: "800",
                color: "#f00658",
              }}
              mt={2}
            >
              {"< My Cat >:"}
            </Typography>
          </Box>
          <Box sx={BoxStyle} width="100%">
            <img
              src="/cat.jpg"
              alt="Cat"
              style={{ width: "300px", height: "auto" }}
            />
          </Box>
          <Box sx={BoxStyle} width="100%">
            <Typography
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "20pt",
                fontWeight: "800",
                color: "#f00658",
              }}
              mt={5}
            >
              {"< Me >:"}
            </Typography>
          </Box>
          <Box sx={BoxStyle} width="100%">
            <img
              src="/me.jpg"
              alt="Me"
              style={{ width: "300px", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}