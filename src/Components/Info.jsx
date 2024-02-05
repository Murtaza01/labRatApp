import Modal from "./Modal";
import { useRef } from "react";
import { FcBiotech } from "react-icons/fc";
import { HiXMark } from "react-icons/hi2";
import Heading from "./Small Components/Heading";

export default function Info() {
  const dialog = useRef();

  function showDialog() {
    dialog.current.open();
  }

  function closeDialog() {
    dialog.current.close();
  }
  return (
    <div className=" px-2 pb-16  md:pb-5">
      <Heading name="Info" />
      <div className="relative flex items-center justify-between gap-5 md:justify-evenly ">
        <p className="textSecondary mt-3 md:mb-10">
          My name is Mélanie aka mini kim, aka kim the walmart version, im an
          introvert who likes many things in life (expect people)
          <br /> I am a big Fan of Ted Lasso (the tv show) i like to play music
          and listen to music, you can see my Favorite albums Below
        </p>

        <Modal ref={dialog}>
          <button
            className="absolute right-0 top-0 rounded-sm bg-indigo-400 "
            onClick={closeDialog}
          >
            <HiXMark className="text-3xl" />
          </button>
        </Modal>
        <button
          onClick={showDialog}
          className="buttonGradient absolute left-[50%] top-[120%] translate-x-[-50%] translate-y-[-50%] rounded-lg  bg-indigo-400 px-1 py-2 md:top-[90%]"
        >
          View Albums
        </button>
        <span className="my-5 block">
          <FcBiotech className="mx-auto animate-spin-slow text-[70px] md:text-[100px]" />
        </span>
      </div>
    </div>
  );
}
