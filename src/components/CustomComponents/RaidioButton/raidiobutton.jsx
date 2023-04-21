import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
export const CustomRaidio = ({}) => {
    return (
        <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
        >
            <FormControlLabel value='best' control={<Radio />} label='عالی' />
            <FormControlLabel value='good' control={<Radio />} label='خوب' />
            <FormControlLabel
                value='normal'
                control={<Radio />}
                label='متوسط'
            />
            <FormControlLabel value='bad' control={<Radio />} label='ضعیف' />
        </RadioGroup>
    );
};
