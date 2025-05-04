import axios from "axios";
import { useEffect, useState } from "react";

export function useFindName() {
  const [name, setName] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/userdetails`, {
        headers: {
          authorization: data,
        },
      })
      .then((response) => {
        setName(response.data.data[0].name);
      });
  }, []);

  return name;
}
