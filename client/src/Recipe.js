function Recipe(props) {
  const { id, getRecipe } = props;
  const recipe = getRecipe(id);

  // Conditional rendering
  if (recipe === undefined) {
    return <p>Nothing here</p>;
  } else return (
    <>
      <h3>Recipe: {recipe.title}</h3>

      <p>{recipe.description}</p>
    </>
  );
}

export default Recipe;
