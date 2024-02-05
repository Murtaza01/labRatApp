import Home from "./Components/Home";
import Skills from "./Components/Skills";
import skillsData from "../src/assets/data/skillsData";
import Footer from "./Components/Footer";
import Info from "./Components/Info";
import Heading from "./Components/Small Components/Heading";
export default function App() {
  return (
    <>
      <div className="m-5 ">
        <Home />
        <hr className="hrStyle" />
        <Heading name="Skills" />
        <section className=" mb-3 flex flex-col gap-5 ">
          {skillsData.map(({ direction, description, title, video }) => {
            return (
              <>
                <Skills
                  key={title}
                  direction={direction}
                  description={description}
                  title={title}
                  video={video}
                />
              </>
            );
          })}
        </section>
        <hr className="hrStyle" />
        <Info />
        <Footer />
      </div>
    </>
  );
}
