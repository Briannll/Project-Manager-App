import Button from "../UI/Button";

export default function ProjectsSidebar({ onStartAddProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-gradient-to-r from-indigo-500 to-indigo-300 text-indigo-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-indigo-100">
        Your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-md my-1 text-stone-250 hover:text-stone-200 hover:bg-indigo-300">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
