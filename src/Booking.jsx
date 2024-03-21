import { CalendarIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'    // Import the useState hook from React
import { useNavigate } from 'react-router-dom';


export default function Booking() {

    const [tripType, setTripType] = useState('one-way');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
    const navigate = useNavigate();
    

    const increment = (type) => {
        if (type === 'adults') setAdults(adults + 1);
        else if (type === 'children') setChildren(children + 1);
        else if (type === 'infants') setInfants(infants + 1);
    }
    console.log(adults, children, infants);

    const decrement = (type) => {
        if (type === 'adults') {
            if (adults > 1) setAdults(adults - 1);
        } else if (type === 'children') {
            if (children > 0) setChildren(children - 1);
        } else if (type === 'infants') {
            if (infants > 0) setInfants(infants - 1);
        }
    }

    const calculateFlightDuration = () => {
        // Generate a random flight duration between 1 and 15 hours
        return Math.floor(Math.random() * 15) + 1;
    };

    const handleBooking = () => {
        // Prepare data to pass to Flightpage.jsx
        const data = {
            leavingFrom: document.getElementById('leaving-from').value,
            goingTo: document.getElementById('going-to').value,
            departureDate: document.getElementById('departure-date').value,
            flightDuration: calculateFlightDuration()
        };
        console.log(data);

        navigate('/flightpage', { state: data });
    };

    return (
        <div className="p-10">
            <form onSubmit={handleBooking}>
                <div className="space-y-12 p-8">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="relative inline-block">
                            <h2 className="text-base font-semibold leading-7 text-gray-900 w-full">Godspeed Airways</h2>
                            <div className="top-7 absolute left-0 bottom-0 h-1 w-full bg-yellow-500 rounded"></div>
                        </div>


                        <div className="mt-4 flex flex-col justify-center items-center">
                            <label className="block text-sm font-bold text-gray-700">Trip Type</label>
                            <div className="mt-2 flex">
                                <label className="inline-flex items-center mr-6">
                                    <input
                                        type="radio"
                                        className="form-radio h-4 w-4 text-yellow-600 focus:ring-yellow-500"
                                        name="trip-type"
                                        value="one-way"
                                        checked={tripType === 'one-way'}
                                        onChange={() => setTripType('one-way')}
                                    />
                                    <span className="ml-2 text-sm text-gray-900">One-way</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio h-4 w-4 text-yellow-600 focus:ring-yellow-500"
                                        name="trip-type"
                                        value="round-trip"
                                        checked={tripType === 'round-trip'}
                                        onChange={() => setTripType('round-trip')}
                                    />
                                    <span className="ml-2 text-sm text-gray-900">Round-trip</span>
                                </label>
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                            <div>
                                <label htmlFor="leaving-from" className="block text-sm font-medium leading-6 text-gray-900">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        Leaving From
                                    </div>

                                </label>
                                <div className="mt-2">
                                    <select
                                        id="leaving-from"
                                        name="leaving-from"
                                        autoComplete="off"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                    >
                                        <option value="Accra">Accra</option>
                                        <option value="New York">New York</option>
                                        <option value="Los Angeles">Los Angeles</option>
                                        <option value="Chicago">Chicago</option>
                                        <option value="San Francisco">San Francisco</option>
                                        <option value="Miami">Miami</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="going-to" className="block text-sm font-medium leading-6 text-gray-900">
                                    <div className="flex items-center">
                                        Going To &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                        </svg>


                                    </div>
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="going-to"
                                        name="going-to"
                                        autoComplete="off"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="Kumasi">Kumasi</option>
                                        <option value="London">London</option>
                                        <option value="Paris">Paris</option>
                                        <option value="Tokyo">Tokyo</option>
                                        <option value="Sydney">Sydney</option>
                                        <option value="Dubai">Dubai</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="departure-date" className="block text-sm font-medium leading-6 text-gray-900">
                                    Departure Date
                                </label>
                                <div className="mt-2 relative">
                                    <input
                                        id="departure-date"
                                        name="departure-date"
                                        type="date"
                                        defaultValue={formattedDate}
                                        min={formattedDate}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <span className="absolute right-0 top-0 bottom-0 flex items-center px-3 pointer-events-none">
                                        <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="return-date" className="block text-sm font-medium leading-6 text-gray-900">
                                    Return Date
                                </label>
                                <div className="mt-2 relative">
                                    <input
                                        id="return-date"
                                        name="return-date"
                                        type="date"
                                        min={formattedDate}
                                        defaultValue={formattedDate}
                                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${tripType === 'one-way' ? 'hidden' : ''}`}
                                    />
                                    <span className="absolute right-0 top-0 bottom-0 flex items-center px-3 pointer-events-none">
                                        <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="block text-sm font-medium text-black-700">Passengers</label>
                                <div className="flex mt-2">
                                    <div className="flex relative flex-col mr-4">
                                        <label htmlFor="adults" className="text-gray-700 text-sm font-medium">Adults (12+ yrs)</label>
                                        <div className="flex items-center mt-1 border p-1 rounded-md justify-between">
                                            <button type="button" className="text-gray-500 focus:outline-none focus:text-gray-600" onClick={() => decrement('adults')}>-</button>
                                            <span className="mx-2 text-sm ">{adults}</span>
                                            <button type="button" className="text-gray-500 focus:outline-none focus:text-gray-600" onClick={() => increment('adults')}>+</button>
                                        </div>
                                    </div>
                                    <div className="flex relative flex-col mr-4">
                                        <label htmlFor="children" className="text-gray-700 text-sm font-medium">Children (3-11 yrs)</label>
                                        <div className="flex items-center mt-1 border p-1 rounded-md justify-between">
                                            <button type="button" className="text-gray-500 focus:outline-none focus:text-gray-600" onClick={() => decrement('children')}>-</button>
                                            <span className="mx-2 text-sm">{children}</span>
                                            <button type="button" className="text-gray-500 focus:outline-none focus:text-gray-600" onClick={() => increment('children')}>+</button>
                                        </div>
                                        {/* Children increment and decrement buttons */}
                                    </div>
                                    <div className="flex flex-col mr-4 relative">
                                        <label htmlFor="infants" className="text-gray-700 text-sm font-medium">Infants (0-2 yrs)</label>
                                        <div className="flex items-center mt-1 border p-1 rounded-md justify-between">
                                            <button type="button" className="text-gray-500 focus:outline-none focus:text-gray-600" onClick={() => decrement('infants')}>-</button>
                                            <span className="mx-2 text-sm">{infants}</span>
                                            <button type="button" className="text-gray-500 focus:outline-none focus:text-gray-600" onClick={() => increment('infants')}>+</button>
                                        </div>
                                        {/* Infants increment and decrement buttons */}
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>





                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                        
                    >
                        Search Flights
                    </button>
                </div>
            </form>
        </div>
    )

}
