import React from "react";
import RecipieCard from "./RecipieCard";
function RecipieSection({ recipies }) {
	return (
		<div>
			{/* <RecipieCard data={recipies} /> */}
			{console.log(recipies)}
			{recipies.map((map_data) => {
				<RecipieCard data={map_data} />;
				console.log(map_data);
			})}
		</div>
	);
}

export default RecipieSection;
