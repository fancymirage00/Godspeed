import { Flex, Badge } from '@radix-ui/themes';

function PricingFlight() {
    return (
        <div className="flex justify-center items-center">
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
                    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                        <div className="relative p-6 sm:px-8">
                            <h2 className="text-lg font-medium text-gray-900">
                                Business Class
                                <span className="sr-only">Plan</span>
                            </h2>

                            <div className="absolute top-7 right-5">
                                <Flex gap="2">
                                    <Badge color="orange" radius="full">+GHS 10</Badge>

                                </Flex>

                            </div>




                            <p className="mt-2 text-gray-700 text-sm">Elevate your journey with Business Class! Experience spacious seating, gourmet dining, and personalized service from check-in to landing.</p>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> GHS 30 </strong>

                                <span className="text-sm font-medium text-gray-700">/flight</span>
                            </p>

                            <a
                                className="mt-4 block rounded border border-orange-500 bg-orange-500 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-orange-500 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                                href="#"
                            >
                                Choose
                            </a>
                        </div>

                        <div className="p-6 sm:px-8">
                            <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

                            <ul className="mt-2 space-y-2 sm:mt-4">
                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> 1 carry-on bag </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Fufuo </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Priority Boarding </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-gray-700"> Help center access </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-gray-700"> Phone support </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-gray-700"> Community access </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-200 rounded-2xl border-2 shadow-xl border-blue-200">
                        <div className="p-6 sm:px-8 relative">
                            <h2 className="text-lg font-medium text-gray-900">
                                Economy
                                <span className="sr-only">Plan</span>
                            </h2>

                            <div className="absolute top-7 right-5">
                                <Flex gap="2">
                                    <Badge color="indigo" radius="full">People's Choice</Badge>

                                </Flex>

                            </div>

                            <p className="mt-2 text-gray-700 text-sm">Enjoy comfort on a budget! Economy Class offers affordable fares with essential amenities like in-flight entertainment and tasty meals.</p>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> GHS 20 </strong>

                                <span className="text-sm font-medium text-gray-700">/flight</span>
                            </p>

                            <a
                                className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                                href="#"
                            >
                                Choose
                            </a>
                        </div>

                        <div className="p-6 sm:px-8">
                            <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

                            <ul className="mt-2 space-y-2 sm:mt-4">
                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700">1 carry-on bag</span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Granulated Cassava & Roasted Peanuts </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-gray-700"> Priority Boarding </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Help center access </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-gray-700"> Free 20kg check-in luggage </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-gray-700"> Community access </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
                        <div className="p-6 sm:px-8 relative">
                            <h2 className="text-lg font-medium text-gray-900">
                                First Class
                                <span className="sr-only">Plan</span>
                            </h2>

                            <div className="absolute top-7 right-5">
                                <Flex gap="2">
                                    <Badge color="yellow" radius="full">+GHS 80</Badge>

                                </Flex>

                            </div>

                            <p className="mt-2 text-gray-700 text-sm">Indulge in luxury! From plush seating to exclusive lounges, enjoy top-tier service and amenities for an unparalleled travel experience.</p>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> GHS 100 </strong>

                                <span className="text-sm font-medium text-gray-700">/flight</span>
                            </p>

                            <a
                                className="mt-4 block rounded border border-yellow-500 bg-yellow-500 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-yellow-500 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                                href="#"
                            >
                                Choose
                            </a>
                        </div>

                        <div className="p-6 sm:px-8">
                            <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

                            <ul className="mt-2 space-y-2 sm:mt-4">
                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> 1 carry-on bag </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Premium and gourmet dining. </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Priority Boarding </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Help center access </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Phone support </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Community access </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default PricingFlight;