import {useEffect, useState} from "react";
import IRestaurante from "../../../interfaces/IRestaurante";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Link as LinkReact} from "react-router-dom";
import http from "../../../http";

const AdministracaoResturantes = () => {

    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

    const excluir = (restauranteASerExcluido: IRestaurante) => {
        http.delete(`/restaurantes/${restauranteASerExcluido.id}/`)
            .then(() => {
                const listaRestaurante = restaurantes.filter(restaurante => restaurante.id !== restauranteASerExcluido.id)
                setRestaurantes([...listaRestaurante])
            })
    }

    useEffect(() => {
        http.get<IRestaurante[]>('/restaurantes/')
        .then(resposta => setRestaurantes(resposta.data))
    })
    return(
       <TableContainer component={Paper}>
           <Table>
               <TableHead>
                   <TableRow>
                       <TableCell>
                            Nome
                       </TableCell>
                       <TableCell>
                           Editar
                       </TableCell>
                       <TableCell>
                           Excluir
                       </TableCell>
                   </TableRow>
               </TableHead>
               <TableBody>
                   {restaurantes.map(restaurante =>  <TableRow key={restaurante.id}>
                       <TableCell>
                           {restaurante.nome}
                       </TableCell>
                       <TableCell>
                           [<LinkReact to={`/admin/restaurantes/${restaurante.id}`}>Editar</LinkReact>]
                       </TableCell>
                       <TableCell>
                           <Button variant={"outlined"} color={"error"} onClick={() => excluir(restaurante)}>
                               Excluir
                           </Button>
                       </TableCell>
                   </TableRow>)}

               </TableBody>
           </Table>
       </TableContainer>

    );
}

export default AdministracaoResturantes;
