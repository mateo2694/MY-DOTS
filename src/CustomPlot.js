import React from 'react';
import './CustomPlot.css';
//import Plotly from "plotly.js-basic-dist";
import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";


const Plot = createPlotlyComponent(Plotly);

export class BarPlot extends React.Component {
  render() {
    return (
      <div className='my-plot-container'>
        <Plot className='plot'
          data={[
            {
              x: this.props.date,
              y: this.props.usage,
              type: 'bar'
            }
          ]}
          useResizeHandler={true}
          layout={{
            font: {
              family: 'Roboto, sans-serif',
              size: 13,
              color: '#808080'
            },
            paper_bgcolor: '#f2f2f2',
            plot_bgcolor: '#f2f2f2',
            autosize: true,
            title: 'Regular bar plot',
            xaxis: { title: 'X' },
            yaxis: { title: 'Y' }
          }}
          config={{ displaylogo: false }}
        />
      </div>
    );
  }
}

export class ScatterPlot extends React.Component {
  render() {
    return (
      <div className='my-plot-container'>
        <Plot className='plot'
          data={[
            {
              x: this.props.date,
              y: this.props.usage,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'red' },
            }
          ]}
          useResizeHandler={true}
          layout={{
            autosize: true,
            title: 'Scatter plot',
            xaxis: { title: 'X' },
            yaxis: { title: 'Y' }
          }}
          config={{ displaylogo: false }}
        />
      </div>
    );
  }
}

export class BubbleChart extends React.Component {
  render() {
    return (
      <div className='my-plot-container'>
        <Plot className='plot'
          data={[
            {
              x: this.props.date,
              y: this.props.usage,
              mode: 'markers',
              marker: {
                size: this.props.usage,
                color: this.props.usage.map((usage) => usage < 40 ? 'red' : 'green')
              }
            }
          ]}
          useResizeHandler={true}
          layout={{
            autosize: true,
            title: 'Bubbles',
            xaxis: { title: 'X' },
            yaxis: { title: 'Y' }
          }}
          config={{ displaylogo: false }}
        />
      </div>
    );
  }
}

export class HistogramPlot extends React.Component {
  render() {
    return (
      <div className='my-plot-container'>
        <Plot className='plot'
          data={[
            {
              x: this.props.usage,
              type: 'histogram',
              marker: {
                color: 'pink'
              },
              autobinx: false,
              xbins: {
                end: 100,
                size: 5,
                start: 0
              }
            }
          ]}
          useResizeHandler={true}
          layout={{
            autosize: true,
            title: 'Histogram',
            xaxis: { title: 'X' },
            yaxis: { title: 'Y' }
          }}
          config={{ displaylogo: false }}
        />
      </div>
    );
  }
}

export class Heatmap extends React.Component {
  render() {
    return (
      <div className='my-plot-container'>
        <Plot className='plot'
          data={[
            {
              z: this.props.z,
              x: this.props.x,
              y: this.props.y,
              type: 'heatmap',
              hoverongaps: false,
              colorscale: [[0, '#66e6ff'], [0.5, '#cc66ff'], [1, '#f28f49']]
            }
          ]}
          useResizeHandler={true}
          layout={{
            autosize: true,
            title: 'Heatmap',
            xaxis: { title: 'X' },
            yaxis: { title: 'Y' }
          }}
          config={{ displaylogo: false }}
        />
      </div>
    );
  }
}