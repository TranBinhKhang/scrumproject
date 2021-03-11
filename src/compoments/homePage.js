import React from 'react';
import '../homepage.css';
import ImgGeneric1 from '../images/01.jpg'
import ImgGeneric2 from '../images/02.png'
import ImgProgramming from '../images/04.jpg'
import ImgBusiness from '../images/05.jpg'
import ImgGraphicDesign from '../images/06.png'
import IconTwitter from '../images/twitter.png'
import IconFacebook from '../images/facebook.png'
import IconInstagram from '../images/instagram.png'
import IconSnapchat from '../images/snapchat.png'


function HomePage() {
	return (
		<div>
			<div>
				<title>Home Page</title>
			</div>
			<div>


				<section id="banner">
					<div className="inner">
						<header>
							<h1>This is University of Greenwich</h1>
							<p>Aliquam libero augue varius non odio nec faucibus congue<br />felis quisque a diam rutrum tempus massa accumsan faucibus purus.</p>
						</header>
						<a href="#main" className="button big scrolly">Learn More</a>
					</div>
				</section>


				<div id="main">


					<section className="wrapper style1">
						<div className="inner">

							<div className="flex flex-2">
								<div className="col col1">
									<div className="image round fit">
										<a href="generic.js" className="link"><img src={ImgGeneric1} alt="" /></a>
									</div>
								</div>
								<div className="col col2">
									<h3>Welcome to our Project!</h3>
									<p>Etiam posuere hendrerit arcu, ac blandit nulla. Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex blandit augue. Ut vitae neque fermentum, luctus elit fermentum, porta augue. Nullam ultricies, turpis at fermentum iaculis, nunc justo dictum dui, non aliquet erat nibh non ex.</p>
									<p>Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex blandit augue. Ut vitae neque fermentum, luctus elit fermentum, porta augue. Nullam ultricies, turpis at fermentum iaculis, nunc justo dictum dui, non aliquet erat nibh non ex. </p>
									<a href="#" className="button">Learn More</a>
								</div>
							</div>
						</div>
					</section>


					<section className="wrapper style2">
						<div className="inner">
							<div className="flex flex-2">
								<div className="col col2">
									<h3>Contributions</h3>
									<p>Etiam posuere hendrerit arcu, ac blandit nulla. Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex blandit augue. Ut vitae neque fermentum, luctus elit fermentum, porta augue. Nullam ultricies, turpis at fermentum iaculis, nunc justo dictum dui, non aliquet erat nibh non ex.</p>
									<p>Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex blandit augue. Ut vitae neque fermentum, luctus elit fermentum, porta augue. Nullam ultricies, turpis at fermentum iaculis, nunc justo dictum dui, non aliquet erat nibh non ex. </p>
									<a href="#" className="button">Learn More</a>
								</div>
								<div className="col col1 first">
									<div className="image round fit">
										<a href="generic.js" className="link"><img src={ImgGeneric2} alt="" /></a>
									</div>
								</div>
							</div>
						</div>
					</section>


					<section className="wrapper style1">
						<div className="inner">
							<header className="align-center">
								<h2>Major</h2>
								<p>Cras sagittis turpis sit amet est tempus, sit amet consectetur purus tincidunt.</p>
							</header>
							<div className="flex flex-3">
								<div className="col align-center">
									<h3>Programming</h3>
									<div className="image round fit">
										<img src={ImgProgramming} alt="" />
									</div>
									<p>Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet. </p>
									<a href="#" className="button">Learn More</a>
								</div>
								<div className="col align-center">
									<h3>Business Administrator</h3>
									<div className="image round fit">
										<img src={ImgBusiness} alt="" />
									</div>
									<p>Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet. </p>
									<a href="#" className="button">Learn More</a>
								</div>
								<div className="col align-center">
									<h3>Graphic Design</h3>
									<div className="image round fit">
										<img src={ImgGraphicDesign} alt="" />
									</div>
									<p>Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet. </p>
									<a href="#" className="button">Learn More</a>
								</div>
							</div>
						</div>
					</section>

				</div>


				<footer id="footer">

					<div className="container-icons">
						<div className="list-icon">
							<div className="icon-items">
								<div className="icon-twitter"><img src={IconTwitter}></img></div>
								<div><a href="#" className="text-twitter"><span className="label">Twitter</span></a></div>
							</div>
							<div className="icon-items">
								<div className="icon-twitter"><img src={IconFacebook}></img></div>
								<div><a href="#" className="text-twitter"><span className="label">Facebook</span></a></div>
							</div>
							<div className="icon-items">
								<div className="icon-twitter"><img src={IconInstagram}></img></div>
								<div><a href="#" className="text-twitter"><span className="label">Instagram</span></a></div>
							</div>
							<div className="icon-items">
								<div className="icon-twitter"><img src={IconSnapchat}></img></div>
								<div><a href="#" className="text-twitter"><span className="label">Snapchat</span></a></div>
							</div>
						</div>
						{/* <li><a href="#" className="icon-facebook"><span className="label">Facebook</span></a></li>
						<li><a href="#" className="icon-instagram"><span className="label">Instagram</span></a></li>
						<li><a href="#" className="icon-snapchat"><span className="label">Snapchat</span></a></li> */}
					</div>
				</footer>
			</div>
		</div>
	)
}
export default HomePage;