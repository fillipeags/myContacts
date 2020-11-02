class ContactController {
  index(request, response) {
    // Listar todos os registros
    response.send('Sent from ContactController');
  }

  show() {
    // Obter UM registro
  }

  store() {
    // Criar um registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

// Singleton
module.exports = new ContactController();
