export default function (state = 0, action) { //PASSANDO VALOR INICIAL 0
    switch(action.type) {
        case 'SUM':
            return action.payload[0] + action.payload[1]
        case 'SUBTRACT':
            return action.payload[0] - action.payload[1]
        default:
             return state;

    }
}