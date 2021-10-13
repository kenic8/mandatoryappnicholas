import { Link } from "@reach/router";
import AddRecipe from "./AddRecipe";

function Recipes(props) {
  const { data, addRecipe } = props;

  return (
    <>
      <h3>List</h3>
      <ol>
        {
          data.map( recipe => <li>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li> )
        }
      </ol>

      <AddRecipe addRecipe={addRecipe}/>
    </>
  );
}

export default Recipes;
