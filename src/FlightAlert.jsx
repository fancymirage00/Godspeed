
import React from 'react';

function FlightAlert() {
    return (

        <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Flight</dt>
                    <dd className="text-gray-700 sm:col-span-2">0P-141</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Departure</dt>
                    <dd className="text-gray-700 sm:col-span-2">08:50</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Arrival</dt>
                    <dd className="text-gray-700 sm:col-span-2">23:50</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Trip Type</dt>
                    <dd className="text-gray-700 sm:col-span-2">One Way</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Duration</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                        15 Hours

                    </dd>
                </div>
            </dl>
        </div>


    );
};

export default FlightAlert;