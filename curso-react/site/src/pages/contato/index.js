import React from 'react'
import { Cabecalho } from '../../componentes/cabecalho'
import ContatoForm from './form';
import { connect } from 'react-redux';


 class Contato extends React.Component {
    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Contato" subtitulo={`Quer entrar em contato conosco? ${this.props.nome}`}/>
                < ContatoForm/>
            </div >
        )
    }
}

const mapStoreToProps = store => ({
    nome : store.contato.nome
})

const Connected = connect(mapStoreToProps, null) (Contato)
export {Connected as Contato}