import React from 'react';
import Layout from "../components/Layout";
import Head from "next/head";

export default (props) => (
		<Layout>
			<Head>
				<title>Login</title>
				<meta name="description" content="Login"/>
			</Head>

			<div className="inner">
				<section>
					<form method="post" action="#">
						<div className="field">
							<label htmlFor="name">Email</label>
							<input type="email" name="email" id="email"/>
						</div>
						<div className="field">
							<label htmlFor="password">Password</label>
							<input type="password" name="password" id="password"/>
						</div>
						<ul className="actions">
							<li><input type="submit" value="Login" className="special"/></li>
						</ul>
					</form>
				</section>
			</div>
		</Layout>
)