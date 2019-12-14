import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Contato } from '../pages/contato'
import { Curso } from '../pages/curso'



export class Rotas extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/curso" component={Curso} />
                <Route path="/contato" component={Contato} />
                <Route path="*" component={Contato}/>
            </Switch>
        )
    }
}