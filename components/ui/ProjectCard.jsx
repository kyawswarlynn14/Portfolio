import { Tilt } from "react-tilt";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link";
import ItemLayout from "../layouts/ItemLayout";

const ProjectCard = ({ project }) => {

  const Card = () => {
    return (
      <>
        <div className="relative w-full h-[250px]">
          <img
            src={project?.image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex gap-4 justify-end m-3">
            <div
              onClick={() => window.open(project?.demo_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-xl flex justify-center items-center cursor-pointer bg-slate-700 text-white"
            >
              <CgWebsite />
            </div>

            <div
              onClick={() => window.open(project?.code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-xl flex justify-center items-center cursor-pointer bg-slate-700"
            >
              <img
                src="/images/github.png"
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <Link
          href={`/project/${project?._id}`}
          className="mt-3 cursor-pointer flex items-center justify-between"
        >
          <div>
            <h3 className=" font-bold text-[18px] hover:underline underline-offset-2">{project?.title}</h3>
            <p className=" dark:text-[#00FF00] font-semibold text-[14px]"># {project?.tag}</p>
          </div>

          <button className="actionButton px-6">
            Detail
          </button>
        </Link>
      </>
    );
  };

  return (
    <>
      <ItemLayout>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={"p-5 rounded-2xl w-full shadow-[0px_2px_10px_5px_rgba(0,0,0,0.2)] dark:shadow-slate-700 hidden md:block"}
        >
          <Card />
        </Tilt>
      </ItemLayout>

      <ItemLayout
        className={"p-5 rounded-2xl w-full shadow-[0px_2px_10px_5px_rgba(0,0,0,0.2)] dark:shadow-slate-700 md:hidden"}>
        <Card />
      </ItemLayout>
    </>
  );
};

export default ProjectCard;
