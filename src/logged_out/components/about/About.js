import React, { useEffect , Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Button, Grid, Box, CardMedia,Typography } from "@mui/material";
import withStyles from "@mui/styles/withStyles";

import useMediaQuery from "@mui/material/useMediaQuery";



const styles = (theme) => ({
        extraLargeButtonLabel: {
          fontSize: theme.typography.body1.fontSize,
          [theme.breakpoints.up("sm")]: {
            fontSize: theme.typography.h6.fontSize,
          },
        },
        extraLargeButton: {
          marginTop: theme.spacing(1),
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
        aboutContentWrapper: {
          backgroundImage: `${process.env.PUBLIC_URL}/hero-bg.png`,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(4),
            marginRight: theme.spacing(4),
        },
        maxWidth: 1280,
        width: "100%",
    },
    wrapper: {
        minHeight: "60vh",
    },
    noDecoration: {
        textDecoration: "none !important",
    },
    heading:{
        marginBottom:theme.spacing(5)
    },
});



function About(props) {
    const { classes, selectAbout, theme } = props;

    const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));
    //const isWidthUpSm = useMediaQuery(theme.breakpoints.up("sm"));
    //const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

    useEffect(() => {
        selectAbout();
    }, [selectAbout]);

    return (
        <Fragment>

        <div className={classNames("lg-p-top", classes.wrapper)} style={{backgroundPosition: '70%',
        backgroundSize: 'small',
        backgroundRepeat: 'no-repeat', backgroundImage: "url('./hero-bg.png')"}}>
          <div className={classNames( classes.container)}>
              <Box display="flex" justifyContent="center" className="row">
                
                  <div className={classNames(classes.containerFix, "container")}>
                    <Box justifyContent="space-between" className="row" style={{ paddingTop: 10 }}>

                    
                      <Grid item xs={12} md={5} >
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="space-between"
                          // style={{marginTop:-40 }}
                        
                        >
                          <Box mb={0}>
                            <Typography variant={isWidthUpLg ? "h3" : "h4"}>
                            <strong style={{fontSize:15, color:'rgb(7 65 198)', fontWeight:500 }}> WHO WE ARE</strong>
                            </Typography>
                          </Box>
                        
                            <Box mb={2}>
                                <Typography
                                    variant={isWidthUpLg ? "h5" : "body1"} 
                                    color="#012970"
                                    fontWeight="550"
                                > 
                                <p>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</p>
                                
                                </Typography>

                                <Typography style={{ fontSize: 16 }}>
                                    <p>Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti</p>
                                </Typography>
                            </Box>

                            <Button
                              variant="contained"
                              color="secondary"
                              fullWidth
                              className={classes.extraLargeButton}
                              classes={{ label: classes.extraLargeButtonLabel }}
                              href=""
                            >
                              Read more
                            </Button>
                          
                        </Box>
                      </Grid>

                      
                        <Grid item md={6}
                        //  style={{  backgroundColor:"#f6f9ff", borderRadius:140}}
                         >
                        <CardMedia component="img"
                            image={`${process.env.PUBLIC_URL}/images/logged_out/about.png`}
                            className={classes.image}
                            alt="About image"
                            
                            />
                        </Grid>
                      
                      
                    </Box>
                  </div>
                
              </Box>
            </div>
          </div>


            { /* ******  */}

      
          <div className={classNames("lg-p-top", classes.wrapper)} >
                <div className={classNames( classes.container)}>
                    <Box display="flex" justifyContent="center" className="row">
                      
                        <div className={classNames(classes.containerFix, "container")}>
                          <Box justifyContent="space-between" className="row">

                            <Grid item md={5} >
                              <CardMedia component="img"
                                  image={`${process.env.PUBLIC_URL}/images/logged_out/counts-img.svg`}
                                  className={classes.image}
                                  alt="About image"
                                  
                                  />
                              </Grid>
                            <Grid item xs={12} md={6} style={{ padding:10 }}>
                              <Box
                                display="flex"
                                flexDirection="column"
                                justifyContent="space-between"
                              >
                                
                    {/*  Box 1 */}
                    <Box justifyContent="space-between" className="row">

                    
                      <Grid item xs={12} md={6}>
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="space-between"
                          
                         
                        >
                          
                          <Box mb={0}>
                                      <Typography variant={isWidthUpLg ? "h3" : "h4"}>
                                      <strong style={{fontSize:35, color:'rgb(7 65 198)', fontWeight:700 }}> 65</strong>
                                      </Typography>
                                      <Typography style={{ fontSize: 16 }}>
                                          <p><b>Happy Clients</b> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                                      </Typography>
                                  </Box>
                                 

                            
                          
                        </Box>
                      </Grid>

                      
                        <Grid item md={6} >
                        <Box mb={0}>
                                      <Typography variant={isWidthUpLg ? "h3" : "h4"}>
                                      <strong style={{fontSize:35, color:'rgb(7 65 198)', fontWeight:700 }}> 85</strong>
                                      </Typography>
                                      <Typography style={{ fontSize: 16 }}>
                                          <p><b>Projects </b>adipisci atque cum quia aspernatur totam laudantium et quia dere tan.</p>
                                      </Typography>
                                  </Box>
                        </Grid>
                      
                      
                    </Box>

                    { /* Box 2 */}
                    <Box justifyContent="space-between" className="row">

                    
                      <Grid item xs={12} md={6}>
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="space-between"
                          
                         
                        >
                          
                          <Box mb={0}>
                                      <Typography variant={isWidthUpLg ? "h3" : "h4"}>
                                      <strong style={{fontSize:35, color:'rgb(7 65 198)', fontWeight:700 }}> 18</strong>
                                      </Typography>
                                      <Typography style={{ fontSize: 16 }}>
                                          <p><b>Years of experience</b> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel.</p>
                                      </Typography>
                                  </Box>
                                 

                            
                          
                        </Box>
                      </Grid>

                      
                        <Grid item md={6} >
                        <Box mb={0}>
                                      <Typography variant={isWidthUpLg ? "h3" : "h4"}>
                                      <strong style={{fontSize:35, color:'rgb(7 65 198)', fontWeight:700 }}> 15</strong>
                                      </Typography>
                                      <Typography style={{ fontSize: 16 }}>
                                          <p><b>Awards </b>rerum asperiores dolor alias quo reprehenderit eum et nemo pad der.</p>
                                      </Typography>
                                  </Box>
                        </Grid>
                      
                      
                    </Box>
                 
            
                                
                                
                              </Box>
                            </Grid>

                            
                          </Box>
                        </div>
                      
                    </Box>
                  </div>
                </div>

        </Fragment>
       
    );
}

About.propTypes = {
    selectAbout: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(About);
