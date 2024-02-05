import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <footer className="footerBg mt-7 min-h-[20vh] py-8">
        {/* icons */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-5 text-3xl">
            <a href="https://t.me/murtaza_alkabie" target="_blank">
              <FaTelegram className="text-sky-600" />
            </a>
            <a
              href="https://www.instagram.com/murtaza_alkabie/"
              target="_blank"
            >
              <FaInstagram className="text-red-500 " />
            </a>
            <a href="https://github.com/Murtaza01" target="_blank">
              <FaGithub className="text-slate-700" />
            </a>
          </div>
          <p className="center text-lg font-semibold text-stone-800">
            Made with <IoMdHeart className="mx-1 text-red-500" />
            By Murtaza Alkabie
          </p>
        </div>
      </footer>
    </>
  );
}
