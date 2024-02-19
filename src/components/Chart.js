import React from 'react';
import { Bar } from 'react-chartjs-2';



export default function HorizontalBarChart(props){
   console.log(props.user.projects)

   let projectTasks = props.user.projects.map(project=> {
       return(project.tasks)
   }).flat()

// console.log(projectTasks)
   let projectTasksDescription = projectTasks.map(task=> {
           return(task.description)
   })

   let projectTasksStartDate =projectTasks.map(task=> {
    return(task.start_date)
   })

//  console.log(projectTasksStartDate)

   let start_dates = projectTasksStartDate.map(date=> {
       return new Date(date)
   })

   console.log(start_dates)

   let projectTasksEndDate =projectTasks.map(task=> {
    return(task.end_date)
   })

   console.log(projectTasksEndDate)

   let end_dates = projectTasksEndDate.map(date=> {
       return new Date(date)
   })

   console.log(end_dates)  
   
   let durationsInMilliseconds = end_dates.map((end_date, index) => {
       return end_date - start_dates[index]
       
   })

   console.log(durationsInMilliseconds)

   let durationInDays = durationsInMilliseconds.map(duration => {
       return duration/(3600*1000*24)
   })

console.log(durationInDays)   
   const data = {
    labels: projectTasksDescription,
    datasets: [
      {
        label: 'Task Timeline',
        data: durationInDays,
        backgroundColor: [
          '#20322A',
          '#20322A',
          '#20322A',
          '#20322A',
          '#20322A',
          '#20322A',
        ],
        borderColor: [
          '#20322A',
          '#20322A',
          '#20322A',
          '#20322A',
          '#20322A',
          '#20322A',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: '',
      },
    },
  };

 return (
    <div>
      <h1 className='title'>Projects Timeline</h1>
      
      <Bar data={data} options={options} />
    </div>
 )
}



