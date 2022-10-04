
import React from "react";
import { Grid, Box, Paper, Typography, CardMedia, Card } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, withTheme } from "@mui/styles";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import useWidth from "../../../shared/functions/useWidth";

const iconSize = 20;
const data = [
    {
        id: 1,
        username: "Shadrack",
        lefticon: <mat-icon style={{ fontSize: iconSize }}>format_quote</mat-icon>,
        testimonial: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
        image: '/images/logged_out/testimonials/testimonials-1.jpg',
        designation: 'Ceo & Founder'

    },
    {
        id: 2,
        username: "Dennis",
        testimonial: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
        image: '/images/logged_out/testimonials/testimonials-5.jpg',
        designation: 'Freelancer'
    },
    {
        id: 3,
        username: "Sara Wilsson",
        testimonial: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
        image: '/images/logged_out/testimonials/testimonials-3.jpg',
        designation: 'Entrepreneur'
    },
    {
        id: 4,
        username: "John",
        testimonial: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
        image: '/images/logged_out/testimonials/testimonials-4.jpg',
        designation: 'Designer'
    },
    {
        id: 5,
        username: "Alex",
        testimonial: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
        image: '/images/logged_out/testimonials/testimonials-1.jpg',
        designation: 'Store Owner'
    },
    {
        id: 6,
        username: "Jena Karlis",
        testimonial: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
        image: '/images/logged_out/testimonials/testimonials-2.jpg',
        designation: 'Developer'
    },
];

function Testimonial(props) {
    const { theme } = props;
    const width = useWidth();
    const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

    return (

        <div style={{ backgroundColor: "#FFFFFF" }}>
            <div className="container-fluid lg-p-top" >
                <Typography variant="h3" align="center" className="lg-mg-bottom">
                    Testimonials
                </Typography>


                <div className="container-fluid" >
                    <Grid container spacing={calculateSpacing(width, theme)} style={{ paddingLeft: 150, paddingRight: 50 }}>
                        <Swiper
                            spaceBetween={100}
                            slidesPerView={2}
                            autoplay={true}
                            pagination={{ clickable: true }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={swiper => console.log(swiper)}
                        >
                            {data.map(user => (
                                <SwiperSlide key={user.id} className="slide" >

                                    <div style={{ padding: 30, border: " solid", borderColor: "#f1f1f1", marginBottom: 70, minHeight: 150 }}>

                                        <CardMedia component="img" image={user.image} title="" alt="" style={{ height: 80, width: 80, position: "absolute", left: 20, borderRadius: 5, marginTop: -10 }} /><CardMedia />
                                        <div style={{ marginLeft: 85 }} >
                                            <h3>{user.username} </h3>
                                            <h5 style={{ fontWeight:500 }}>{user.designation}</h5>
                                            <p style={{ color: "#444444", fontStyle: "italic" }}>{user.testimonial} </p>
                                        </div>



                                    </div>

                                </SwiperSlide>

                            ))}
                        </Swiper>
                    </Grid>

                </div>
            </div>
        </div>

    );
}

Testimonial.propTypes = {};

export default withTheme(Testimonial);
