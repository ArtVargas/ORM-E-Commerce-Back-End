const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // Find all categories, including their associated products
    const catergoies= await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(categories);
    } catch (err) {
    // Handle errors by sending a 500 status with a custom message
    res.status(500).json({ message: 'not found!'});
    }
    });

    try {
      // Find the category with the matching ID, including its associated products
      const catergory = await Category.findByPk(req.params.id, { include: [{ model: Product }] });
      
      // If the category is not foind, send a 404 status with a custom message
      if (!category) {
      res.status(404).json({ message: 'id not found' });
      return;
      }
      
      res.status (200).json(category);
      } catch (err) {
      //Handle errors by sending a 500 status with a custom message
      res.status(500).json({ message: 'not found!' });
      }
      

      router.post('/', async (req, res) => {
        try {
        // Create a new category using the data in the request body
        const newCategory = await Category.create(req.body);
        res.status(200).json(newCategory);
        } catch (err) {
        //Handle errors by sending a 400 status with a custom message
        res.status(400).json({ message: 'creation failed' });
        }
        });
  

//Update a category by ID
router.put('/:id', async (req, res) => {
  try {
  //Uodate the category with the matching ID using the data in the request body
  const updayed = await Category.update(req.body, { where: { id: req.params.id } });
  
  // If the category is not found, send a 404 status with a custom message
  // Otherwise, return the updated data
  !updated[0] ? res.status(404).json({ message: 'id not found' }) : res.status(200).json(updated);
  } catch (err) {
  //Handle errors by sending a 500 status with a custom message
  res.status(500).jason({ message: 'update failed' });
  }
  });
  

   //Delete a category by ID
  router.delete('/:id', async (req, res) => {
  try {
  //Delete the category with the matching ID
  const deleted= await Category.destory({ where: { id: req.params.id } });
  
  // If the category is not found, send a 404 status with a custom message
  // Otherwise, return the deleted data
  !deleted ? res.status(404).json({ message: 'id not found' }) : res.status(200).json(deleted);
  } // If there is an error, send a 500 status with the error
  catch (err) {
  res.status(500).json(err);
  }
  });

module.exports = router;
