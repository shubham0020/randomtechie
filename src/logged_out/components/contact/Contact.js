import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import ContactForm from "./ContactForm";
//import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/node/Typography";

const styles = (theme) => ({
    ContactContentWrapper: {
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
});


function Contact(props) {
    const { classes, selectContact, theme } = props;

    useEffect(() => {
        selectContact();
    }, [selectContact]);

    return (
        <Box
            display="flex"
            justifyContent="center"
            className={classNames(classes.wrapper, "lg-p-top")}
        >
            <div className={classes.ContactContentWrapper}>
                <Grid spacing={3}>
                    <Typography variant="h4" align="center" style={{ fontWeight:500 }}>Contact Us</Typography>
                </Grid>
                <div className={classNames(classes.wrapper)} style={{paddingTop:45}}>
          <div className={classNames("container-fluid", classes.container)} >
              <Box display="flex" justifyContent="center" className="row">
                
                  <div className={classNames(classes.containerFix, "container")} >
                    <Box justifyContent="space-between" className="row">

                    
                      <Grid item xs={12} md={5} >
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="space-between"
                          
                        >
                                
                    {/*  Box 1 */}
                    <Box justifyContent="space-between" className="row">

                    
                      <Grid item xs={12} md={6} style={{padding:10 }}>
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="space-between"
                          
                         
                        >
                          
                          <Box mb={0} style={{ backgroundColor:"#fafbff", padding:20, minWidth:198 }}>
                                      <Typography variant="h3">
                                      <strong style={{fontSize:20, color:'#012970', fontWeight:500 }}> Address</strong>
                                      </Typography>
                                      <Typography style={{ fontSize: 16 }}>
                                          <div>A108 Adam Street,</div>
                                          <div>New York, NY 535022.</div>
                                      </Typography>
                                  </Box>
                                 

                            
                          
                        </Box>
                      </Grid>

                      
                        <Grid item md={6} style={{padding:10 }}>
                        <Box mb={0} style={{ backgroundColor:"#fafbff", padding:20 , minWidth:198}}>
                                      <Typography variant="h3">
                                      <strong style={{fontSize:20, color:'#012970', fontWeight:500 }}> Call Us</strong>
                                      </Typography>
                                      <Typography style={{ fontSize: 16 }}>
                                          <div>914-875-9661 </div>
                                          <div>080-4970-0135</div>
                                      </Typography>
                                  </Box>
                        </Grid>
                      
                      
                    </Box>

                    { /* Box 2 */}
                    <Box justifyContent="space-between" className="row">

                    
                      <Grid item xs={12} md={6} style={{padding:10 }}>
                        <Box 
                          display="flex"
                          flexDirection="column"
                          justifyContent="space-between"
                          
                         
                        >
                          
                          <Box mb={0} style={{ backgroundColor:"#fafbff", padding:20 , minWidth:198}}>
                                      <Typography variant="h3">
                                      <strong style={{fontSize:20, color:'#012970', fontWeight:500 }}> Email Us</strong>
                                      </Typography>
                                      <Typography style={{ fontSize: 16 }}>
                                          <div>info@example.com</div>
                                            <div>sales@randomtechie.com</div>
                                      </Typography>
                                  </Box>
                                 

                            
                          
                        </Box>
                      </Grid>

                      
                        <Grid item md={6} style={{padding:10 }}>
                        <Box mb={0} style={{ backgroundColor:"#fafbff", padding:20, minWidth:198}}>
                                      <Typography variant="h3">
                                      <strong style={{fontSize:20, color:'#012970', fontWeight:500 }}> Open Hours</strong>
                                      </Typography>
                                      <Typography style={{ fontSize: 16 }}>
                                          <div>Monday - Friday</div>
                                          <div>9:00AM - 05:00PM </div>
                                      </Typography>
                                  </Box>
                        </Grid>
                      
                      
                    </Box>
                 
            
                                
                                
                              </Box>
                            </Grid>

                           
                      
                        <Grid item md={6} style={{  backgroundColor:"#fafbff" }}>
                        <ContactForm/>
                        
                        </Grid>
                      
                      
                    </Box>
                  </div>
                
              </Box>
            </div>
          </div>
            </div>
        </Box>
    );
}

Contact.propTypes = {
    selectContact: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Contact);
