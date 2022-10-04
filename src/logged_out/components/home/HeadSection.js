import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography, Card, Button, Hidden, Box, CardMedia } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import WaveBorder from "../../../shared/components/WaveBorder";
//import ZoomImage from "../../../shared/components/ZoomImage";
import useMediaQuery from "@mui/material/useMediaQuery";

//import { Banner, StaticBanner } from 'material-ui-banner';

//import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import "swiper/css/zoom";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

//import "./styles.css";
// import required modules
import SwiperCore, { Zoom, Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { color } from "@mui/system";

SwiperCore.use([Autoplay, Pagination])

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[0],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    background: 'linear-gradient(-45deg,#e73c7e, #e73c7e,  #e73c7e)',
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("xl")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    //backgroundColor: theme.palette.secondary.main,
    background: 'linear-gradient(-45deg,#e73c7e, #e73c7e,  #e73c7e)',
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    //boxShadow: theme.shadows[4],
  },
  container: {
    width: 1400,
    marginLeft: -10,

    marginTop: theme.spacing(-12),
    marginBottom: theme.spacing(11),
    [theme.breakpoints.down("lg")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
      background: 'linear-gradient(-45deg,#e73c7e, #e73c7e,  #e73c7e)'
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
    backgroundColor: theme.palette.wavefrontColor.main,
  },
  mySwiper: {
    height: 300
  },
});

function HeadSection(props) {
  const { classes, theme } = props;
  const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Fragment>

      <div className={classNames("lg-p-top", classes.wrapper)}>
        {/*   <div className={classNames("container-fluid", classes.container)}> */}
        <Box display="flex" justifyContent="center" className="row">
          <Card
            className={classes.card}
            data-aos-delay="200"
            data-aos="zoom-in"
          >
            <div className={classNames(classes.containerFix, "container")}>
              <Box justifyContent="space-between" className="row">

                {/* <Hidden mdDown> */}
                  <Grid item md={6}>
                    <CardMedia component="img"
                      image={`${process.env.PUBLIC_URL}/images/logged_out/hero-img.png`}
                      className={classes.image}
                      alt="hero image"
                    />
                  </Grid>
                {/* </Hidden> */}
                <Grid item xs={12} md={5}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    style={{ marginTop: 80 }}
                  >
                    <Box mb={4}>
                      <Typography variant={isWidthUpLg ? "h3" : "h4"}>
                        <strong style={{ fontSize: 42, color: '#ffffff' }}> We are Customer-Centric</strong>
                      </Typography>
                    </Box>
                    <div>
                      <Box mb={2}>
                        <Typography
                          variant={isWidthUpLg ? "h6" : "body1"}
                          color="#ffffff"
                        >
                          We make sure everything we do is through the lens of customers. The goal for customers is to make sure it has superb functionality.
                          {/* <p> "not only have a visually attractive product but also" We accomplish this by building feature-rich, engaging, and user-friendly mobile app and web solutions consisting of intuitive UX, present-day technologies and tools and best-in-class interfaces</p> */}
                        </Typography>
                      </Box>
                     
                    </div>
                  </Box>
                </Grid>

              </Box>
            </div>
          </Card>
        </Box>
      </div>
      {/*</div> */}
      <WaveBorder
        //upperColor={theme.palette.secondary.main}
        upperColor={theme.palette.wavefrontColor.main}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />

    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(HeadSection);
