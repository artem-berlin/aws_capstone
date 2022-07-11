

import './Checkout.css';
import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@material-ui/core';
import React, {useContext, useState} from 'react';
import CartProduct from "../CartProduct/CartProduct";
import {useNavigate} from "react-router-dom";
import {CartProductType} from "../CartMain/CartMainStyles";
import {ShoppingCart} from "../interfaces/interfaces";

// ask Andre HISTORY!!!

interface Props {
  shoppingCart: ShoppingCart
}

const Checkout: React.FC<Props> = (props: Props) => {
  const nav= useNavigate();

  const totalPrice = props.shoppingCart.items
      .map(lineItem => lineItem.price)
      .reduce((p, c) => '' + (parseInt(p) + parseInt(c)), '0');


  /*function handleCheckout() {

    ;
  }*/



  return (
    <div className="Checkout">
      <Grid container spacing={5} className="checkout-grid">
        <Grid item xs={12} sm={7}>
          <div className="shipping">
            <Typography variant="h6" gutterBottom>
              Shipping address
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Address line 1"
                  fullWidth
                  autoComplete="shipping address-line1"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address2"
                  name="address2"
                  label="Address line 2"
                  fullWidth
                  autoComplete="shipping address-line2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="state" name="state" label="State/Province/Region" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="shipping country"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                  label="Use this address for payment details"
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} sm={5}>
          <div className="payment">
            <Typography variant="h6" gutterBottom>
              Payment method
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <TextField required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField required id="cardNumber" label="Card number" fullWidth autoComplete="cc-number" />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  required
                  id="cvv"
                  label="CVV"
                  helperText="Last three digits on signature strip"
                  fullWidth
                  autoComplete="cc-csc"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                  label="Remember credit card details for next time"
                />

              </Grid>

            </Grid>

          </div>
        </Grid>
        <Grid item xs={12} >
          <Typography variant="subtitle1">
               Total sum is $ {totalPrice}
          </Typography>
        </Grid>
      </Grid>
      <div className="buttons">
        <Button variant="outlined" onClick={() =>nav ('/confirmation')}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
