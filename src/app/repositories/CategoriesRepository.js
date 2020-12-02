const db = require('../../database');

class CategoriesRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM categories ORDER BY name');
    return rows;
  }

  async create({ name }) {
    const [row] = await db.query(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
    `, [name]);
    return row;
	}

	async findById(id) {
		const [row] = await db.query(`
			SELECT name FROM categories
			WHERE id = $1
		`, [id]);
    return row;
  }
}

module.exports = new CategoriesRepository();
