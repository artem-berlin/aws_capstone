import React, {ReactNode} from 'react';
import Slide from 'react-reveal/Slide';
import {Container, SectionCarrer,}   from './LandingFormStyle';
import {Fade} from "@mui/material";
import foto from '../assets/foto.jpg';
import {Button} from "@material-ui/core";
import {useNavigate} from "react-router-dom";

function TitleSection(props: { children: ReactNode }) {
    let children;
    return <Fade >
        <h2>{children}</h2>
    </Fade>;
}
interface Props {}
const LandingForm: React.FC <Props> = props =>{
    const nav= useNavigate();

    return (

    <Container>

        <SectionCarrer id="intro">
            <TitleSection>intro</TitleSection>

            <div className="wrapper">
                <Slide left>
                    <div className="foto">
                        <img src={foto} alt="intro" />
                    </div>
                </Slide>
                <Slide right>
                    <p className="description">
                        Welcome to my capstone project:
                        <br /> <br />
                        <br /> <br />
                        <div className="buttons">
                            <Button variant="text" onClick={() =>nav ('/register')}>
                                Lets go
                            </Button>
                        </div>
                        <br /> <br />
                        Special thanks to André  and Thomas
                        <br /><br />
                        und alle Neue Fische!

                    </p>

                </Slide>


            </div>
        </SectionCarrer>
    </Container>
);
};
export default LandingForm;

