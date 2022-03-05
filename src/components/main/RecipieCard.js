import React from "react";

function RecipieCard({ data }) {
	return console.log("vimal");
	// <div className="container w-25 border border-3">
	// 	<img
	// 		src={JSON.parse(JSON.stringify(data.recipe.image))}
	// 		alt=""
	// 		className="w-100"
	// 	/>
	// 	<div className="content d-flex flex-column align-items-start justify-content-end ">
	// 		<h3 className="title">
	// 			{JSON.parse(JSON.stringify(data.recipe.label))}
	// 		</h3>
	// 		<div className="author">
	// 			{JSON.parse(JSON.stringify(data.recipe.source))}
	// 		</div>
	// 		<div className="meal-type">
	// 			{JSON.parse(JSON.stringify(data.recipe.mealType))}
	// 		</div>
	// 		{/* {JSON.stringify(data.recipe.dietLabels)} */}
	// 		<ul className="diet-labels list-unstyled d-inline-flex gap-2 bg-success px-2 py-1 text-light">
	// 			{data.recipe.dietLabels.map((value, index) => (
	// 				<li key={index}>{value}</li>
	// 			))}
	// 		</ul>
	// 	</div>
	// </div>
}

export default RecipieCard;
