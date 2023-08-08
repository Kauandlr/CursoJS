var idade = 12
console.log (`Você tem ${idade} anos`)
if (idade < 16){
    console.log('Você está abaixo da idade')
}else if (idade < 18  || idade >= 65){
    console.log('Voto Opcional')
}else {
    console.log ('voto obrigatório')
}