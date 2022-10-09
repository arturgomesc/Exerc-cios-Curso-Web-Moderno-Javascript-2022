{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera);
            }
        }
    }
}

console.log(sera); // mesmo que a variável roda fora do escolpo, não é recomendado rodar código dessa forma

function teste() {
    var local = 123
    console.log(local);
}

teste()
console.log(local); // a variável criada em uma function só rodará dentro do escolpo