import * as React from 'react';
import './App.scss';
import Dashboard from './Dashboard/Dashboard';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <Dashboard />
        </div>
    );
};

export default App;
