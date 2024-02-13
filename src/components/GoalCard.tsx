import { Grid, Typography, Card, CardHeader, CardContent } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Goal } from '../TypeDefinitions/typeDefinition';

export default function GoalCard(props: {goal: Goal; deleteGoalFromList: (id: number) => void;}) {
    return (
        <Card sx={{minWidth: '200px', height: '100px', padding: '5px', backgroundColor: 'black', color: 'white', margin: '0px 0px 5px 5px'}}>
            <CardHeader
                action={
                  <IconButton color='primary' aria-label="delete">
                    <DeleteIcon onClick={() => {props.deleteGoalFromList(props.goal.id)}}/>
                  </IconButton>
                }
                title={props.goal.title} 
            />
            <CardContent>
              <Typography>
                {props.goal.description}
              </Typography>
            </CardContent>
        </Card>        
    );
}