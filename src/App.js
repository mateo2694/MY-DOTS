import './App.css';
import Header from './Header.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import { BarPlot, ScatterPlot, BubbleChart, HistogramPlot, Heatmap } from './CustomPlot.js';
import data from './usageData.js';

// week days
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Data
const timestamp = data.map(chunk => chunk['timestamp']);
const usage = data.map(chunk => chunk['utilizacion-turno-porcentual'].toFixed(1));
const date = timestamp.map(timestamp => new Date(timestamp));
const days = date.map(date => weekDays[date.getDay()]);

const dailyUsage = new Array(weekDays.length);

weekDays.forEach((day, index) => {
  dailyUsage[index] = usage.filter(function (usage, index) {
    return this[index] === day ? usage : 0;
  }, days);
});

const MIN_USAGE = Math.min(...usage);
const MAX_USAGE = Math.max(...usage);
const NUM_RANGES = 20;

let limits = new Array(NUM_RANGES + 1).fill(0).map((value, index) => {
  return value += (MAX_USAGE - MIN_USAGE) / NUM_RANGES * index + MIN_USAGE;
});

// fix
limits[0] -= 0.1;
limits[NUM_RANGES] += 0.1;

let heatmapUsage = new Array(NUM_RANGES).fill(null).map(value => {
  return new Array(weekDays.length).fill(null);
});

dailyUsage.forEach((usage, col) => {
  limits.forEach((limit, row) => {
    if (row === 0) {
      return;
    }

    const count = usage.filter(usage => usage > limits[row - 1] && usage <= limit).length;
    if (count > 0) {
      heatmapUsage[row - 1][col] = count;
    }

  });
});


console.log(dailyUsage);


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <BarPlot date={date} usage={usage}></BarPlot>
      <ScatterPlot date={date} usage={usage}></ScatterPlot>
      <BubbleChart date={date} usage={usage}></BubbleChart>
      <HistogramPlot date={date} usage={usage}></HistogramPlot>
      <Heatmap x={weekDays} y={limits} z={heatmapUsage}></Heatmap>
      <Footer></Footer>
    </div>
  );
}

export default App;