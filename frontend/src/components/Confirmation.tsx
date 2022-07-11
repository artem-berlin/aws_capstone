
import './Status.css';
import { Button, Typography } from '@material-ui/core';
import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../auth/AuthProvider";


interface Props {}

const Confirmation: React.FC<Props> = props => {

    const nav= useNavigate();
    const{token}=useAuth();


    return (
    <div className="Confirmation">
      <div className="content">
        <Typography variant="h4">Success</Typography>
        <Typography variant="body2">
          Congratulations, on your purchase. The order has been received and is being processed.
        </Typography>
        <Typography variant="body2">
          <em>This is for demo purposes only. You have not been charged, the order is not being processed.</em>
        </Typography>
        <div className="buttons">
          <Button variant="text" onClick={() =>nav ('/main')}>
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
