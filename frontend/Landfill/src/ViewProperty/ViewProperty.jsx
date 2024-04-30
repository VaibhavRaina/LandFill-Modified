import Header from "../Utils/Header";
import { useParams } from "react-router-dom";
import dummyLand from "../dummyLand";
import Container from '@mui/material/Container';
import { useState } from "react";
import IntroductionSection from "./IntroductionSection";
import "./ViewProperty.css"
import TagKeys from "./TagKeys";
import OverviewSection from "./OverviewSection";
import PlacesNearby from "./PlacesNearby";
import AboutProperty from "./AboutProperty";
import OwnerDetails from "./OwnerDetails";



export default function ViewProperty() {
    const pid = useParams().pid;
    const loadedProperty = dummyLand.find(land => land.id == pid); // Use find instead of filter if id is unique
    const [mode, setMode] = useState('light');

    const toggleColorMode = () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="body">
            <Container disableGutters>
                <Header mode={mode} toggleColorMode={toggleColorMode} />
                <div className="content">
                    <IntroductionSection items={loadedProperty} />
                </div>
                <div className="TagKeys"> <TagKeys /></div>
                <div className="OverviewSection"><OverviewSection items={loadedProperty} /></div>
                <div className="PlacesNearby"><PlacesNearby /></div>
                <div className="AboutProperty"><AboutProperty items={loadedProperty} /></div>
                <div className="OwnerDetails"><OwnerDetails /> </div>
            </Container>
        </div>
    );
}
