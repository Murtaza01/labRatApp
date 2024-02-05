import { forwardRef, useRef, useImperativeHandle } from "react";
import Album from "./Small Components/Album";
import albumsData from "../assets/data/albumsData";
import Heading from "./Small Components/Heading";

const ShowDialog = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  function handleKey(e) {
    if (e.key === "Escape") e.preventDefault();
  }

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
        document.querySelector("body").style.overflow = "hidden";
      },
      close() {
        dialog.current.close();
        document.querySelector("body").style.overflow = "visible";
      },
    };
  });

  return (
    <>
      <dialog
        className="backdrop:dialogStyle openDialog fixed w-[90vw] md:w-[75vw]"
        ref={dialog}
        onKeyDown={handleKey}
      >
        <div className="min-h-[400px] w-full rounded-md border-[1px] border-black ">
          <Heading name="Favorite Albums" />
          {/* containerOfAlbums */}
          <div className="mt-2 flex flex-wrap justify-around md:justify-evenly lg:gap-1">
            {albumsData.map(({ image, link, id }) => {
              return <Album key={id} image={image} link={link} />;
            })}
          </div>
        </div>
        {children}
      </dialog>
    </>
  );
});

export default ShowDialog;
