import React from 'react';
import { Bar } from 'react-chartjs-2';



export default function HorizontalBarChart(props){
   console.log(props.user.projects)

   let projectTasks = props.user.projects.map(project=> {
       return(project.tasks)
   }).flat()

console.log(projectTasks)
   let projectTasksDescription = projectTasks.map(task=> {
           return(task.description)
   })

   let projectTasksStartDate =projectTasks.map(task=> {
    return(task.start_date)
   })

   console.log(projectTasksStartDate)

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
        label: 'Project Timeline',
        data: durationInDays,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
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
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };

 return (
    <div>
      <h1 className='title'>Horizontal Bar Chart</h1>
      
      <Bar data={data} options={options} />
    </div>
 )
}



