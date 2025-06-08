import axios from "axios";
import { useEffect, useState } from "react";

export function useProjectName(loadProject: boolean) {
  const [projectName, setProjectName] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/sharedprojectdetails`, {
        headers: {
          authorization: data,
        },
      })
      .then((response) => {
        if (
          response.data.projectData[0] &&
          response.data.sharedProjectData[0]
        ) {
          setProjectName(
            response.data.sharedProjectData.concat(response.data.projectData)
          );
        } else if (response.data.projectData[0]) {
          setProjectName(response.data.projectData);
        } else {
          setProjectName(response.data.sharedProjectData);
        }
      });
  }, [loadProject]);

  return projectName;
}
