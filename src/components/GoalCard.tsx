import { Grid, Typography, Card, CardHeader, CardContent } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function GoalCard() {
    return (
        <Card sx={{minWidth: '200px', height: '100px', padding: '5px', backgroundColor: 'black', color: 'white', margin: '0px 0px 5px 5px'}}>
            <CardHeader
                action={
                  <IconButton color='primary' aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
                title="my goal" 
            />
            <CardContent>
              <Typography>
                sample....
              </Typography>
            </CardContent>
        </Card>        
    );
}