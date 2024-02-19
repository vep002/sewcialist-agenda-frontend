import ProjectDetails from './ProjectDetails';
import {Switch, Link, Route, withRouter, Redirect} from 'react-router-dom';
// import AddTaskForm from './AddTaskForm';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid,
         Card,
         CardActionArea,
         CardActions,
         CardContent,
         CardMedia,
         Button,
         Typography 
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

export default function Project(props) {
    console.log(props)
    const classes = useStyles()

    // let arrayOfTasks = props.project.tasks.map((task) => {
    //     return(<li key={task.id}>{task.description}</li>)
    // })

   

    // let renderProjectDetails = () => {
    //     console.log(props)
    //     return <ProjectDetails addTask={props.addTask} addMaterial={props.addMaterial} deleteProject={props.deleteProject} project={props.project} history={props.history} user={props.currentUser} updateProject={props.updateProject}/>
    // }

    const handleClick = (e) => {
        console.log(props)
        props.history.push(`/projects/${props.project.id}/projectdetails`);
        // renderProjectDetails()
      }

   
    return (
        <div className={classes.root}>
            <Grid
              containerspacing={2}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={12} sm={6} md={3}>
            <Card 
            style={{backgroundColor: '#E7EFC5'}}
            id='projectcard'
            >
                <CardActionArea>
                <CardMedia
                className={classes.media}
                image={`${props.project.mock_up}`}
                title="project"
                />
                <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Description:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.project.description}
          </Typography>
        </CardContent>
        </CardActionArea>
              {/* <h1>Description:</h1> */}
              {/* <p>{props.project.description}</p> */}
              {/* <h2>Mock up:</h2>
              {/* <img src={}/> */}
              {/* <h2>Tasks:</h2>
              <p>{arrayOfTasks}</p> */} 
        <CardActions>
                <Button
                variant="contained"
                color="default"
                onClick={handleClick}
                >View</Button>
        </CardActions>        
              {/* <button>Update</button> */}
              {/* <button onClick={handleDelete}>Delete</button> */}
                {/* <AddTaskForm/> */}
            </Card>
            <Switch>
            
            </Switch>
            </Grid>
           
        </Grid>    
        </div>
    )
}
