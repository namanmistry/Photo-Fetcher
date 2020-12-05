import React from 'react'
import ReactApexChart from 'react-apexcharts'

//This Component Will Display A Pie Chart Based On The System Info Comming From The Server
//Remaining To Set
class ApexChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      series: [parseInt(this.props.data.used), parseInt(this.props.data.free)],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Used', 'Free'],
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


function PieChart(props) {


  return (
    <>
      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
        <div className="tm-bg-primary-dark tm-block tm-block-taller">
          <h2 className="tm-block-title" style={{ marginBottom: '10px' }}>Storage Information</h2>
          <p style={{ color: 'white' }}>Total Storage Capacity: 100 GB</p>
          <div id="pieChartContainer">
            <ApexChart {...props} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PieChart;