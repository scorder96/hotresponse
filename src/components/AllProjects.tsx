import pb from "@/pocketbase";
import { DialogNewProject } from "./DialogNewProject";
import NavbarIn from "./NavbarIn";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

var projects: Array<string> = [];
var projectids: Array<string> = [];
function AllProjects() {
  useEffect(() => {
    fetchProjects();
  }, []);
  const [Projects, setProjects] = useState(Array<string>);
  const [ProjectIds, setProjectIds] = useState(Array<string>);
  async function fetchProjects() {
    const record = await pb.collection("projects").getList();
    for (let i = 0; i < record.items.length; i++) {
      projects = [record.items[i].name, ...projects];
      projectids = [record.items[i].id, ...projectids];
    }
    setProjects(projects);
    setProjectIds([...projectids]);
    projects = [];
    projectids = [];
  }

  const navigate = useNavigate();
  return (
    <>
      <NavbarIn />
      <div className="p-8 px-16">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">All projects</h1>
          <DialogNewProject projectsno={Projects.length} />
        </div>
        <ul className="space-y-4 mt-8">
          {Projects.map((project, index) => {
            return (
              <li
                key={index}
                className="bg-slate-200 hover:bg-slate-300 p-4 cursor-pointer"
                onClick={() => navigate(ProjectIds[index])}
              >
                {project}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default AllProjects;
