import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Content from './Content.json'

class Featured extends Component {
	render() {
		return (
			<>
				<nav>
					<span>
						<p>
							<i class="fas fa-globe" />
							HOME
						</p>
					</span>
					<span>
						<Link to="/comics">
							<i class="fas fa-book" />
							COMICS
						</Link>
					</span>
					<span>
						<Link to="/collectables">
							<i class="fas fa-child" />
							COLLECTABLES
						</Link>
					</span>
					<span>
						<Link to="/all">
							<i class="fas fa-box" />
							EVERYTHING!
						</Link>
					</span>
				</nav>
				<h3>Best Sellers</h3>
				<main>
					<section className="productone">
						<aside>
							<Link to={`/comics/batman/3`} className="linkpic">
								<img src={Content['batman'].issues[3].imageURL} />
							</Link>
						</aside>
						<Link to={`/comics/batman/3`}>
							{Content['batman'].issues[3].title}
						</Link>
					</section>
					<section className="productone">
						<aside>
							<Link to={`/comics/spiderman/3`} className="linkpic">
								<img src={Content['spiderman'].issues[3].imageURL} />
							</Link>
						</aside>
						<Link to={`/comics/spiderman/3`}>
							{Content['spiderman'].issues[3].title}
						</Link>
					</section>
					<section className="productone">
						<aside>
							<Link to={`/comics/deadpool/3`} className="linkpic">
								<img src={Content['deadpool'].issues[3].imageURL} />
							</Link>
						</aside>
						<Link to={`/comics/deadpool/3`}>
							{Content['deadpool'].issues[3].title}
						</Link>
					</section>
					<section className="productone">
						<aside>
							<Link to={`/comics/wonderwoman/3`} className="linkpic">
								<img src={Content['wonderwoman'].issues[2].imageURL} />
							</Link>
						</aside>
						<Link to={`/comics/wonderwoman/3`}>
							{Content['wonderwoman'].issues[2].title}
						</Link>
					</section>
					<section className="productone">
						<aside>
							<Link to={`/comics/ironman/3`} className="linkpic">
								<img src={Content['ironman'].issues[3].imageURL} />
							</Link>
						</aside>
						<Link to={`/comics/ironman/3`}>
							{Content['ironman'].issues[3].title}
						</Link>
					</section>
				</main>
			</>
		)
	}
}

export default Featured
