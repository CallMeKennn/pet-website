import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const API_URL = "http://localhost:4000";

const DovtorPage = () => {
  const [pets, setPets] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const headers = {
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwicm9sZSI6ImRvY3RvciIsImlhdCI6MTUxNjIzOTAyMn0.0_MKcjJoHX-Vsjb4vVlWZLZMY-45nMQ22MTXUCAQgng"
    }
    axios.get(`${API_URL}/pets`, { headers }).then((response) => {
      console.log(response);
    });
  }, []);

  return <div>DovtorPage</div>;
};

export default DovtorPage;
