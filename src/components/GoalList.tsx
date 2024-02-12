import { Grid } from '@mui/material';
import GoalCard from './GoalCard';

function GoalList() {
    return (
        <Grid item container xs={12} sx={{backgroundColor: 'white', borderRadius: 2, marginTop: '7px', justifyContent: 'space-between', padding: '16px'}}>
            <Grid item>
                <GoalCard />
            </Grid>           
        </Grid>
    );
}

export default GoalList;