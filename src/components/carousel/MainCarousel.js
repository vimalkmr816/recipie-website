import React from "react";
import { Carousel } from "react-bootstrap";
function MainCarousel({ img }) {
	return (
		<Carousel className="w-50">
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="F:\Practice\React Projects\recipie-website\images\767042.jpg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://www.edamam.com/web-img/241/241127017bafd396421fc3c5b3eb0483.jpg"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://www.edamam.com/web-img/efe/efe1546ab8593aaa62ed4fac11838f35.jpg"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default MainCarousel;
