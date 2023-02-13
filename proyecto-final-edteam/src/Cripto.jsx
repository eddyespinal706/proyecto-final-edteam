import { useEffect, useState } from "react";
import axios from "axios";

const Cripto = () =>{
    const API_URL = import.meta.env.VITE_API_URL
    const [criptos, setCriptos] = useState()

    useEffect(() => {
        axios.get(`${API_URL}assets`)
            .then((data) =>{
            console.log(data)
            setCriptos(data.data.data)
        })
        .catch(() =>{
            console.error("La peticion fallo.")
        })
    }, [])

  if(!criptos) return <span>Cargando....</span>

  return (
    <>
      <table>
        <th>Lista de criptomonedas:</th>
        <tr>
            <td>Nombre:</td>
            <td>Precio:</td>
        </tr>
        { 
          criptos.map(({id, name, priceUsd}) => (
            <tr key={id}>
                <td>
                    {name}
                </td>
                <td>
                    {priceUsd}
                </td>
            </tr>
          )) 
        }
      </table>
    </>
  );
}

export default Cripto