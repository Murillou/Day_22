/* para criar uma tag HTML pelo javascript utilizamos o metodo .createElement('nomedatag') 
veja a syntax abaixo 
document.createElement('nomedatag')*/

// exemplo que poderiamos pôr dentro do HTML:

//<html>
    //<script>
        let title = document.createElement('h1')
        title.className = 'title'
        title.style.fontSize = '20px'
        title.textContent = 'Oi, sou um teste de metódo'

        console.log(title)
   //</script>
//</html>


// para criar mais de uma TAG, utilizamos o loop for, exemplo:

//<html>
    //<script>
    let title
    for(let i = 0; i < 3; i++){
        title = document.createElement('h1')
        title.className = 'title'
        title.style.fontSize = '20px'
        title.textContent = i

        console.log(title)
    }
    //</script>
//</html>

/* para vermos o elemento criado no HTML, devemos anexar ao pai como um elemento filho 
através do document.body e appendChild()*/

//<html>
    //<script>
    let title
    for(let i = 0; i < 3; i++){
        title = document.createElement('h1')
        title.className = 'title'
        title.style.fontSize = '20px'
        title.textContent = i
        document.body.appendChild(title)
    }
    //</script>
//</html>

/* Também podemos remover elementos filhos 
por exemplo remover todas as LI de uma UL, veja um exemplo abaixo*/

const ul = document.querySelector('ul')
const li = document.querySelectorAll('li')
for (const listas of li){
    ul.removeChild(listas) // com esse loop, removeríamos todos os LIs presentes na UL

}

/* Mas existe uma maneira ainda melhor de remover todos os elementos de uma tag
utilizando o innerHTML, podemos remover todos os LIs de forma mais rapida, veja o exemplo abaixo*/

const ul_ = document.querySelector('ul')
ul_.innerHTML = ''