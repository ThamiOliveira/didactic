import React, { Component } from 'react'
import { FormCurso } from './form';
import { ListCurso } from './list';
import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos';

export class CadastroCurso extends Component {

    initialState = {
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
                            categoriaChange={this.categoriaChange.bind(this)}/>
                    </div>
                    <div className="col-md-6">
                        <ListCurso cursos={this.state.cursos} />
                    </div>
                </div>
            )
        }
    }