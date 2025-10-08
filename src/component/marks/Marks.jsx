import React, { use } from 'react';
import { LineChart,Line,XAxis,YAxis,Tooltip } from 'recharts';
const Marks = ({chart}) => {
    const chartlist=use(chart)
    // const data=charlist.data;
    console.log(chartlist);
    const onlyData=chartlist.data;

    const studentDetail=onlyData.map((student)=>{
        const origanisedData={
            id:student.studentId,
            name:student.studentName,
            bangla:student.marks.bangla,
            english:student.marks.english,
            math:student.marks.math,
            chemistry:student.marks.chemistry,
            physics:student.marks.physics
        }
        const avg=(origanisedData.chemistry+origanisedData.physics+origanisedData.math)/3;
        origanisedData.avg=avg
        return origanisedData;
    })
    console.log(studentDetail);
    return (
        <div>
            <LineChart height={600} width={600} data={studentDetail}>
                <Line dataKey={"chemistry"}></Line>
                <Line dataKey={"math"}></Line>
                <Line dataKey={"avg"}></Line>
                <XAxis dataKey={"name"} ></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Marks;