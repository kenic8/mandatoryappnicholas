import { useState } from 'react';

function AddRecipe(props) {
  const { addRecipe } = props;

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [ingredients, setIngredients] = useState("");

  // Conditional rendering
  return (
    <>
      <h3>Add Recipe</h3>

      <input onChange={(event) => setTitle(event.target.value)} type="text" />
      <input onChange={(event) => setDesc(event.target.value)} type="text" />
      <input onChange={(event) => setIngredients(event.target.value)} type="text" />

      <button type="button" onClick={(event) => {
        const ingArray = ingredients.split(" ");
        addRecipe(title, desc, ingArray);
      }}>Add Recipe
      </button>
    </>
  );
}

export default AddRecipe;
