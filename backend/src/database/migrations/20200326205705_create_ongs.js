exports.up = function(knex) { // para criar tabelas
  return knex.schema.createTable('ongs', function(table) {
      table.string('id').primary(); // id será criado manualmente a fim de privacidade
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
        
  })
};

exports.down = function(knex) { // para deletar ou desfazer algo errado
    return knex.schema.dropTable('ongs');
};
