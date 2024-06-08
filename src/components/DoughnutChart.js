import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import '../styles/DoughnutChart.css';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ deposit, profit }) => {
    const data = {
        labels: ['Deposit', 'Profit'],
        datasets: [
            {
                label: 'Amount',
                data: [deposit, profit],
                backgroundColor: ['#6C63FF', ' #00FF00'],
                hoverBackgroundColor: ['#6C63FF', ' #00FF00'],
                borderWidth: 0, // Remove the white outline
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        cutout: '70%', // Adjust the cutout percentage if needed
    };

    return (
        <div className="chart-container">
            <Doughnut className="canvas" data={data} options={options} />
        </div>
    );
};

export default DoughnutChart;
