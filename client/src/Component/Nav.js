import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Nav = ({ user, setUser }) => {
	const handleSignout = async () => {
		await axios.get("http://localhost:4000/api/auth/logout");
		setUser(null);
		window.location.reload();
	};

	return (
		<nav className="px-10 py-5 bg-gray-800 text-xl text-white">
			<div className="flex justify-between">
				<Link to="/">Shopping Site</Link>
				<div className="flex gap-5">
					{user ? (
						<>
							<span>Hi {user.name}</span>
							<a
								onClick={handleSignout}
								className="text-red-400 cursor-pointer"
							>
								Signout
							</a>
							<Link to="/cart">Cart (0)</Link>
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
