import recipeDefaultFoto from '../../images/recipeDefaultFoto/recipe-default-foto@1x.jpg';
export const RecipePreparation = ({ instructions }) => {
  //   const dispatch = useDispatch();

  return (
    <>
      <h2>Recipe Preparation</h2>
      <img src={recipeDefaultFoto} alt="foto of some drinks" />
      <p>{instructions}</p>
    </>
  );
};
