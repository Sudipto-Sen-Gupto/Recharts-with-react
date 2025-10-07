import React, { use } from 'react';

import Singledata from './singledata/Singledata';

const Linechart = ({chart}) => {
    const data=use(chart)
    console.log(data);
   
    return (
        <div>
            {/* {
                data.map(datum=><Singledata key={datum.name} datum={datum}></Singledata>)
            } */}
           <Singledata></Singledata>
        </div> 
    );
};

export default Linechart;