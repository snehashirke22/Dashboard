import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <div className="App">
     <Header toggleSidebar={toggleSidebar}/>
     
     <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div className="content">
         <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
