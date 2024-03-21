import { ArrowRightIcon } from "@radix-ui/react-icons";

function PassDetails() {
    return (
        <form>
            <div className="p-10 mx-80">
                <div className="flex justify-around mb-5">
                    <div className="p-5 w-1/3">
                        <div className="flex flex-col">
                            <label className="block mb-2 text-xs font-semibold text-gray-600" htmlFor="title">Title</label>
                            <select className="w-full rounded-lg border-gray-200 p-3 text-sm" id="title">
                                <optgroup>
                                    <option value="Mr">Mr</option>
                                </optgroup>
                                <optgroup>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Ms">Ms</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div className="p-5 w-2/5">
                        <div className="flex flex-col">
                            <label className="block mb-2 text-xs font-semibold text-gray-600" htmlFor="firstname">First Name</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                type="text"
                                id="firstname"
                            />
                        </div>
                    </div>
                    <div className="w-2/5 p-5">
                        <div className="flex flex-col">
                            <label className="block mb-2 text-xs font-semibold text-gray-600" htmlFor="lastname">Last Name</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                type="text"
                                id="lastname"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-around">
                    <div className="w-1/2 p-5">
                        <div className="flex flex-col">
                            <label className="block mb-2 text-xs font-semibold text-gray-600" htmlFor="email">Email</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                type="email"
                                id="email"
                            />
                        </div>
                    </div>
                    <div className="w-1/2 p-5">
                        <div className="flex flex-col">
                            <label className="block mb-2 text-xs font-semibold text-gray-600" htmlFor="phone">Phone Number</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                type="tel"
                                id="phone"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between relative">
                    <div className="w-1/2 p-5">
                        <div className="flex flex-col">
                            <label className="block mb-2 text-xs font-semibold text-gray-600" htmlFor="dob">Date of Birth</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                type="date"
                                id="dob"
                            />
                        </div>
                    </div>
                    <div className="w-fit h-fit p-1 flex justify-start items-end bottom-5 absolute right-36 rounded-lg ">
                        <button type="submit" className="text-white font-medium bg-yellow-500 px-5 py-2 rounded-md">
                            <div className="flex items-center">
                                Submit
                                <ArrowRightIcon/>
                            </div>

                        </button>
                    </div>
                </div>

            </div>
        </form >

    );
};

export default PassDetails;
