const INITIAL_STATE = {
    data: "2019-12-11T22:12:32.560Z ",
    nome: "Thamiris",
    email: "thamiris@gmail.com ",
    telefone: "11223344 ",
    assunto: "informações sobre o curso ",
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ATUALIZA_DATA': return { ...state, data: action.value }
        case 'ATUALIZA_NOME': return { ...state, nome: action.value }
        case 'ATUALIZA_EMAIL': return { ...state, email: action.value }
        default: return state
    }
}