import React from "react";

function ContactForm() {
	const styles = {
		width: "48%",
	};
	return (
		<div>
			<form className="d-flex flex-column border border-2 border-danger m-4 w-50 m-auto ">
				<div className="d-flex flex-wrap align-self-center justify-content-around border border-2 border-danger ">
					<input
						type="text"
						placeholder="Your Name"
						className="p-3 m-2"
						style={styles}
					/>

					<input
						type="text"
						placeholder="Your Email"
						className="p-3 m-2"
						style={styles}
					/>

					<input
						type="text"
						placeholder="Your Subject"
						className="p-3 m-2"
						style={styles}
					/>

					<input
						type="text"
						placeholder="Your Phone Number"
						className=" p-3 m-2"
						style={styles}
					/>
					<input type="text" placeholder="Your Message" className="w-100 m-2" />
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
