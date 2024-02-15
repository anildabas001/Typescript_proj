import React, { type FormEvent, useState } from 'react';
import { Goal } from '../TypeDefinitions/typeDefinition';
import { TextField, Button, Grid } from '@mui/material';

type TextInput = {value: string; error: boolean; errorMessage: string;};

export default function GoalForm(props: {addGoalToList: (goal: Goal) => void; prevId: number;}) {

    let [goal, updateGoal] = useState<TextInput>({value: '', error: false, errorMessage: ''});
    let [description, updateDescription] = useState<TextInput>({value: '', error: false, errorMessage: ''});

    function clearForm () {
        updateGoal({value: '', error: false, errorMessage: ''});
        updateDescription({value: '', error: false, errorMessage: ''});
    }

    function submitGoal (event: FormEvent): void {
        let formValid = true;
        if (goal.value === '') {
            updateGoal({value: '', error: true, errorMessage: 'Please enter the Goal.'});
            formValid = false;
        }

        if (description.value === '') {
            updateDescription({value: '', error: true, errorMessage: 'Please enter the description.'});
            formValid = false;
        }

        if (formValid) {
            let newId = props.prevId + 1;
            props.addGoalToList({title: goal.value, description: description.value, id: newId});            
            clearForm();
        }

    }


    return (
        <Grid item xs={12} textAlign={"center"} sx={{backgroundColor: 'white', borderRadius: 2, padding: "7px"}}>  
            <TextField 
                required 
                placeholder="Please enter your goal" 
                value={goal.value} 
                error = {goal.error}
                helperText={goal.errorMessage}
                onChange={event => {updateGoal({value: event.target.value,  error: false, errorMessage: ''});}} 
                fullWidth id="goal" 
                label="Goal" 
                variant="standard" 
                sx={{marginBottom: '15px'}}
            />
            <TextField 
                required 
                placeholder="Please enter goal description" 
                value={description.value}
                error = {description.error}
                helperText={description.errorMessage}
                onChange={event => {updateDescription({value: event.target.value,  error: false, errorMessage: ''});}} 
                fullWidth id="goal" 
                label="Goal Description" 
                variant="standard" 
                sx={{marginBottom: '15px'}}
            />            
            <Button 
                onClick={(event) => {submitGoal(event)}} sx={{width: '60%', marginTop: '10px'}} 
                variant="contained"
            >
                    Submit your Goal
            </Button>
        </Grid>        
    );
}