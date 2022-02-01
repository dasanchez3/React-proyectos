import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TeacherList from './UsuariosList';
import Teacher from './Usuarios'
import { getListTeachers, getListUsuarios } from '../service/UsuariosService'

function UsuariosPage() {

  const [teachers, setUsuarios] = useState([]);

  useEffect(() => {
    
    getListUsuarios().then(data => {
      setUsuarios(data);
    }
    );

  }, []);

  return (
    <div>
      <h2>Lista de usuarios</h2>
      <Link to='/createusuarios' >
        Crear
      </Link>
      <UsuariosList>
        {
          teachers.map(item =>
            <Teacher
              key={item.id}
              itemUsuarios={item} />
          )
        }
      </UsuariosList>
    </div>
  );
}

export default UsuariosPage;