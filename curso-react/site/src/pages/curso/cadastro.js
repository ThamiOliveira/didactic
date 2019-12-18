import React, { Component } from 'react'
import { FormCurso } from './form';
import { ListCurso } from './list';
import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos';

export class CadastroCurso extends Component {

    initialState = {
        _id: null,
        codigo: '',
        descricao: '',
        cargaHoraria: '',
        preco: '',
        categoria: 'ENGENHARIA',
    }

    state = { ...this.initialState, cursos: [] }

    constructor(props) {
        super(props);
        this.listar();
    }

    listar() {
        axios.get(URL).then(response => {
            this.setState({ cursos: response.data })
        })
    }

    codigoChange(e) {
        this.setState({ codigo: e.target.value });
    }
    descricaoChange(e) {
        this.setState({ descricao: e.target.value });
    }

    cargaHorariaChange(e) {
        this.setState({ cargaHoraria: e.target.value });
    }

    precoChange(e) {
        this.setState({ preco: e.target.value });

    }

    categoriaChange(e) {
        this.setState({ categoria: e.target.value });
    }
    removerCurso(curso) {
        if (window.confirm('Deseja realmente deletar o curso?')) {
            axios.delete(`${URL}/${curso._id}`)
                .then(_ => {
                    this.listar()
                    alert('Curso deletado com sucesso')
                })
                .catch(error => this.trataErro(error, 'Ocorreu erro ao deletar curso!'))
        }
    }

    adicionar(event) {
        event.preventDefault()

        const { _id, codigo, descricao, cargaHoraria, categoria, preco } = this.state

        const body = {
            codigo,
            descricao,
            cargaHoraria,
            categoria,
            preco
        }
        if (_id) {
            axios.put(`${URL}/${_id}`, body)
                .then(_ => {
                    this.trataSucesso(event, 'Atualizado com sucesso!')
                }).catch(err => this.trataErro(err, 'Ocorreu erro ao editar'))
        } else {
            axios.post(URL, body).then(_ => {
                this.trataSucesso(event, 'Adicionado com sucesso!')
            }).catch(erro => this.trataErro(erro, 'Ocorreu erro ao salvar'))
        }
    }

    trataErro(error, msg) {
        console.log(error)
        alert(msg)

    }

    trataSucesso(evento, msg) {
        this.limpar(evento)
        this.listar()
        alert(msg)
    }

    limpar(event) {
        if (event) {
            event.preventDefault();
        }

        this.setState(this.initialState)
    }

    consultar(curso) {
        this.setState({
            _id: curso._id,
            codigo: curso.codigo,
            descricao: curso.descricao,
            cargaHoraria: curso.cargaHoraria,
            preco: curso.preco,
            categoria: curso.categoria
        })

    }

    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormCurso
                        codigo={this.state.codigo}
                        codigoChange={this.codigoChange.bind(this)}

                        descricao={this.state.descricao}
                        descricaoChange={this.descricaoChange.bind(this)}

                        cargaHoraria={this.state.cargaHoraria}
                        cargaHorariaChange={this.cargaHorariaChange.bind(this)}

                        preco={this.state.preco}
                        precoChange={this.precoChange.bind(this)}

                        categoria={this.state.categoria}
                        categoriaChange={this.categoriaChange.bind(this)}

                        adicionar={this.adicionar.bind(this)}
                        isAtualizar={this.state._id ? true : false}
                        limpar={this.limpar.bind(this)} />
                </div>
                <div className="col-md-6">
                    <ListCurso
                        cursos={this.state.cursos}
                        removerCurso={this.removerCurso.bind(this)}
                        consultarCurso={this.consultar.bind(this)}
                    />
                </div>
            </div>
        )
    }
}