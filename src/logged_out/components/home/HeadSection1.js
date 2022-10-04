import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography, Card, Button, Hidden, Box, CardMedia } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import WaveBorder from "../../../shared/components/WaveBorder";
import ZoomImage from "../../../shared/components/ZoomImage";
import useMediaQuery from "@mui/material/useMediaQuery";

//import { Banner, StaticBanner } from 'material-ui-banner';

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import "swiper/css/zoom";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import SwiperCore, { Zoom, Navigation, Pagination, Scrollbar, Autoplay } from "swiper";

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
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
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
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
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
      {/* <div className={classNames("lg-p-top", classes.wrapper)}> 
        <div className={classNames("container-fluid", classes.container)}>*/}
      {/* <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            > */}
      {/* <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className="row"> */}
      <Grid item xs={12} md={12}>
        {/* SwiperSlide start */}

        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            position: "relative",
          }}


          mousewheel={{
            forceToAxis: true,
          }}



          autoplay={{ delay: 5000 }}
          speed={1500}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}

          zoom={false}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation, Pagination, Zoom]}

        >
          <SwiperSlide>
            <div className="swiper-zoom-container" style={{ zIndex: 9999, color: "#000" }}>

              <div style={{ position: "relative" }}>
                <CardMedia component="img" image={"/images/logged_out/christopher-gower-m_HRfLhgABo-unsplash.jpg"} title="" alt="" />
                <Grid container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  width="70%"
                  marginLeft="15%"
                  marginTop="-700px">
                  <h1 style={{ opacity: 0.7, backgroundColor: "rgb(228, 231, 234)", borderRadius: "10px", position: "obsulute", padding: "1%" }}>INNOVATIVE AND CUSTOMER-CENTRIC</h1>
                  <p style={{ opacity: 0.9, backgroundColor: "rgb(183, 46, 167)", color: "#fff", borderRadius: "10px", position: "obsulute", padding: "1.2%" }}> We make sure everything we do is through the lens of customers. The goal for customers is to not only have a visually attractive product but also make sure it has superb functionality. We accomplish this by building feature-rich, engaging, and user-friendly mobile app and web solutions consisting of intuitive UX, present-day technologies and tools and best-in-class interfaces.</p>
                </Grid>
                <CardMedia />
              </div>

              {/* <img src={`${process.env.PUBLIC_URL}/images/logged_out/corinne-kutz-tMI2_-r5Nfo-unsplash.jpg`} /> */}
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="swiper-zoom-container">
              <div style={{ position: "relative" }}>
                <CardMedia component="img" image={"/images/logged_out/christopher-gower-m_HRfLhgABo-unsplash.jpg"} title="" alt="" />
                <Grid container>


                </Grid>
                <CardMedia />
              </div>

            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="swiper-zoom-container">
              <img src={`${process.env.PUBLIC_URL}/images/logged_out/domenico-loia-EhTcC9sYXsw-unsplash.jpg`} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img src={`${process.env.PUBLIC_URL}/images/logged_out/kobu-agency-7okkFhxrxNw-unsplash.jpg`} />
            </div>
          </SwiperSlide> */}




        </Swiper>


        {/* <ZoomImage
                        src={`${process.env.PUBLIC_URL}/images/logged_out/istockphoto-1181324474-1024x1024.jpg`}
                        className={classes.image}
                        alt="header example"
                      /> */}
      </Grid>
      {/* </Hidden>
                </Box>
              </div>
            </Card>
          </Box> */}
      {/* </div>
      </div> */}
      <WaveBorder
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
