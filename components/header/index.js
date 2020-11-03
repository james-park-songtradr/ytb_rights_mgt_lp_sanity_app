import React from 'react';
import { Menu, Button } from "antd";
import Link from 'next/link';

const NavigationLinks = () => (
		<Menu className={`header`}>
			<Menu.ItemGroup className={`menu-itemgroup menu-itemgroup-left`} title="">
				<div className={`logo`}>
					<img src="https://d2wbsh8jsobsq.cloudfront.net/general/landing/songtradr-logo.png"></img>
				</div>
				<Menu.Item className={`menu-item`}>
					<Link href="/">
						<a> Music Licensing</a>
					</Link>
				</Menu.Item>
				<Menu.Item className={`menu-item`}>
					<Link href="/">
						<a>Artists Services</a>
					</Link>
				</Menu.Item>
				<Menu.Item className={`menu-item`}>
					<Link href="/">
						<a>Music Search</a>
					</Link>
				</Menu.Item>
				<Menu.Item className={`menu-item`}>
					<Link href="/">
						<a>Featured Placements</a>
					</Link>
				</Menu.Item>
			</Menu.ItemGroup>
			<Menu.ItemGroup className={`menu-itemgroup menu-itemgroup-right`} title="">
				<Menu.Item className={`menu-item`}>
					<Link href="/">
						<a>Log In</a>
					</Link>
				</Menu.Item>
				<div className={`button`}>
					<Button className={`str-btn str-btn--white str-btn--white_hover`}>
						Sign Up Free
					</Button>
				</div>
			</Menu.ItemGroup>
		</Menu>
	)

export default NavigationLinks;