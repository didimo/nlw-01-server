import express from 'express';

const app = express();

//Sempre por padrão requisições rest
app.use(express.json());
//Rota: Endereço completp
//Recurso: Qual entidade estamos acessando
// GET busca
// POST criação
// PUT atualizar informação existente
// DELETE remover informação do backend
 
const users = [
    'Diego',
    'Jonas',
    'Gabriel'
];


//Query params, parâmetros opcionais
app.get('/users', (request,response) => {
    const search = String(request.query.search);
    console.log(search);
    //Percorre os usuários, aplicando verificação se o registro pode retornar
    const filteredUsers = search ? users.filter( user => user.includes(search)): users;
    
    return response.json(filteredUsers);
});


//Request params, são paramentros que vem na própria rota
app.get('/users/:id', (request,response) => {
    const id = Number(request.params.id);   
    
    return response.json(users[id]);
});

//Request body: Parâmetros que vem no corpo da requisição
app.post('/users', (request, response)=>{
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});

app.listen(3333);