import {useEffect, useState} from "react";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Link as LinkReact} from "react-router-dom";
import http from "../../../http";
import IPrato from "../../../interfaces/IPrato";

const AdministracaoPratos = () => {

    const [pratos, setPratos] = useState<IPrato[]>([]);

    const excluir = (pratoASerExcluido: IPrato) => {
        http.delete(`/pratos/${pratoASerExcluido.id}/`)
            .then(() => {
                const listaRestaurante = pratos.filter(restaurante => restaurante.id !== pratoASerExcluido.id)
                setPratos([...listaRestaurante])
            })
    }

    useEffect(() => {
        http.get<IPrato[]>('/pratos/')
            .then(resposta => setPratos(resposta.data))
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
                            Descrição
                        </TableCell>
                        <TableCell>
                            Tag
                        </TableCell>
                        <TableCell>
                            Imagem
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
                    {pratos.map(prato =>  <TableRow key={prato.id}>
                        <TableCell>
                            {prato.nome}
                        </TableCell>
                        <TableCell>
                            {prato.descricao}
                        </TableCell>
                        <TableCell>
                            {prato.tag}
                        </TableCell>
                        <TableCell>
                           [<a href={prato.imagem} target={"blank"} rel={"noreferrer"}>ver imagem</a>]
                        </TableCell>
                        <TableCell>
                            [<LinkReact to={`/admin/pratos/${prato.id}`}>Editar</LinkReact>]
                        </TableCell>
                        <TableCell>
                            <Button variant={"outlined"} color={"error"} onClick={() => excluir(prato)}>
                                Excluir
                            </Button>
                        </TableCell>
                    </TableRow>)}

                </TableBody>
            </Table>
        </TableContainer>

    );
}

export default AdministracaoPratos;
