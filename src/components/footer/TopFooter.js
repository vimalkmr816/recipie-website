import React from "react"

function TopFooter() {
	return (
		<div className=" top_footer_container d-flex justify-content-around align-items-center gap-4">
			<div className="form w-25 ">
				<form className="d-flex flex-column align-items-start justify-content-center">
					<h3>Subscribe</h3>
					<span className="align-self-start">
						Register and get notigied about all the news and updates before it gets too late.
					</span>
                    <div className="d-flex align-items-center justify-content-center gap-2 w-100">
					<input type="email" className="w-75 p-2 rounded-3 border-0"/>
					<button className="sign-up-btn btn-success rounded-3 p-2 border-0 my-4 ">Sign up</button>
                    </div>
				</form>
			</div>
			<div className="explore">
				<ul className="footer-list list-unstyled d-flex flex-column align-items-start gap-3">
					<li className="footer-list-items">Browse Recipies</li>
					<li className="footer-list-items">Submit a Recipie</li>
					<li className="footer-list-items">Our Chefs</li>
					<li className="footer-list-items">Latest News</li>
					<li className="footer-list-items">Contact</li>
				</ul>
			</div>
			<div className="contact w-25 d-flex flex-column align-items-start justify-content-center">
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
