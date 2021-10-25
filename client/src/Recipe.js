function Recipe(props) {
  const { id, getRecipe } = props;
  const recipe = getRecipe(id);

  // Conditional rendering
  if (recipe === undefined) {
    return <p>Nothing here</p>;
  } else return (
    <>
      <h3>Recipe: {recipe.title}</h3>
      <p>{recipe.desc}</p>
      <p>{recipe.ingredients}</p>
      <h2>{recipe.time > 25 ? "Hard" : "Easy"}</h2>
    </>
  );
}

export default Recipe;
