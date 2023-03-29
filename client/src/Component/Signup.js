import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();
	const handleSignUp = async (e) => {
		e.preventDefault();
		const user = await axios.post("http://localhost:4000/api/auth/signup/", {
			name,
			email,
			phone,
			password,
		});
		if (user) {
			navigate("/login");
		}
		setName("");
		setEmail("");
		setPhone("");
		setPassword("");
	};

	return (
		<div className="flex items-center justify-center">
			<div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
				<div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
					<h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
						Create a new account
					</h2>
					<p className="mt-2 text-base text-gray-600">
						Already have an account?{" "}
						<Link
							to="/login"
							className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700"
						>
							Sign In
						</Link>
					</p>

					<form onSubmit={handleSignUp} className="mt-8">
						<div className="space-y-5">
							<div>
								<label
									htmlFor="name"
									className="text-base font-medium text-gray-900"
								>
									{" "}
									Full Name{" "}
								</label>
								<div className="mt-2.5">
									<input
										className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
										type="text"
										placeholder="Enter You Full Name"
										id="name"
										value={name}
										onChange={(e) => setName(e.target.value)}
									></input>
								</div>
							</div>

							<div>
								<label
									htmlFor="email"
									className="text-base font-medium text-gray-900"
								>
									{" "}
									Email address{" "}
								</label>
								<div className="mt-2.5">
									<input
										className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
										type="email"
										placeholder="Enter Your Email"
										id="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									></input>
								</div>
							</div>

							<div>
								<label
									htmlFor="phone"
									className="text-base font-medium text-gray-900"
								>
									{" "}
									Phone number{" "}
								</label>
								<div className="mt-2.5">
									<input
										className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
										type="phone"
										placeholder="Enter Your Phone no"
										id="phone"
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
									></input>
								</div>
							</div>

							<div>
								<label
									htmlFor="password"
									className="text-base font-medium text-gray-900"
								>
									{" "}
									Password{" "}
								</label>
								<div className="mt-2.5">
									<input
										className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
										type="password"
										placeholder="Enter Your Password"
										id="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									></input>
								</div>
							</div>

							<div>
								<button className="w-full inline-flex items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
									Get started
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-4 h-4 ml-2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
										/>
									</svg>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
