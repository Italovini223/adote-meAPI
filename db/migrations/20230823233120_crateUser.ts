import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.uuid('id').primary()

    table.text('name')
    table.text('email')
    table.text('password')

    table.text('avatar')
    table.integer('phone_number')
    
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users')
}

