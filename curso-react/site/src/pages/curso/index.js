import React from 'react';
import { Cabecalho } from '../../componentes/cabecalho';
import { CadastroCurso } from './cadastro';

export class Curso extends React.Component {
    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Curso" subtitulo=" Cadastro de cursos" />
                <CadastroCurso />
            </div>
        )
    }
}