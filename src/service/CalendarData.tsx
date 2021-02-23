/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import axiosInstance from './axiosInstance';
import Url from './Url';
// import Jumpday from './Jumpday';


interface Jumpday {
    id: number;
    date: string;
    start: string;
    end: string;
}

const CalendarData = ({ path }: Url): JSX.Element => {
    const [jumpdays, setJumpdays] = useState<Jumpday[]>([]);

    async function fetchData() {
        await axiosInstance
            .get<Jumpday[]>(path)
            .then(res => {
                const jumpdayData: Jumpday[] = res.data;
                setJumpdays(jumpdayData);
            })
    }

    useEffect(() => {
        fetchData();
        }, [path]);
    
    return (
        <>
            <table>

                <tr>
                    <th>Date</th>
                </tr>
                    {jumpdays.map( row => <tr><td>{ row.date }</td></tr> )}
            </table>
        </>
    );
}

export default CalendarData;
