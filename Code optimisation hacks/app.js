//forEach block with one argument
export const renderResults = recipes => {
	// recipes.foreach(cur => renderRecipe(cur));
	recipes.forEach(renderRecipe); //simple way, autmatically passes current cur
};
