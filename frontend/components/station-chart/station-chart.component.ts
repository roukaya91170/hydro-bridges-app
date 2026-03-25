import { Component } from 'react';
import { Line } from 'react-chartjs-2';

class StationChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [], // Add time labels here
        datasets: [{
          label: 'Water Level Observations',
          data: [], // Add water level data here
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 2,
        }],
      },
    };
  }

  componentDidMount() {
    this.fetchWaterLevelData();
  }

  fetchWaterLevelData() {
    // Simulate fetching data from an API
    const sampleData = {
      labels: ['2026-03-20', '2026-03-21', '2026-03-22', '2026-03-23', '2026-03-24', '2026-03-25'],
      data: [2.5, 3.0, 2.8, 3.2, 3.5, 3.0],
    };
    this.setState({
      chartData: {
        labels: sampleData.labels,
        datasets: [{
          ...this.state.chartData.datasets[0],
          data: sampleData.data,
        }],
      },
    });
  }

  render() {
    return (
      <div>
        <h2>Water Level Observations</h2>
        <Line data={this.state.chartData} />
      </div>
    );
  }
}

export default StationChart;