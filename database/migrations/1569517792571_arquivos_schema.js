'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArquivosSchema extends Schema {
  up () {
    this.create('arquivos', (table) => {
      table.increments()
      table.integer('tarefa_id')
        .unsigned().references('id').inTable('tarefas') // Campo ID tem a referencia do campo id da tabela tarefas
        .onUpdate('CASCADE').onDelete('CASCADE') // Update e Delete em cascata
      table.string('caminho').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('arquivos')
  }
}

module.exports = ArquivosSchema
