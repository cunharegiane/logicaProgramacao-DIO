let informacaoDoHeroi = [`Zé pequeno`, 5698]
const mensagemInformativa = ` O herói ${informacaoDoHeroi[0]} está no nível de`

if(informacaoDoHeroi[1] <= 1000){
    console.log(`${mensagemInformativa} Ferro`)  
}else if(informacaoDoHeroi[1] <= 2000){
    console.log(`${mensagemInformativa} Bronze`)   
} else if(informacaoDoHeroi[1] <= 5000){
    console.log(`${mensagemInformativa} Prata`)  
}else if(informacaoDoHeroi[1] <= 7000){
    console.log(`${mensagemInformativa} Ouro`)
}else if(informacaoDoHeroi[1] <= 8000){
    console.log(`${mensagemInformativa} Platina`)   
}else if(informacaoDoHeroi[1] <= 9000){
    console.log(`${mensagemInformativa} Ascedente`)   
}else if(informacaoDoHeroi[1] <= 10000){
    console.log(`${mensagemInformativa} Imortal`)
}else {
    console.log(`${mensagemInformativa} Radiante`)   
}

