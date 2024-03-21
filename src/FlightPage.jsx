import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PricingFlight from './PricingFlight';
import { Badge } from '@radix-ui/themes';
import FlightAlert from './FlightAlert';
import { Dialog } from '@radix-ui/themes';

// This is a simple flight card component
const FlightCard = ({ data, times }) => {
    const departureDate = new Date(data.departureDate);
    const formattedDate = `${departureDate.getDate()} ${departureDate.toLocaleString('default', { month: 'short' })} ${departureDate.getFullYear()}`;

    return (
        <div className="flight-card bg-white shadow-lg rounded-xl p-4 my-5 flex flex-col justify-between relative flight-details">
            <div className="justify-center items-center flex">
                <p className="font-medium text-gray-600 text-sm">{generateFlightNumber()}</p>
            </div>

            <div className="flex justify-end items-end">
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <button>
                            <Badge color="green" size="1" radius="full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>

                                Flight Information
                            </Badge>
                        </button>
                    </Dialog.Trigger>

                    <Dialog.Content>
                        <FlightAlert />
                        <Dialog.Close>
                            <button>Close</button>
                        </Dialog.Close>
                    </Dialog.Content>



                </Dialog.Root>

            </div>
            <hr className="m-3"></hr>

            <div className="flex justify-between w-full">
                <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-sm font-normal">{formattedDate} </p>
                    <h3 className="text-xl font-medium text-gray-700 justify-center items-center">{times.departureTimeString}</h3>
                    <p className="text-gray-400 text-sm font-medium">({data.leavingFrom})</p>
                </div>

                

                

                <div className="flex justify-center items-center mt-9">
                    <Badge color="red" size="1">{data.flightDuration} Hours</Badge>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-sm font-normal">{formattedDate} </p>
                    <h3 className="text-xl font-medium text-gray-700">{times.arrivalTimeString}</h3>
                    <p className="text-gray-400 text-sm font-medium">({data.goingTo})</p>
                </div>
            </div>
        </div>
    );
};

// This is the main FlightPage component
const FlightPage = () => {
    const location = useLocation();
    const data = location.state;
    const [times, setTimes] = useState({ departureTimeString: '', arrivalTimeString: '' });

    useEffect(() => {
        const times = calculateTimes(data.flightDuration);
        setTimes(times);
    }, [data.flightDuration]);

    return (
        <div className="flight-page bg-gray-100 min-h-screen p-5">
            
            <FlightCard data ={data} times={times}/>
            <PricingFlight></PricingFlight>
        </div>
    );
};

export default FlightPage;

function generateFlightNumber() {
    const letters = String.fromCharCode(
        65 + Math.floor(Math.random() * 26),
        65 + Math.floor(Math.random() * 26)
    );
    const numbers = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
    return letters + '-' + numbers;
}



function calculateTimes(flightDuration) {
    // Generate a random hour and minute (in multiples of 5)
    const departureHour = Math.floor(Math.random() * 24);
    const departureMinute = 5 * Math.floor(Math.random() * 12);

    // Create a new Date object for the departure time
    const departureTime = new Date();
    departureTime.setHours(departureHour, departureMinute);

    // Calculate the arrival time by adding the flight duration to the departure time
    const arrivalTime = new Date(departureTime.getTime() + flightDuration * 60 * 60 * 1000);

    // Format the times as strings
    const departureTimeString = departureTime.toISOString().substr(11, 5);
    const arrivalTimeString = arrivalTime.toISOString().substr(11, 5);

    return { departureTimeString, arrivalTimeString };
}