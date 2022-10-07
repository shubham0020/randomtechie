import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";

//import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/node/Typography";

const styles = (theme) => ({
    aboutContentWrapper: {
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


function PrivacyPolicy(props) {
    const { classes, selectPrivacyPolicy, theme } = props;

    //const isWidthUpSm = useMediaQuery(theme.breakpoints.up("sm"));
    //const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

    useEffect(() => {
        selectPrivacyPolicy();
    }, [selectPrivacyPolicy]);

    return (
        <Box
            display="flex"
            justifyContent="center"
            // className={classNames(classes.wrapper, "lg-p-top")}
        >
            <div className={classes.aboutContentWrapper}>
                <Grid spacing={3}>
                    <Typography align="center" variant="h4" style={{ fontWeight:500 }}>Privacy Policy</Typography>
                </Grid>


                <div className={classNames("lg-p-top", classes.wrapper)} >
          <div className={classNames("container-fluid", classes.container)} >
              <Box display="flex" justifyContent="center" className="row">
                
                  <div className={classNames(classes.containerFix, "container")} >
                    <Box justifyContent="space-between" className="row">

                    
                      <Grid item xs={12} md={12} >
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="space-between"
                          
                        >
                                
                   
                        <div>
                        <Typography variant="h4" fontWeight="500">Random Techie Privacy Policy (randomtechie.com)</Typography>
                        </div>
                        <p><i>Last Updated May 2, 2018.</i></p>
                        <p>This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally Identifiable Information’ (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</p>

                        <Typography  variant="h4" fontWeight="500">Data Protection Principles</Typography>

                        <p>We promise to follow the following data protection principles:</p>
                        <p>
                        <li>Processing is lawful, fair, transparent. Our Processing activities have lawful grounds. We always consider your rights before Processing Personal Data. </li>
                        <li>We will provide you information regarding Processing upon request.</li>
                        <li>Processing is limited to the purpose. Our Processing activities fit the purpose for which Personal Data was gathered.</li>
                        <li>Processing is done with minimal data. We only gather and Process the minimal amount of Personal Data required for any purpose.</li>
                        <li>Processing is limited with a time period. We will not store your personal data for longer than needed.</li>
                        <li>We will do our best to ensure the accuracy of data.</li>
                        <li>We will do our best to ensure the integrity and confidentiality of data.</li>
                        </p>



                        <Typography variant="h4" fontWeight="500">Data Subject’s rights</Typography>
                        <p>The Data Subject has the following rights:</p>
                        <p>
                            <div>
                            1 . Right to information – meaning you have to right to know whether your Personal Data is being processed; what data is gathered, from where it is obtained and why and by whom it is processed.
                            </div>
                            <div>
                            2 . Right to access – meaning you have the right to access the data collected from/about you. This includes your right to request and obtain a copy of your Personal Data gathered.
                            </div>
                            <div>
                            3 . Right to rectification – meaning you have the right to request rectification or erasure of your Personal Data that is inaccurate or incomplete.
                            </div>
                            <div>
                            4 . Right to erasure – meaning in certain circumstances you can request for your Personal Data to be erased from our records.
                            </div>
                            <div>
                            5 . Right to restrict processing – meaning where certain conditions apply, you have the right to restrict the Processing of your Personal Data.
                            </div>
                        </p>

                        <Typography variant="h4" fontWeight="500">What personal information do we collect from the people that visit our website?</Typography>
                        <p>
                        <b>Information you have provided us with </b><br></br>

                        This might be your e-mail address, name, billing address, home address etc – mainly information that is necessary for delivering you a product/service or to enhance your customer experience with us. We save the information you provide us with in order for you to comment or perform other activities on the website. This information includes, for example, your name and e-mail address.</p>

                        <p>
                        <b>Information automatically collected about you </b><br></br>

                        This includes information that is automatically stored by cookies and other session tools. For example, your shopping cart information, your IP address, your shopping history (if there is any) etc. This information is used to improve your customer experience. When you use our services or look at the contents of our website, your activities may be logged.</p>

                        <p>
                        <b>Information from our partners </b><br></br>

                        We gather information from our trusted partners with confirmation that they have legal grounds to share that information with us. This is either information you have provided them directly with or that they have gathered about you on other legal grounds. See the list of our partners here.</p>
            


                        <Typography  variant="h4" fontWeight="500">When do we collect information?</Typography>   

                        <p>We may collect information when you engage in any of the following behaviors on our website:</p> 

                        <p>
                        <li>Fill out a contact form;</li>
                        <li>Comment on a blog post or article;</li>
                        <li>Subscribe to our newsletter;</li>
                        <li>
                        Click-to-call or otherwise engage with communication through our website.
                        </li>
                        </p>    
                                
                        <Typography  variant="h4" fontWeight="500">How we use your Personal Data</Typography> 

                        <p>We use your Personal Data in order to:</p>

                        <p>
                            <li>provide our service to you. This includes for example registering your account; providing you with other products and services that you have requested; providing you with promotional items at your request and communicating with you in relation to those products and services; communicating and interacting with you; and notifying you of changes to any services;</li>
                            <li>enhance your customer experience;</li>
                            <li>fulfill an obligation under law or contract.</li>
                        </p>


                            </Box>
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

PrivacyPolicy.propTypes = {
    selectPrivacyPolicy: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PrivacyPolicy);
