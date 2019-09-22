import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";

const AboutPage = () => (
	<Layout>
		<h1>About the Author</h1>
		<p>Welcome to my Gatsby site.</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
);

export default AboutPage;
