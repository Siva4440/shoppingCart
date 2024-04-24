import React from "react";
import { Chart } from "react-google-charts";

const GooglePieChart = ({data}) => {
    
        
    const participationData = data.map((item) => [`${item.firstName} ${item.lastName}`, parseFloat(item.participation)]);


        

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={[['Name','Participation'],...participationData]}
        options={{
            title:"Participation Chart "
        }}
        loader={<div>Loading Chart </div>}
        width={"500px"}
        height={"400px"}
      />
    </div>
  );
};

export default GooglePieChart;
