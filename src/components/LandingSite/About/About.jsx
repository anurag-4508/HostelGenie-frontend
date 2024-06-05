import { TeamCard } from "./TeamMember";
import  AboutMe  from "./AboutMe";
function About() {

  const anurag = {
    name: "Anurag Mandloi",
    designation: "Front-end & Back-end Engineer",
    image:
      "https://i.ibb.co/ypYgjC2/2021-IMG-013.jpg",
  };


  return (
    <>
      <h1 className="font-bold text-white text-center text-5xl">
        Meet Our Team!
      </h1>
      <div className="py-20 sm:py-25 flex gap-10 flex-wrap justify-center align-center">
        <TeamCard member={anurag} />
      </div>

      <AboutMe />
    </>
  );
}
export { About };
