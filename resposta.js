const alunos = [
    {
        nome: "Jorge",
        nota: 2,
    },
    {
        nome: "Lucas",
        nota: 7,
    },
    {
        nome: "Pedro",
        nota: 5,
    },
    {
        nome: "Paula",
        nota: 9,
    },
    {
        nome: "Cassio",
        nota: 4,
    },
    {
        nome: "Ana",
        nota: 6,
    }
]

function media(alunos){
    return alunos.filter(function(item){
        return item.nota >= 6;
    })
}

console.log(media(alunos));