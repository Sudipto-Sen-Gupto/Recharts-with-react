import React from 'react';
import { LineChart, Line,XAxis,YAxis,ZAxis,Tooltip,BarChart ,Bar,PieChart,Pie} from 'recharts';

const datum = [
  {
    "name": "Rahim",
    "math": 85,
    "bangla": 78,
    "english": 82,
    "biology": 74,
    "physics": 80,
    "chemistry": 77,
    "highermath": 88,
    "ict": 90
  },
  {
    "name": "Karim",
    "math": 79,
    "bangla": 85,
    "english": 80,
    "biology": 70,
    "physics": 75,
    "chemistry": 72,
    "highermath": 83,
    "ict": 87
  },
  {
    "name": "Rahman",
    "math": 32,
    "bangla": 81,
    "english": 85,
    "biology": 78,
    "physics": 88,
    "chemistry": 84,
    "highermath": 91,
    "ict": 89
  },
  {
    "name": "Amar",
    "math": 74,
    "bangla": 70,
    "english": 76,
    "biology": 68,
    "physics": 72,
    "chemistry": 69,
    "highermath": 75,
    "ict": 80
  },
  {
    "name": "Antony",
    "math": 88,
    "bangla": 79,
    "english": 83,
    "biology": 86,
    "physics": 85,
    "chemistry": 82,
    "highermath": 89,
    "ict": 91
  },
  {
    "name": "Akbar",
    "math": 69,
    "bangla": 74,
    "english": 72,
    "biology": 65,
    "physics": 70,
    "chemistry": 68,
    "highermath": 73,
    "ict": 78
  }
]


const Singledata = () => {
    console.log(datum);
    
    return (
        <div>
            <LineChart height={500} width={500} data={datum}>
         <Line type={'monotone'} dataKey="math" stroke='purple'></Line>
         <Line dataKey="biology" stroke="green"></Line>
            
           <XAxis dataKey={"name"}></XAxis>
           <YAxis></YAxis>
           <ZAxis ></ZAxis>
            <Tooltip />
           </LineChart>

           <BarChart width={600} height={600} data={datum}>
            <Bar dataKey={"math"}></Bar>
            <Bar dataKey="highermath"></Bar>
            <Bar dataKey={"physics"}></Bar>
            <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>
           </BarChart>
           <PieChart width={600} height={600} data={datum}>
              <Pie data={datum} dataKey="math" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={datum} dataKey="chemistry" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
             <XAxis dataKey={"name"}></XAxis>
           </PieChart>
        </div>
    );
};

export default Singledata;