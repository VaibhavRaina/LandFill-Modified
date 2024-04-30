import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const EnquiryForm = () => {
    return (
        <>
            <FormControl>
                <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" labelPlacement="end" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" labelPlacement="end" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" labelPlacement="end" />
                </RadioGroup>
            </FormControl>
        </>
    )
}

export default EnquiryForm;