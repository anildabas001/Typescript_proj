import { TextField, Button, Grid } from '@mui/material';

export default function GoalForm() {
    return (
        <Grid item xs={12} textAlign={"center"} sx={{backgroundColor: 'white', borderRadius: 2, padding: "7px"}}>  
            <TextField placeholder="Please enter your goal" fullWidth id="goal" label="Goal" variant="standard" sx={{marginBottom: '15px'}}/>
            <TextField placeholder="Please enter goal description" fullWidth id="goal" label="Goal Description" variant="standard" sx={{marginBottom: '15px'}}/>            
            <Button sx={{width: '60%', marginTop: '10px'}} variant="contained">Submit your Goal</Button>
        </Grid>        
    );
}