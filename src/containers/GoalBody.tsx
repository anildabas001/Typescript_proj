import React, { useState } from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import{ styled } from '@mui/material/styles';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GoalForm from '../components/GoalForm';
import GoalList from '../components/GoalList';
import { Goal } from '../TypeDefinitions/typeDefinition';

const DemoPaper = styled(Paper)(({theme}) => ({
    height: '90vh',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    backgroundColor: 'black'
}));

export default function GoalBody() {
  let goalList: Goal[] = [];

  let [goalData, updateGoalList] = useState(goalList);

  function addGoalToList (goal: Goal): void {
    let updatedGoalData: Goal[] = [...goalList, goal]
    
    updateGoalList(updatedGoalData);
  }
  
  return (
      <Container maxWidth="sm">
        <DemoPaper square={false} elevation={3}>
          <Grid container sx={{ width: '100%', margin: 0 }} alignSelf={"center"} xs={12} spacing={2}>
            <Grid item xs={12} textAlign="center">
              <ListAltIcon sx={{fontSize: '4.6rem', color: 'white'}} />
              <Typography variant="h4" color={'white'}>
                Course Goals
              </Typography>
            </Grid>                 
            <GoalForm />              
            <GoalList />
          </Grid>
        </DemoPaper>   
      </Container>
  );
}
