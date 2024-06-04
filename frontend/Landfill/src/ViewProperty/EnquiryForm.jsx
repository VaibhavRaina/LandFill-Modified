import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./EnquiryForm.css";

const EnquiryForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [description, setDescription] = useState("");
    const [descriptionError, setdescriptionError] = useState(false);

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
        setNameError(value.trim() === '');
    };

    const handleDescriptionChange = (event) => {
        const value = event.target.value;
        setDescription(value);
        setdescriptionError(value.trim() == ``);
    }

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        setEmailError(!validateEmail(value));
    };

    const handlePhoneNumberChange = (event) => {
        const value = event.target.value;
        setPhoneNumber(value);
        setPhoneNumberError(!validatePhoneNumber(value));
    };


    const validateEmail = (email) => {
        // Basic email validation regex
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    };

    const validatePhoneNumber = (phoneNumber) => {
        // Basic phone number validation regex
        const phoneNumberRegex = /^\d{10}$/;
        return phoneNumberRegex.test(phoneNumber);
    };

    return (
        <FormControl sx={{ position: "relative", top: "5rem" }}>
            <Typography sx={{ marginTop: "8px", marginLeft: "10px" }} variant="h5" gutterBottom>
                <b> Send enquiry to Owner</b>
            </Typography>


            <FormControl sx={{ flexDirection: "row", }}>


                <FormLabel sx={{ padding: "10px", paddingRight: "61px", }}>You are</FormLabel>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                    <FormControlLabel sx={{ paddingRight: "61px" }} value="individual" control={<Radio />} label="Individual" labelPlacement="end" />
                    <FormControlLabel sx={{ paddingRight: "61px" }} value="organization" control={<Radio />} label="Organization" labelPlacement="end" />
                </RadioGroup>
            </FormControl>

            <FormControl sx={{ flexDirection: "row" }}>
                <FormLabel sx={{ padding: "10px", paddingRight: "61px" }}>Your reason for booking is</FormLabel>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                    <FormControlLabel sx={{ paddingRight: "61px" }} value="parking" control={<Radio />} label="Parking" labelPlacement="end" />
                    <FormControlLabel sx={{ paddingRight: "61px" }} value="function" control={<Radio />} label="Function" labelPlacement="end" />
                    <FormControlLabel sx={{ paddingRight: "61px" }} value="other" control={<Radio />} label="Other" labelPlacement="end" />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <TextField
                    sx={{ width: "340px", marginTop: "8px", marginLeft: "10px" }}
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={handleNameChange}
                    error={nameError}
                    helperText={nameError ? 'Name cannot be empty' : ''}
                />

                <TextField
                    sx={{ width: "340px", marginTop: "8px", marginLeft: "10px" }}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    error={emailError}
                    helperText={emailError ? 'Invalid email format' : ''}
                />

                <TextField
                    sx={{ width: "340px", marginTop: "8px", marginLeft: "10px" }}
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    error={phoneNumberError}
                    helperText={phoneNumberError ? 'Invalid phone number' : ''}
                />


                <TextField
                    sx={{ width: "258px", display: "flex", position: "absolute", left: "23rem", top: "7px" }}
                    id="outlined-textarea"
                    value={description}
                    label="Description"
                    placeholder='I am interested in this land because'
                    onChange={handleDescriptionChange}
                    error={descriptionError}
                    rows={6.65}
                    helperText={descriptionError ? 'Description cannot be empty' : ''}
                    multiline
                />
                <FormGroup sx={{ marginTop: "8px", marginLeft: "10px" }}>
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label={<span style={{ fontWeight: 'bold' }}>I agree to be contacted by LandFill via call and whatsapp for further assistance</span>}
                    />
                    <FormControlLabel
                        required
                        control={<Checkbox defaultChecked />}
                        label={<span style={{ fontWeight: 'bold' }}>Agree to the terms and conditions</span>}
                    />
                </FormGroup>
                <Button sx={{ marginTop: "8px", marginLeft: "10px", width: "150px", height: "39px" }} variant="contained">Send Enquiry</Button>

            </FormControl>
            <span style={{ width: "1395px" }} className="line3"></span>
        </FormControl>

    );
};

export default EnquiryForm;
