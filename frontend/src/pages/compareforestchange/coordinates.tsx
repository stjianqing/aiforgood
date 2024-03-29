import React, { useState } from "react";
import { useRouter } from "next/router";
import SearchBoc from "@/components/searchbox";
import { FaCheck } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import dynamic from "next/dynamic";

export const CFCoordinate: React.FC = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const router = useRouter();

  function handleLatitudeChange(e) {
    setLatitude(e.target.value);
  }
  function handleLongitudeChange(e) {
    setLongitude(e.target.value);
  }

  const updateCoordinates = (newLatitude, newLongitude) => {
    setLatitude(newLatitude);
    setLongitude(newLongitude);
    console.log(latitude, longitude);
  };

  const DynamicSearchBox = dynamic(() => import("@/components/searchbox"), {
    loading: () => <p>Loading...</p>,
    ssr: false,
  });
  function handleConfirm() {
    router.push({
      pathname: "/compareforestchange/date",
      query: { latitude: latitude, longitude: longitude },
    });
  }

  function handleBack() {
    router.push({
      pathname: "/",
    });
  }
  // if (typeof document !== "undefined") {
  // you are safe to use the "document" object here

  return (
    <div className="flex w-screen h-screen flex-col pt-[2rem] ">
      <h1 className="text-black sm:text-5xl text-2xl justify-center items-center flex font-semibold p-3 mx-[1rem] sm:mx-[3rem]">
        Forest Change
      </h1>
      <div className="flex flex-row w-full justify-center items-center">
        <svg
          height="6"
          viewBox="0 0 423 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-pink w-1/4 m-[1rem]"
        >
          <path d="M422.8 0.808594H7.77557L0.0341797 5.72677H415.059L422.8 0.808594Z" />
        </svg>

        <svg
          height="6"
          viewBox="0 0 423 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-gray w-1/4 m-[1rem] "
        >
          <path d="M422.8 0.808594H7.77557L0.0341797 5.72677H415.059L422.8 0.808594Z" />
        </svg>
        <svg
          height="6"
          viewBox="0 0 423 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-gray w-1/4 m-[1rem] "
        >
          <path d="M422.8 0.808594H7.77557L0.0341797 5.72677H415.059L422.8 0.808594Z" />
        </svg>

        <svg
          height="6"
          viewBox="0 0 423 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-gray w-1/4 m-[1rem]"
        >
          <path d="M422.8 0.808594H7.77557L0.0341797 5.72677H415.059L422.8 0.808594Z" />
        </svg>
      </div>

      <p className="flex flex-row justify-center items-center mx-[1rem] sm:text-2xl">
        Search for your forest or enter coordinates manually
      </p>
      <div className="flex flex-row w-5/6 flex-wrap justify-between p-[1rem]">
        <div className="flex flex-col px-[2rem] mx-[2rem] justify-center">
          {/* <SearchBoc updateCoordinates={updateCoordinates} /> */}
          <DynamicSearchBox updateCoordinates={updateCoordinates}/>
        </div>
        <div className="flex justify-center flex-col px-[1rem] pt-[2rem]">
          <div className="flex flex-row">
            <div className="flex flex-col mx-[1rem]">
              <label className=" text-lg sm:text-3xl my-[1rem] ">
                Latitude:
              </label>
              <label className="text-lg sm:text-3xl my-[1rem] ">
                Longitude:
              </label>
            </div>
            <div className="flex flex-col mx-[1rem]">
              <input
                onChange={handleLatitudeChange}
                type="text"
                defaultValue={latitude}
                className="w-[10rem] text-md sm:text-2xl my-[1rem] border border-black  p-1 rounded "
              ></input>
              <input
                onChange={handleLongitudeChange}
                type="text"
                defaultValue={longitude}
                className="w-[10rem] text-md sm:text-2xl my-[1rem]  border border-black p-1 rounded"
              ></input>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full justify-between ">
        <button
          onClick={handleBack}
          className="mt-[1rem] sm:mt-[3rem] flex h-fit w-fit flex-row justify-center items-center gap-2 font-medium text-md sm:text-xl text-white bg-green rounded-xl px-[1rem] p-1 sm:p-2 ml-[2rem] mb-[2rem]"
        >
          <FaAngleLeft></FaAngleLeft>
          Back
        </button>
        <button
          onClick={handleConfirm}
          className="mt-[1rem] sm:mt-[3rem] flex h-fit w-fit justify-center items-center gap-2 flex-row  font-medium text-md sm:text-xl text-white bg-purple rounded-xl px-[1rem] p-1 sm:p-2 mr-[2rem] mb-[2rem]"
        >
          Confirm <FaCheck></FaCheck>
        </button>
      </div>
    </div>
  );
};
// };

export default CFCoordinate;
