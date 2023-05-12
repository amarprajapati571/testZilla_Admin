import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const UsersWidgets = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: 'basic-line'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      }
    },
    series: [
      {
        name: 'Users',
        data: [12, 19, 3, 5, 2, 30]
      }
    ]
  });

  return (
    <>
          <div class="col-sm-12">
          <div class="card mb-4">
                                    <div class="card-header with-elements pb-0">
                                        <h6 class="card-header-title mb-0">User Details</h6>
                                        </div>
                                        
                    <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="line"
                height={350}
              />
              </div>
          </div>
    </>
    
  );
};

export default UsersWidgets;
