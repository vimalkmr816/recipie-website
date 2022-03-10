import React from "react";
import './footer.css'
import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";
function Footer() {
	return (
		<div className="d-flex flex-column footer">
			<TopFooter />
			<BottomFooter />
		</div>
	);
}

export default Footer;
