import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nosotros = () => {
  const [equipo, setEquipo] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
      );
      const users = await data.json();
      setEquipo(users.civilizations);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Nosotros</h2>
      <ul>
        {equipo.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/nosotros/${item.id}`}>
                {item.name} - {item.expansion}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nosotros;
