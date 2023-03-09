import './App.css';
import BarAndLineChart from './Pages/BarAndLineChart';
import BarChart from './Pages/BarChart';
import CandlestickCharts from './Pages/CandlestickChart';
import Chart from './Pages/Chart';
import ComposedCharts from './Pages/ComposedChart';
import LineCharts from './Pages/LineChart';


function App() {
  return (
    <div className='App'>
      <h1>Practicing Charts</h1>

      <LineCharts />
      <BarChart />
      <ComposedCharts />
      <BarAndLineChart />
      <CandlestickCharts />

    </div>
  );
}

export default App;
