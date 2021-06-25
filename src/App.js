import './App.css';
import Header from './Header.js';
import Navbar from './Navbar.js';
import Grid from './Grid.js';
import { Bars, Bubbles, Histogram, MultiHistogram, Heatmap } from './Plot.js';
import Footer from './Footer.js';
import data from './usageData.js';

// Week days
const weekDays = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'];

// Extract data
const usage = data.map(chunk => chunk['utilizacion-turno-porcentual']);
const timestamps = data.map(chunk => chunk['timestamp']);
const dates = timestamps.map(timestamp => new Date(timestamp));
const days = dates.map(date => weekDays[date.getDay()]);
const hours = dates.map(date => date.getHours());
const shifts = [...new Set(hours)];

let dailyUsage = new Array(weekDays.length);
let shiftUsage = new Array(shifts.length);

// Set daily usage
weekDays.forEach((day, index) => {
  dailyUsage[index] = usage.filter(function (usage, index) {
    return this[index] === day ? usage : 0;
  }, days);
});

// Set shift usage
shifts.forEach((shift, index) => {
  shiftUsage[index] = usage.filter(function (usage, index) {
    return this[index] === shift ? usage : 0;
  }, hours);
});

// Heatmap related parameters
const MIN_USAGE = Math.min(...usage);
const MAX_USAGE = Math.max(...usage);
const NUM_RANGES = 20;

let limits = new Array(NUM_RANGES + 1).fill(0).map((value, index) => {
  return value += (MAX_USAGE - MIN_USAGE) / NUM_RANGES * index + MIN_USAGE;
});

// Fix lower and upper limits
limits[0] -= 0.1;
limits[NUM_RANGES] += 0.1;

let heatmapUsage = new Array(NUM_RANGES).fill(null).map(value => {
  return new Array(weekDays.length).fill(null);
});

// Set heatmap z values
dailyUsage.forEach((usage, col) => {
  limits.forEach((limit, row) => {
    if (row === 0) { return; }
    const count = usage.filter(usage => usage > limits[row - 1] && usage <= limit).length;

    if (count > 0) {
      heatmapUsage[row - 1][col] = count;
    }
  });
});


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Grid>
        <Bars
          x={dates}
          y={usage.map(usage => Math.round(usage * 10) / 10)}
          title='Utilización por fecha'
          xtitle='Fecha'
          ytitle='% utilización'
          color='#b3b3b3'>
        </Bars>
        <Histogram
          x={usage}
          title='Distribución'
          xtitle='% utilización'
          ytitle='Ocurrencias'
          color='#39dfaa'
          xbins={[0, 100, 5]}>
        </Histogram>
        <MultiHistogram
          x={shiftUsage}
          name={shifts}
          title='Distribución por turno'
          xtitle='% utilización'
          ytitle='Ocurrencias'
          opacity={[0.9, 0.7]}
          color={['#1ebbf0', '#dddb00']}>
        </MultiHistogram>
        <Heatmap
          x={weekDays}
          y={limits.map(limit => Math.round(limit * 10) / 10)}
          z={heatmapUsage}
          title='Distribución por día'
          xtitle='Día'
          ytitle='% utilización'
          colorscale={[[0, '#1ebbf0'], [0.5, '#39dfaa'], [1, '#dddb00']]}>
        </Heatmap>
        <Bubbles
          x={dates}
          y={usage.map(usage => Math.round(usage * 10) / 10)}
          size={usage.map(usage => usage / 4 + 10)}
          title='Utilización por fecha'
          xtitle='Fecha'
          ytitle='% utilización'
          color={usage.map(usage => usage < 35 ? '#e65639' : '#39dfaa')}>
        </Bubbles>
      </Grid>
      <Footer></Footer>
    </div>
  );
}

export default App;