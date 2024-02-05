import SkillsHeading from "./Small Components/SkillHeading";

export default function Skills({ direction, title, description, video }) {
  return (
    <>
      <div
        className={`flex flex-col  gap-7 py-5 ${direction} items-center justify-evenly lg:px-10`}
      >
        <SkillsHeading className="flex gap-3 text-stone-800  md:hidden">
          {title}
        </SkillsHeading>
        <div className=" max-w-[400px] shadow-xl md:max-w-[500px]">
          <video
            className="max-h-[400px]  rounded-lg md:min-w-[400px]"
            controls
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="center flex-col gap-3 ">
          <SkillsHeading className="hidden md:flex md:gap-3">
            {title}
          </SkillsHeading>

          <p className="textSecondary">{description}</p>
        </div>
      </div>
      {/* <hr className="md:hidden" /> */}
    </>
  );
}
