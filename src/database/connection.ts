import knex from 'knex';
//Patroniza o acesso à arquivos
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection:{
        filename:path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault:true,
});

export default connection;

//Migrations - histórico do banco de dados