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
					<h5 className="paragraph-primary">Use Songtradr to monetize and manage your music with YouTube Content Id.</h5>
					<Button className={`str-btn str-btn--orange str-btn--orange_hover`}>
						Get started
					</Button>
				</div>
			</div>
			<div className="main-two">
				<div className="str-panel" />
			</div>
		</section>
		<section className="cid">
			<div className="cid-one str-banner-orange str-banner__middle">
				<div>
					<h2 className="heading-secondary heading-secondary--main">What is Youtube Content ID?</h2>
					<h5 className="paragraph-primary">YouTube Content ID is a digital fingerprinting system (developed by Google) which is used to identify and manage copyrighted content on YouTube. Looking for matches, YouTube scans videos registered with Content ID by content owners. Content owners can then choose to have matching content taken down or to monetize it.</h5>
				</div>
			</div>
			<div className="cid-two">
				<div className="str-panel"></div>
			</div>
		</section>
		<section className="benefits">
			<div className="benefits-one str-banner-orange str-banner__middle">
				<div>
					<h2 className="heading-secondary heading-secondary--main">Lorem Ipsum Benefits & Features</h2>
				</div>
			</div>
			<div className="benefits-two">
				<div className="str-panel">
					<h2 className="heading-secondary heading-secondary--main str-music">Monetize</h2>
					<h5 className="paragraph-primary">Artists can generate income from anyone who uses their songs in videos uploaded to YouTube.</h5>
				</div>
				<div className="str-panel">
					<h2 className="heading-secondary heading-secondary--main str-music">Rights Management</h2>
					<h5 className="paragraph-primary">Songtradr automatically splits and deposits revenues to all rights-holders' accounts accordingly.</h5>
				</div>
				<div className="str-panel">
					<h2 className="heading-secondary heading-secondary--main str-music">Customizable</h2>
					<h5 className="paragraph-primary">Song owners can choose which songs they wish to opt in and monetize.</h5>
				</div>
				<div className="str-panel">
					<h2 className="heading-secondary heading-secondary--main str-music">Gain Access</h2>
					<h5 className="paragraph-primary">YouTube's Content ID system is typically restricted to large labels, publishers and distributors.</h5>
				</div>
			</div>
		</section>
		<section className="fill">
			<div className="fill-one">
				<div className="str-banner-orange str-banner__left">
					<h2 className="heading-primary heading-primary--main">Fill in the Missing Piece</h2>
					<h5 className="paragraph-primary">You could be leaving money on the table. YouTube right management can add to your earnings alongside revenue streams, distro streaming royalties, music licensing transactions, and other monetization deals.</h5>
				</div>
				<div className="graph">

				</div>
			</div>
			<div className="fill-two">
				<div className="panel-one str-panel"></div>
				<div className="panel-two str-panel"></div>
				<div className="panel-three str-panel"></div>
			</div>
		</section>
		<section className="carousel">
			<div className="carousel-one">
				<div className="artists">
					<div className="artists-one str-panel"></div>
					<div className="artists-two str-panel"></div>
				</div>
			</div>
			<div className="carousel-two">
				<div className="comments">
					<span className="paragraph-primary">Songtradr Arist</span>
					<h5 className="heading-primary heading-primary--sub str-banner-orange str-banner__left">
						"I think it's mega that Songtradr gives everyone and especially young ambitious musicians the chance to license their music in an uncomplicated way."
					</h5>
					<h5 className="heading-primary heading-primary--sub">
						-Kwadi
					</h5>
					<div className="arrows">
						<div className="arrows-left"></div>
						<div className="arrows-right"></div>
					</div>
				</div>
			</div>
		</section>
		<section className="eligible">
			<div className="eligible-one str-banner-orange str-banner__middle">
					<h2 className="heading-primary heading-primary--main">What Songs are Eligible?</h2>
					<h2 className="heading-primary heading-primary--sub">You can only opt-in songs which you own and which are free of unlicensed thidr-party audio samples.</h2>
			</div>
			<div className="eligible-two">
				<div className="forbidden-icon">
					<div className="forbidden-image"></div>
				</div>
				<div className="forbidden-text">
					<h5 className="paragraph-primary">Do not submit tracks for YouTube Rights Management that:</h5>
				</div>

			</div>
			<div className="eligible-three">
				<div className="str-card str-panel">
					<div className="str-card-image"></div>
					<div className="str-card-text">
						<h5 className="paragraph-primary">Contain any third-party content that you have not licensed for this use (such as unlicensed samples or beats)
						</h5>
					</div>
				</div>
				<div className="str-card str-panel">
					<div className="str-card-image"></div>
					<div className="str-card-text">
						<h5 className="paragraph-primary">Contain public domain music, clips or speeches.
						</h5>
					</div>
				</div>
				<div className="str-card str-panel">
					<div className="str-card-image"></div>
					<div className="str-card-text">
						<h5 className="paragraph-primary">Have any ambient sound effects (sounds from nature), production loops or samples from online audio libraries.
						</h5>
					</div>
				</div>
				<div className="str-card str-panel">
					<div className="str-card-image"></div>
					<div className="str-card-text">
						<h5 className="paragraph-primary">Are already represented for YouTube Rights Management by another provider.
						</h5>
					</div>
				</div>
				<div className="str-card str-panel">
					<div className="str-card-image"></div>
					<div className="str-card-text">
						<h5 className="paragraph-primary">Are karaoke versions or sound-a-like cover versions.
						</h5>
					</div>
				</div>
			</div>
		</section>
		<section className="faq">
			<div className="faq-one str-banner-white str-banner__middle">
				<h2 className="heading-secondary heading-secondary--main">Frequently Asked Questions</h2>
			</div>
			<div className="faq-two">
				<div className="str-table str-panel">
					<div className="str-table-row">
						<div className="heading-secondary heading-secondary--sub">
						How do I get paid for YouTube monetization?
						</div>
						<span className="plus"></span>
					</div>
					<div className="str-table-row">
						<div className="heading-secondary heading-secondary--sub">
						Why should I use Songtradr for YouTube Rights Management?
						</div>
						<span className="plus"></span>
					</div>
					<div className="str-table-row">
						<div className="heading-secondary heading-secondary--sub">
						How do my songs make money on YouTube?
						</div>
						<span className="plus"></span>
					</div>
					<div className="str-table-row">
						<div className="heading-secondary heading-secondary--sub">
						Are all songs eligible for YouTube Rights Management?
						</div>
						<span className="plus"></span>
					</div>
				</div>
			</div>
		</section>
		<section className="started">
			<div className="str-banner-orange str-banner__middle">
				<h2 className="heading-primary heading-primary--main">Get Started Today</h2>
				<h5 className="paragraph-primary">Use Songtradr to monetize and manage your music with YouTube Content Id.</h5>
				<Button className={`str-btn str-btn--orange str-btn--orange_hover`}>
						Opt-In
				</Button>
			</div>
		</section>
	</div>
	)
