import React from "react";
import AddressMap from "./AddressMap";
function ContactForm() {
	const styles = {
		width: "48%",
        background: "#f4f3f0"
	};
    const textareaStyle={
        background: "#f4f3f0"
    }
	return (
		<div className="contact-form-container">
			<form className="d-flex flex-column m-4 w-50 m-auto ">
                <h1>Write a Message</h1>
				<div className="d-flex flex-wrap align-self-center justify-content-around border border-2 border-danger ">
					<input
						type="text"
						placeholder="Your Name"
						className="p-3 m-2 rounded-3 border-0"
						style={styles}
					/>

					<input
						type="text"
						placeholder="Your Email"
						className="p-3 m-2 rounded-3 border-0"
						style={styles}
					/>

					<input
						type="text"
						placeholder="Your Subject"
						className="p-3 m-2 rounded-3 border-0"
						style={styles}
					/>

					<input
						type="text"
						placeholder="Your Phone Number"
						className=" p-3 m-2 rounded-3 border-0"
						style={styles}
					/>
					<textarea rows='10' type="text" placeholder="Your Message" className="w-100 m-2 rounded-3 border-0 p-3"style={textareaStyle}/>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
