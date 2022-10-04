
import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import { CardActions, Button, Grid, Box, CardMedia, Typography, CardContent, Card, CardActionArea } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import useMediaQuery from "@mui/material/useMediaQuery";




const styles = (theme) => ({
    servicesContentWrapper: {
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
    heading: {
        marginBottom: theme.spacing(5)
    },
});

const Services = (props) => {
    const { classes, selectServices, theme } = props;
    const isWidthUpSm = useMediaQuery(theme.breakpoints.up("sm"));
    const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

    useEffect(() => {
        selectServices();
    }, [selectServices]);

    return (

        <Box
            display="flex"
            justifyContent="center"
            className={classNames(classes.wrapper, "lg-p-top")}
        >


            <div className={classes.servicesContentWrapper}>
                <div className={classes.heading}>
                    <Typography variant="h4" align="center" style={{ fontWeight: 500 }}>Services</Typography>

                    <Typography align="center" style={{ marginTop: 20 }}>
                        Magnam dolores commodi suscipit eius consequatur ex aliquid fug
                    </Typography>
                </div>
                <Grid container style={{ paddingLeft: 70, marginBottom: 130 }}>



                    <Box style={{ paddingLeft: 25 }}>
                        <Card sx={{ maxWidth: 250 }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="images/logged_out/timothy-hales-bennett-OwvRB-M3GwE-unsplash.jpg"
                                    alt="green iguana"
                                    style={{ padding: 20 }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" align="center">
                                        Pale Treda
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="center">
                                        Pale Treda are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Read More</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Box>

                    <Box style={{ paddingLeft: 25 }}>
                        <Card sx={{ maxWidth: 250 }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="images/logged_out/corinne-kutz-tMI2_-r5Nfo-unsplash.jpg"
                                    alt="green iguana"
                                    style={{ padding: 20 }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" align="center">
                                        Lobira Duno
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="center">
                                        Lobira Duno are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Read More</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Box>

                    <Box style={{ paddingLeft: 25 }}>
                        <Card sx={{ maxWidth: 250 }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="images/logged_out/domenico-loia-EhTcC9sYXsw-unsplash.jpg"
                                    alt="green iguana"
                                    style={{ padding: 20 }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" align="center">
                                        Limere Radses
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="center">
                                        Limere Radses are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions spacing={1} align={'center'}>
                                    <Button size="small">Read More</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Box>


                    <Box style={{ paddingLeft: 25 }}>
                        <Card sx={{ maxWidth: 250 }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="images/logged_out/corinne-kutz-tMI2_-r5Nfo-unsplash.jpg"
                                    alt="green iguana"
                                    style={{ padding: 20 }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" align="center">
                                        Nive Lodo
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="center">
                                        Nive Lodos are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions spacing={1} align={'center'}>
                                    <Button size="small">Read More</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Box>

                </Grid>


                {  /* CASE STUDY START */}


                <div className={classes.heading}>
                    <Typography variant="h4" align="center" style={{ fontWeight: 500 }}>Case Studies</Typography>
                </div>

                <Grid container style={{ paddingLeft: 80, marginBottom: 30 }}>



                    <Box style={{ padding: 14 }}>
                        <Card sx={{ maxWidth: 525 }} style={{
                            backgroundImage: "url('./images/logged_out/timothy-hales-bennett-OwvRB-M3GwE-unsplash.jpg')", backgroundPosition: '55%',
                            backgroundSize: 'small',
                            backgroundRepeat: 'no-repeat'
                        }}
                        >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                         
                            />
                            <div style={{ padding:20}}>
                            <CardContent style={{ backgroundColor:'#fff' }}>
                                <Typography gutterBottom variant="h6" component="div" align="center">
                                Pale Treda
                                </Typography>
                                <Typography variant="body2" color="text.secondary" align="center">
                                Pale Treda are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>

                                <CardActions>
                                <Button size="small">Read More</Button>
                                </CardActions>
                            </CardContent>  
                            </div>
                        </CardActionArea>

                        </Card>
                    </Box>

                    <Box style={{ padding: 14 }}>
                        <Card sx={{ maxWidth: 525 }}  
                        style={{
                            backgroundImage: "url('./images/logged_out/corinne-kutz-tMI2_-r5Nfo-unsplash.jpg')", backgroundPosition: '80%',
                            backgroundSize: 'small',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                />
                                <div style={{ padding:20}}>
                                <CardContent  style={{ backgroundColor:'#fff' }}>
                                    <Typography gutterBottom variant="h6" component="div" align="center">
                                    Nive Lodo
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="center">
                                    Nive Lodo are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                

                                    <CardActions>
                                        <Button size="small">Read More</Button>
                                    </CardActions>
                                </CardContent>
                                </div>

                            </CardActionArea>
                        </Card>
                    </Box>

                    <Box style={{ padding: 14 }}>
                        <Card sx={{ maxWidth: 525 }} 
                        style={{
                            backgroundImage: "url('./images/logged_out/domenico-loia-EhTcC9sYXsw-unsplash.jpg')", backgroundPosition: '30%',
                            backgroundSize: 'small',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                              />
                              <div style={{ padding:20}}>
                                <CardContent style={{ backgroundColor:'#fff' }}>
                                    <Typography gutterBottom variant="h6" component="div" align="center">
                                        Limere Radses                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="center">
                                        Limere Radses are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>

                                    <CardActions>
                                        <Button size="small">Read More</Button>
                                    </CardActions>
                                </CardContent>
                            </div>
                               

                            </CardActionArea>
                        </Card>
                    </Box>


                    <Box style={{ padding: 14 }}>
                        <Card sx={{ maxWidth: 525 }} 
                        style={{
                            backgroundImage: "url('./images/logged_out/corinne-kutz-tMI2_-r5Nfo-unsplash.jpg')", backgroundPosition: '12%',
                            backgroundSize: 'small',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                />
                                 <div style={{ padding:20}}>
                                <CardContent style={{ backgroundColor:'#fff' }}>
                                    <Typography gutterBottom variant="h6" component="div" align="center">
                                        Lobira Duno
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="center">
                                        Lobira Dunos are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>

                                    <CardActions>
                                        <Button size="small">Read More</Button>
                                    </CardActions>
                                </CardContent>
                                
                                </div>
                               
                            </CardActionArea>
                        </Card>
                    </Box>

                </Grid>



            </div>
        </Box>

    )
}

Services.propTypes = {
    selectServices: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Services);;