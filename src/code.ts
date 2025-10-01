let animal = 'cavalo'

switch(animal) {
    case 'vaca': console.log('A vaca foi selecionada.')
    break;
    case 'cavalo': console.log('O cavalo foi selecionado.')
    break;
    default:
        animal = 'Não detectado'
}

console.log(`${animal} foi selecionado`)