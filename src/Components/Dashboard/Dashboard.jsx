import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const students = [
        { id: 1, name: "John", math: 80, science: 75, english: 90 },
        { id: 2, name: "Mary", math: 90, science: 85, english: 80 },
        { id: 3, name: "Bob", math: 70, science: 80, english: 75 },
        { id: 4, name: "Alice", math: 85, science: 90, english: 95 },
        { id: 5, name: "David", math: 60, science: 70, english: 27 },
        { id: 6, name: "Emma", math: 75, science: 80, english: 85 },
        { id: 7, name: "Sara", math: 40, science: 85, english: 10 },
        { id: 8, name: "William", math: 85, science: 90, english: 75 },
        { id: 9, name: "Hannah", math: 80, science: 75, english: 40 },
        { id: 10, name: "Oliver", math: 10, science: 85, english: 80 },
        { id: 11, name: "Sophia", math: 70, science: 10, english: 75 },
        { id: 12, name: "Lucas", math: 85, science: 90, english: 95 }
      ];
      
    return (
        <div>
            
            <LineChart 
            
            width={700}
            height={400}
            data={students}
            >
                <Line dataKey="math"> </Line>
                <Tooltip />
                <XAxis dataKey="name" />
                <YAxis />
                <Line dataKey="science"> </Line>
                <Line dataKey="english"> </Line>
            </LineChart>
        </div>
    );
};

export default Dashboard;