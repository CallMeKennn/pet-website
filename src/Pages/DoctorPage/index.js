import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import TableComponent from "../../Component/Table";

const API_URL = "http://localhost:4000";

const DovtorPage = () => {

  const [data, setData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          authorization: `Bearer ${location.state}`,
        };

        const responsePets = await axios.get(`${API_URL}/pets`, { headers });    

        const responseUsers = await axios.get(`${API_URL}/users`, { headers });

        // eslint-disable-next-line react-hooks/exhaustive-deps
        const dataReal = responsePets.data.map(
          (pet) => {
            const ownerId = pet.ownerId
            return {...pet, ownerId: responseUsers.data[ownerId - 1].name}
          }
        );

        setData(dataReal)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && <TableComponent data={data}/>}
    </div>
  );
};

export default DovtorPage;
