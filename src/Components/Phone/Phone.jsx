import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Phone = () => {

    const [phonelist, setPhonelist] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const myData = data.data.data;
                const phonesData = myData.map(phone => {
                    const slugInfo = phone.slug;
                    const divideSlug = slugInfo.split("-");
                    const price = +divideSlug[1];
                    const phones = {
                        name: phone.phone_name,
                        price: price
                    }
                    return phones;

                }
                )
                setPhonelist(phonesData)
            })
    }, [])

    console.log(phonelist)

    return (
        <div className='mb-10'>
            <BarChart width={500} height={400} data={phonelist}>
                <Bar dataKey="price" fill="green" />
                <YAxis dataKey="price" />
                <XAxis dataKey="name" />
                <Tooltip />
                <Legend />
            </BarChart>
        </div>
    );
};

export default Phone;