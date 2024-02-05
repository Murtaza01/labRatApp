export default function Album({ image, link }) {
  return (
    <>
      <div className="my-1 rounded-sm shadow-xl">
        <a href={link} target="_blank">
          <img
            src={image}
            alt="album Photo"
            className="h-full w-[150px] object-cover sm:w-[180px] md:w-[187px] xl:w-[250px]"
          />
        </a>
      </div>
    </>
  );
}
