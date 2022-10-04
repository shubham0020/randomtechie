import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Typography, Grid, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import PortfolioCard from "./PortfolioCard";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = (theme) => ({
    portfolioContentWrapper: {
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

function getVerticalPortfolioPosts(isWidthUpSm, isWidthUpMd, portfolioPosts) {
    const gridRows = [[], [], []];
    let rows;
    let xs;
    if (isWidthUpMd) {
        rows = 3;
        xs = 4;
    } else if (isWidthUpSm) {
        rows = 2;
        xs = 6;
    } else {
        rows = 1;
        xs = 12;
    }
    portfolioPosts.forEach((portfolioPost, index) => {
        gridRows[index % rows].push(
            <Grid key={portfolioPost.id} item xs={12}>
                <Box mb={3}>
                    <PortfolioCard
                        src={portfolioPost.src}
                        title={portfolioPost.title}
                        snippet={portfolioPost.snippet}
                        date={portfolioPost.date}
                        url={portfolioPost.url}
                    />
                </Box>
            </Grid>
        );
    });
    return gridRows.map((element, index) => (
        <Grid key={index} item xs={xs}>
            {element}
        </Grid>
    ));
}

function Portfolio(props) {
    const { classes, portfolioPosts, selectPortfolio, theme } = props;

    const isWidthUpSm = useMediaQuery(theme.breakpoints.up("sm"));
    const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

    useEffect(() => {
        selectPortfolio();
    }, [selectPortfolio]);

    return (
        <Box
            display="flex"
            justifyContent="center"
            className={classNames(classes.wrapper, "lg-p-top")}
        >
            <div className={classes.portfolioContentWrapper}>

            <div className={classes.heading}>
                        <Typography variant="h4" align="center" style={{ fontWeight:500 }}>Portfolio</Typography>     
                    </div>    
                <Grid container spacing={3}>
                    {getVerticalPortfolioPosts(isWidthUpSm, isWidthUpMd, portfolioPosts)}
                </Grid>
            </div>
            
        </Box>
    );
}

Portfolio.propTypes = {
    selectPortfolio: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    portfolioPosts: PropTypes.arrayOf(PropTypes.object),
};

export default withStyles(styles, { withTheme: true })(Portfolio);
