import React from "react";
import RecipieCard from "./RecipieCard";
function RecipieSection({ recipies }) {
	return (
		<div>
			<div className="d-flex flex-wrap m-4 justify-content-center">
				{recipies.map((map_data, index) => (
					<RecipieCard data={map_data} key={index} />
				))}
			</div>
		</div>
	);
}

export default RecipieSection;
