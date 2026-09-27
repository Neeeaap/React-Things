import Button from "./Button";

export default function Sidebar({
  onStartAddProject,
  onSelectProject,
  projects,
  selectedProjectId,
}) {
  return (
    <aside className="bg-stone-900 w-1/5 rounded-se-2xl px-2 xl:px-5 py-24 pr-28">
      <h2 className="text-sm md:text-base lg:text-2xl 2xl:text-3xl text-gray-300 font-bold uppercase font-mono flex text-nowrap">
        Your Projects
      </h2>
      <button
        onClick={onStartAddProject}
        className="text-sm w-24 h-5 my-5 md:w-28 lg:text-lg lg:h-10 lg:w-40 xl:w-48 bg-white bg-opacity-20 rounded-md text-white text-opacity-60 hover:bg-opacity-10 hover:bg-sky-400 hover:text-blue-300 transition duration-200 ease-linear"
      >
        + Add Project
      </button>
      <ul className="pr-10 my-5">
        {projects.map((project) => {
          let cssClass =
            "w-24 text-left text-sm flex-wrap md:w-36 md:text-base lg:w-40 lg:text-lg xl:w-full pl-1 text-gray-300 font-sans rounded hover:bg-white hover:bg-opacity-10 transition duration-100 ease-linear";
          if (project.id === selectedProjectId) {
            cssClass += " bg-stone-800 text-stone-200";
          } else {
            cssClass += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClass}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
