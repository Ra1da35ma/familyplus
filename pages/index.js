import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
		<Layout>
			<div>
				<Banner/>

				<div id="main">
					<section id="one" className="tiles">
						<article style={{backgroundImage: `url('/static/images/pic01.jpg')`}}>
							<header className="major">
								<h3>Get Started</h3>
								<p>Sign Up and start connecting</p>
							</header>
							<Link href="/landing"><a className="link primary"></a></Link>
						</article>
						<article style={{backgroundImage: `url('/static/images/pic02.jpg')`}}>
							<header className="major">
								<h3>FamilyPlus Connect</h3>
								<p>Connect and Meet-Up with other Families. Interact and even share business Ideas Exclusive to our special members.</p>
							</header>
							<Link href="/landing"><a className="link primary"></a></Link>
						</article>
						<article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
							<header className="major">
								<h3>Need a Partner?</h3>
								<p>Meet Up with your dream partner and complete your deen</p>
							</header>
							<Link href="/meet-up"><a className="link primary"></a></Link>
						</article>
						<article style={{backgroundImage: `url('/static/images/pic04.jpg')`}}>
							<header className="major">
								<h3>Ipsum</h3>
								<p>Nisl sed aliquam</p>
							</header>
							<Link href="/landing"><a className="link primary"></a></Link>
						</article>
					</section>
					<section id="two">
						<div className="inner">
							<header className="major">
								<h2>Massa libero</h2>
							</header>
							<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In
								efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
								libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
							<ul className="actions">
								<li><Link href="/landing"><a className="button next">Get Started</a></Link></li>
							</ul>
						</div>
					</section>
				</div>

			</div>
		</Layout>
)
