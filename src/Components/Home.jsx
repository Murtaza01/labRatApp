import image from "../assets/images/lab_people.jpg";
import { FaRegAngry } from "react-icons/fa";
import { useState } from "react";

const contactMe = [
  "Go Away",
  "Please Don't",
  "No Thanks",
  "I Have a Boyfriend",
  "In your Dreams",
];

export default function Home() {
  const [message, setMessage] = useState("");

  function pickRandom() {
    const randomIndex = Math.floor(Math.random() * contactMe.length);
    setMessage(contactMe[randomIndex]);
  }
  return (
    <>
      <div className="mb-3 min-h-[400px] px-5 md:px-20">
        <div className=" flex flex-col-reverse items-center gap-4  md:flex-row md:justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="textPrimary text-[20px] md:text-[25px] ">
              Hello my name is Mel, the
              <span className="headingEffect ml-1">Labest Ratest</span>
            </h1>
            <dir className="flex items-center gap-3">
              <button onClick={pickRandom} className="buttonGradient">
                Contact Me
              </button>
              <p className="center gap-2 text-[16px] font-semibold md:text-xl">
                {message}{" "}
                {message === "Go Away" && (
                  <FaRegAngry className="text-xl text-red-500" />
                )}
              </p>
            </dir>
          </div>

          <div className="md:w-[700px]">
            <img src={image} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
