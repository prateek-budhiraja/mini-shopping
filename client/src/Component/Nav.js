import React from "react";
import { Link } from "react-router-dom";
export const Nav = ({ user }) => {
	return (
		<nav className="px-10 py-5 bg-gray-800 text-xl text-white">
			<div className="flex justify-between">
				<Link to="/">Shopping Site</Link>
				<div className="flex gap-5">
					{user ? (
						<>
							<span>Hi Username</span>
							<Link to="/signout" className="text-red-400">
								Signout
							</Link>
							<Link to="/cart">Cart</Link>
						</>
					) : (
						<>
							<Link to="/signup">Sign Up</Link>
							<Link to="/login">Log In</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};
