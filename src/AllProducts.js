import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Content from './Content.json'

class AllProducts extends Component {
	render() {
		return (
			<>
				<nav>
					<span>
						<Link to="/">
							<i className="fas fa-globe" />
							HOME
						</Link>
					</span>
					<span>
						<Link to="/comics">
							<i className="fas fa-book" />
							COMICS
						</Link>
					</span>
					<span>
						<Link to="/collectables">
							<i className="fas fa-child" />
							COLLECTABLES
						</Link>
					</span>
					<span>
						<p>
							<i class="fas fa-box" />
							EVERYTHING!
						</p>
					</span>
				</nav>
				<h3>COMICS</h3>
				<main>
					{Object.keys(Content).map(character => {
						return (
							<main>
								{Content[character].issues.map((issue, index) => {
									return (
										<section key={issue.title} className="productone">
											<Link
												to={`/comics/${character}/${index}`}
												className="linkpic"
											>
												<img src={issue.imageURL} />
											</Link>
											<Link to={`/comics/${character}/${index}`}>
												{issue.title}
											</Link>
										</section>
									)
								})}
							</main>
						)
					})}
				</main>
				<h3>COLLECTABLES</h3>
				<main>
					{Object.keys(Content).map(character => {
						return (
							<main>
								{Content[character].collectables.map((collectable, index) => {
									return (
										<section key={collectable.title} className="productone">
											<Link
												to={`/collectable/${character}/${index}`}
												className="linkpic"
											>
												<img src={collectable.imageURL} />
											</Link>
											<Link to={`/collectable/${character}/${index}`}>
												{collectable.title}
											</Link>
										</section>
									)
								})}
							</main>
						)
					})}
				</main>
			</>
		)
	}
}

export default AllProducts
