import React from "react";

function TopFooter() {
	return (
		<div className="d-flex justify-content-around align-items-center gap-4">
			<div className="form w-25">
				<form>
					<h3>Subscribe</h3>
					<p>
						Register and get notigied about all the news and updates before it
						gets too late.
					</p>
					<input type="email" />
					<button>Sign up</button>
				</form>
			</div>
			<div className="explore">
				<ul className="footer-list">
					<li className="footer-list-items">Browse Recipies</li>
					<li className="footer-list-items">Submit a Recipie</li>
					<li className="footer-list-items">Our Chefs</li>
					<li className="footer-list-items">Latest News</li>
					<li className="footer-list-items">Contact</li>
				</ul>
			</div>
			<div className="contact w-25 text-left">
				<p className="company-address">
					787 Mark View Street, New Town, California
				</p>
				<p className="company-mail">needhelp@thatix.com</p>
				<p className="company-mobile">666 888 0000</p>
			</div>
		</div>
	);
}

export default TopFooter;
