'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Rota para a view hello-world
Route.get('hello-world', ({ view }) => {
  return view.render('hello-world')
})

// Rota para Main
Route.get('main', ({ view }) => {
  return view.render('main')
})
// Rota para Login do usuário

Route.post('/user', 'UserController.create')
Route.post('/login', 'UserController.login')

Route.resource('tarefa', 'TarefaController').apiOnly().middleware('auth')

Route.post('/tarefa/:id/arquivo', 'ArquivoController.create').middleware('auth')
