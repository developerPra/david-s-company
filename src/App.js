import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <TopBar />
      <Dashboard />
    </>
  );
}

export default App;
