const db = require('../../data/db-config');

const getAll = () => {
  return db('accounts')
}

const getById = async id => {
  const [account] = await db('accounts').where('id', id)
  return account
}

const create = async account => {
  const trimAccount = { ...account, "name": account.name.trim()}
  const [id] = await db('accounts').insert(trimAccount)
  return getById(id)
}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = async id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
