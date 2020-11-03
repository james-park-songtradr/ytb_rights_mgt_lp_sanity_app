import React from "react";
import Header from "./../components/header"
import { Button, version, DatePicker } from "antd";

export default Home => (
	<div>
		<Header />
		<section className="main">
			<div className="main-one">
				<div className="field">
					<h1 className="heading-primary heading-primary--main">YouTube Rights Management Made Simple</h1>
					<h2 className="paragraph-primary">Use Songtradr to monetize and manage your music with YouTube Content Id.</h2>
					<Button className={`str-btn str-btn--orange str-btn--orange_hover`}>
						Get started
					</Button>
				</div>
			</div>
			<div className="main-two">
				<div className="str-panel">

				</div>
			</div>
		</section>
		{/* <h1 className="heading-primary heading-primary--main">
			Hello World!!
		</h1>
		{version}
		<DatePicker />
		<Button type="primary">Primary Button</Button> */}
	</div>
	)
