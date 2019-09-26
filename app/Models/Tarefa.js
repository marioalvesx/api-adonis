'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tarefa extends Model {
  users() { // Uma tarefa pode ter vários usuários
    return this.belongsTo('App/Models/User')
  }

  arquivos() {  // Uma tarefa pode ter vários arquivos
    return this.hasMany('App/Models/Arquivo')
  }
}

module.exports = Tarefa
