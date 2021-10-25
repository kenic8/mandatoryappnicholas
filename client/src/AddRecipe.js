import { useState } from 'react';

function AddRecipe(props) {
  const { addRecipe } = props;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [cookingTime, setcookingTime] = useState("");
  

  // Conditional rendering
  return (
    <>
      <h3>Add Recipe</h3>
      <form>
      <label>Title</label>
      <input onChange={(event) => setTitle(event.target.value)} type="text" />
      <label>description</label>
      <input onChange={(event) => setDescription(event.target.value)} type="text" />
      <label>ingredients</label>
      <input onChange={(event) => setIngredients(event.target.value)} type="text" />
      <label>Time</label>
      <input onChange={(event) => setcookingTime(event.target.value)} type="text" />
</form>
      <button type="button" onClick={(e) => {
        const ingArray = ingredients.split(" ");
        addRecipe(title, description, ingArray,cookingTime);
      }}>Add Recipe
      </button>
    </>
  );
}

export default AddRecipe;
