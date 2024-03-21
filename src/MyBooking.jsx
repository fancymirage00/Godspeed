import React, { useEffect, useRef } from 'react';
import { Button } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import FlightMap from "./assets/flightmap.png";
import Typed from 'typed.js';

function MyBooking() {
  const phoneRef = useRef(null);
  const addressRef = useRef(null);

  useEffect(() => {

    const addressTyped = new Typed(addressRef.current, {
      strings: ['We will take you all over the world from end to end safely and happily'],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false,
    });

    return () => {
      addressTyped.destroy();
    };
  }, []);

  return (
    <section className="bg-white-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <img src={FlightMap} alt="Flight Map" className="rounded-lg" />
            <div className="mt-8">
              
              <p className="mt-2 font-medium text-gray-600" ref={addressRef}></p>
            </div>
          </div>
          <div className="rounded-lg bg-gray-100 p-5 shadow-lg lg:col-span-3 flex justify-center items-center">
            <form action="#" className="space-y-4 w-3/4">
              <div className="flex flex-col space-y-6 ">
                <div className="flex flex-col">
                  <label className="block mb-2 text-xs font-semibold text-gray-600" htmlFor="phone">PNR</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    type="tel"
                    id="pnr"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block mb-2 text-xs font-semibold text-gray-600" htmlFor="name">Surname</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    type="text"
                    id="surname"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" type="submit" color="amber">
                    <MagnifyingGlassIcon width="16" height="16" /> Search
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyBooking;