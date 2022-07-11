

import {CartProductType} from "../CartMain/CartMainStyles";
import {Link, useNavigate} from "react-router-dom";
import './ProductDetail.css';

import { Button, Grid, InputLabel, MenuItem, Select, Snackbar, Typography } from '@material-ui/core';

interface ProductDetailProps{
    product : CartProductType
}

export default function ProductDetail(props : ProductDetailProps){
    const nav = useNavigate();
    return(

        <div className="ItemDetails">

        <Grid container className="container">
            <Grid item xs={12} sm={6}>
                <div className="image-container">
                   {/* <img className="item-details-image" src={item.largeImage} alt={item.title} />*/}
                    <Link to={`/${props.product.id}`} >
                        <img src={props.product.image} alt = "image1" className={'item-details-image'} />

                    </Link>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} className="content">
                <Typography variant="h5">{props.product.title}</Typography>

                <Typography variant="body1" color="textSecondary">


                    <div className="description">
                        <Typography variant="h6">Description</Typography>
                        <Typography variant="body2" component="div" color="textSecondary">
                            <p>{props.product.description}</p>
                            <p>{"Product price:"+"  "+""+props.product.price + ""+"$"}</p>
                        </Typography>
                    </div>

                </Typography>
            </Grid>
        </Grid>
            <div/>
            <div className="buttons">
                <Button variant="outlined" onClick={() => nav('/main')}>
                   Return to all products
                </Button>
            </div>
        </div>
   ) ;
}