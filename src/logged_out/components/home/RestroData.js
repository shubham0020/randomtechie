import React, { useState, useEffect, Fragment } from 'react';
import { Grid, Typography, Box, Card, CardContent, CardActions, Button, Container } from "@mui/material";
import { withStyles } from "@mui/styles";
import CardMedia from '@mui/material/node/CardMedia';

import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import useWidth from "../../../shared/functions/useWidth";
import axios from 'axios';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: "flex",
//       flexWrap: "wrap",
//       "& > *": {
//         margin: theme.spacing(3),
//       },
//     },
//   })
// );

// const classes = useStyles();

const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down("lg")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360,
    },
  },
  media: {
    height: 140,
  },
});


function RestroData(props) {

  const { classes, theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));


  const url = 'https://safe-oasis-07771.herokuapp.com/cafeteriaList';
  const [Restrodata, setRestro] = useState([]);

  const getRestro = () => {
    axios.get(url)
      .then((response) => {
        const restros = response.data;
        setRestro(restros)
      })

  }
  useEffect(() => {
    getRestro()
  }, []);

  return (
    <Fragment>
      <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Restrorents
        </Typography>

        <Container>
          <Grid
            container
            spacing={calculateSpacing(width, theme)}
            className={classes.gridContainer}
          >

            {Restrodata.map((data) => (
              <Grid
                item
                className={classes.cardWrapper}
                xs={12}
                sm={6}
                lg={3}
                data-aos="zoom-in-up"
                data-aos-delay={isWidthUpMd ? "600" : "200"}>







                <Box >
                  <Card variant="outlined">
                   


                      
                     
                    <CardMedia
                      style={{ paddingTop: "100%" }}
                      image={data.cafeterialogo}
                      title={data.name}
                    />
                    <CardContent>
                    <div><span>City: {data.city}</span></div>
                    <div><span>State: {data.state}</span></div>
                    <div><span>Country: {data.country}</span></div>
                    <span>Manager Contact No.</span> <div> {data.cafemanagermobilenumber}</div>
                    
                    </CardContent>
                    <CardActions>
                      <Button href={'https://cheers.bon-cuisine.in/counter/'+data.id+'/Counter/Pickup'} >View</Button>
                    </CardActions>
                  </Card>
                </Box>









              </Grid>

            ))}

          </Grid>
        </Container>


      </div>

    </Fragment>
  )
}



RestroData.prototype = {};
export default withStyles(styles, { withTheme: true })(RestroData);