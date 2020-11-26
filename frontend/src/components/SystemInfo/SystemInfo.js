
import React from 'react'
import ReactApexChart from 'react-apexcharts'


class ApexChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [44, 55],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: [ 'Used', 'Free'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    };
  }


  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
      </div>
    );
  }
}


function PieChart() {
    

    return (
        <>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                <div className="tm-bg-primary-dark tm-block tm-block-taller">
                    <h2 className="tm-block-title" style={{marginBottom:'10px'}}>Storage Information</h2>
    <p style={{color:'white'}}>Total Storage Capacity: 1000 GB</p>
                    <div id="pieChartContainer">
                       <ApexChart />
                    </div>
                </div>
            </div>
        </>
    )
}






export default PieChart;