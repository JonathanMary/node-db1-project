const router = require('express').Router()
const Account = require('./accounts-model');

router.get('/', async (req, res, next) => {
  Account.getAll()
         .then(accounts => {
           res.status(200).json(accounts)
         })
         .catch(next)
})

router.get('/:id', (req, res, next) => {
  Account.getById(req.params.id)
         .then(account => {
           res.status(200).json(account)
         })
         .catch(next)
})

router.post('/', (req, res, next) => {
  Account.create(req.body)
         .then(newAccount => {
           console.log(newAccount)
           res.status(201).json(newAccount);
         })
         .catch(next)
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
  res.status(500).json({
    message: 'something went wrong inside the accounts router',
    errMessage: err.message,
  })
})

module.exports = router;
