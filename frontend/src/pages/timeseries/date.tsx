
import React, { useState, createRef, useEffect } from "react";
import { useRouter } from "next/router";
import PeriodDropDown from "@/components/periodDropdown";


export const FCDate: React.FC = () => {
  const router = useRouter();
  const [latitude, setLatitude] = useState(router.query.latitude);
  const [longitude, setLongitude] = useState(router.query.longitude);
  const [date1, setDate] = useState("");
  const [period, setPeriod] = useState("Time Period");

  function handleBack() {
    router.push({
        pathname: "/timeseries/coordinates",
      })
  };

  async function handleConfirm() {
    const req = await fetch('http://127.0.0.1:5000/api/location-coord',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({latitude, longitude, date1, period})
    });

    router.push({
      pathname: "/timeseries/crop",
      query: { latitude: latitude, longitude: longitude, date1: date1, period: period},
    });
  }
  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDate(e.target.value);
  }

  function handlePeriodChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPeriod(e);
  }

  return (
    <div className="flex w-screen h-screen flex-col pt-[2rem] ">
      <h1 className="text-black text-6xl justify-center flex font-semibold p-3 mx-[3rem]">
        Forest Series
      </h1>
      <div className = "flex flex-row w-full px-3">
      <svg height="6" viewBox="0 0 423 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-purple w-1/4 m-[1rem]">
            <path d="M422.8 0.808594H7.77557L0.0341797 5.72677H415.059L422.8 0.808594Z"/>
          </svg>

          <svg height="6" viewBox="0 0 423 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-gray w-1/4 m-[1rem] ">
          <path d="M422.8 0.808594H7.77557L0.0341797 5.72677H415.059L422.8 0.808594Z"/>
        </svg>
        <svg height="6" viewBox="0 0 423 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-gray w-1/4 m-[1rem] ">
          <path d="M422.8 0.808594H7.77557L0.0341797 5.72677H415.059L422.8 0.808594Z"/>
        </svg>

        <svg height="6" viewBox="0 0 423 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-gray w-1/4 m-[1rem]">
          <path d="M422.8 0.808594H7.77557L0.0341797 5.72677H415.059L422.8 0.808594Z"/>
        </svg>
      </div>
      <div className="flex justify-left ml-[2.5rem] p-3">
        <div className="flex flex-col">
          <p className= "flex flex-row font-semibold text-lg">Latitude: </p>
          <p className = "flex flex-row w-fit font-semibold text-lg">Longtitude:</p>
        </div>
        <div className="flex flex-col w-fit ml-[1rem]">
          <p className= "flex flex-row w-fit text-lg"> {latitude}</p>
          <p className = "flex flex-row w-fit text-lg"> {longitude}</p>
        </div>
      </div>
      
      <p className="text-2xl text-black flex justify-center w-full mt-[4rem]">Select your ending date of interest and time period</p>
     
      <div className="flex flex-row flex-wrap justify-center mt-[2rem]">
        <div className="flex flex-col mt-[1rem] mx-[5rem] ">
          <label className = " text-3xl font-medium">Date: </label>
          <input className = "my-[1rem] text-xl border-black border rounded-lg p-[0.5rem]" type="date" onChange={handleDateChange}></input>
        </div>
        <div className = "flex flex-col mt-[1rem] mx-[5rem]">
          <p className = "text-3xl font-medium">Period: </p>

          <div>
            {/* <PeriodDropDown /> */}
            <PeriodDropDown handlePeriodChange={handlePeriodChange} />
          </div>
          
        </div>
      </div> 
    
      <div className = "h-full">
      </div>

      <div className = "flex flex-row w-full justify-between mb-[3rem]">
        <button
          onClick={handleBack}
          className="mt-[5rem] font-medium text-xl text-white bg-green rounded-xl px-[1rem] p-2 ml-[3rem]"
        >
          Back
        </button>
        <button
          onClick={handleConfirm}
          className="mt-[5rem] font-medium text-xl text-white bg-purple rounded-xl px-[1rem] p-2 mr-[3rem]"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default FCDate;
