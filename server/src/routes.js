module.exports = () => {
  const express = require("express");
  const router = express.Router();

  const data = [
    { id: 1, title: 'Pizza 1', description: "Pizza is nice 1" },
    { id: 2, title: 'Pizza 2', description: "Pizza is nice 2" },
    { id: 3, title: 'Pizza 3', description: "Pizza is nice 3" },
  ];
  let nextId = 4;

  /**** Routes ****/

  // "/api/cooking"
  router.get("/cooking", (req, res) => {
    res.json(data);
  });
  
  router.post("/cooking", (req, res) => {
    const newRecipe = { 
      id: nextId,
      title: req.body.title, 
      description: req.body.desc,
      ingredients: req.body.ingredients    
    };
  
    nextId++;
    data.push(newRecipe);
    res.json(newRecipe);
  });

  return router;
}
