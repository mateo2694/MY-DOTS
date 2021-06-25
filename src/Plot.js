import React from 'react';
import './Plot.css';
//import Plotly from "plotly.js-basic-dist";
import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";


const Plot = createPlotlyComponent(Plotly);
const FONT_FAMILY = 'Roboto, sans-serif';
const FONT_SIZE = 11;
const FONT_COLOR = '#808080';

export class Bars extends React.Component {
  render() {
    return (
      <div>
        <Plot className='plot'
          data={[
            {
              x: this.props.x,
              y: this.props.y,
              type: 'bar',
              marker: { color: this.props.color }
            }
          ]}
          layout={{
            font: {
              family: FONT_FAMILY,
              size: FONT_SIZE,
              color: FONT_COLOR
            },
            autosize: true,
            title: this.props.title,
            xaxis: { title: this.props.xtitle },
            yaxis: { title: this.props.ytitle }
          }}
          config={{ displaylogo: false }}
          useResizeHandler={true}
        />
      </div>
    );
  }
}

export class Scatter extends React.Component {
  render() {
    return (
      <div>
        <Plot className='plot'
          data={[
            {
              x: this.props.x,
              y: this.props.y,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: this.props.color }
            }
          ]}
          layout={{
            font: {
              family: FONT_FAMILY,
              size: FONT_SIZE,
              color: FONT_COLOR
            },
            autosize: true,
            title: this.props.title,
            xaxis: { title: this.props.xtitle },
            yaxis: { title: this.props.ytitle }
          }}
          config={{ displaylogo: false }}
          useResizeHandler={true}
        />
      </div>
    );
  }
}

export class Bubbles extends React.Component {
  render() {
    return (
      <div>
        <Plot className='plot'
          data={[
            {
              x: this.props.x,
              y: this.props.y,
              mode: 'markers',
              marker: {
                size: this.props.size,
                color: this.props.color
              }
            }
          ]}
          layout={{
            font: {
              family: FONT_FAMILY,
              size: FONT_SIZE,
              color: FONT_COLOR
            },
            autosize: true,
            title: this.props.title,
            xaxis: { title: this.props.xtitle },
            yaxis: { title: this.props.ytitle }
          }}
          config={{ displaylogo: false }}
          useResizeHandler={true}
        />
      </div>
    );
  }
}

export class Histogram extends React.Component {
  render() {
    return (
      <div>
        <Plot className='plot'
          data={[
            {
              x: this.props.x,
              type: 'histogram',
              marker: { color: this.props.color },
              autobinx: false,
              xbins: {
                start: this.props.xbins[0],
                end: this.props.xbins[1],
                size: this.props.xbins[2]
              }
            }
          ]}
          layout={{
            font: {
              family: FONT_FAMILY,
              size: FONT_SIZE,
              color: FONT_COLOR
            },
            autosize: true,
            title: this.props.title,
            xaxis: { title: this.props.xtitle },
            yaxis: { title: this.props.ytitle }
          }}
          config={{ displaylogo: false }}
          useResizeHandler={true}
        />
      </div>
    );
  }
}

export class MultiHistogram extends React.Component {
  render() {
    const data = new Array(this.props.x.length);

    this.props.x.forEach((x, index) => {
      data[index] = {
        name: this.props.name[index],
        x: [...x],
        type: 'histogram',
        opacity: this.props.opacity[index],
        marker: { color: this.props.color[index] },
      };
    });

    return (
      <div>
        <Plot className='plot'
          data={data}
          layout={{
            font: {
              family: FONT_FAMILY,
              size: FONT_SIZE,
              color: FONT_COLOR
            },
            autosize: true,
            title: this.props.title,
            xaxis: { title: this.props.xtitle },
            yaxis: { title: this.props.ytitle },
            barmode: 'overlay'
          }}
          config={{ displaylogo: false }}
          useResizeHandler={true}
        />
      </div>
    );
  }
}

export class Heatmap extends React.Component {
  render() {
    return (
      <div>
        <Plot className='plot'
          data={[
            {
              z: this.props.z,
              x: this.props.x,
              y: this.props.y,
              type: 'heatmap',
              hoverongaps: false,
              colorscale: this.props.colorscale
            }
          ]}
          layout={{
            font: {
              family: FONT_FAMILY,
              size: FONT_SIZE,
              color: FONT_COLOR
            },
            autosize: true,
            title: this.props.title,
            xaxis: { title: this.props.xtitle },
            yaxis: { title: this.props.ytitle }
          }}
          config={{ displaylogo: false }}
          useResizeHandler={true}
        />
      </div>
    );
  }
}