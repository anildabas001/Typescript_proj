import { Grid } from '@mui/material';
import GoalCard from './GoalCard';
import { Goal } from '../TypeDefinitions/typeDefinition';

function GoalList(props: {goalList: Goal[]; deleteGoalFromList: (id: number) => void;}) {
    return (
        <Grid item container xs={12} sx={{backgroundColor: 'white', borderRadius: 2, marginTop: '7px', justifyContent: 'space-between', padding: '16px'}}>
            {props.goalList.map((goal) => {
                return (
                    <Grid item key={goal.id}>
                        <GoalCard goal={goal} deleteGoalFromList={props.deleteGoalFromList}/>
                    </Grid>
                );
            })}           
        </Grid>
    );
}

export default GoalList;