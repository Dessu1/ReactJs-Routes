import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();

  const [pueblo, setPueblo] = useState([]);

  useEffect(() => {
    // Esta dentro del useEffect para solucionar el warning presentado
    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`
        );
        const pueblo = await data.json();
        setPueblo(pueblo);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h3>{pueblo.name}</h3>
      <p>{pueblo.team_bonus}</p>
    </div>
  );
};

export default User;
