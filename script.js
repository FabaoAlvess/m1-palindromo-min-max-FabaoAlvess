function isPalindrome(palavraEFrase) {

    
    const texto = palavraEFrase.replace(/\s/g, '').toLowerCase()
    const tamanho = texto.length
  
    for (let i = 0; i < tamanho; i++) {
        if (texto[i] !== texto[tamanho - 1 - i]) {
            return false 
        }
    }
  
   
    return true 
}

function arrayMaxMin(arr) {

    let minimo = arr[0] 

    let maximo = arr[0] 

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < minimo) minimo = arr[i]

        if (arr[i] > maximo) maximo = arr[i]
    }

    
    return [minimo, maximo] 
}