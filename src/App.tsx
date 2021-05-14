import React, { FC } from 'react';
import './App.scss';
import Dashboard from './Dashboard/Dashboard';

const App: FC = () => {
    return (
        <div className="app-container">
            <Dashboard />
        </div>
    );
};

export default App;
