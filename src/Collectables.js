import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Content from './Content.json'

class Collectables extends Component {
	render() {
		const character = this.props.match.params.character

		return (
			<>
				<nav>
					<span>
						<Link to="/">
							<i class="fas fa-globe" />
							HOME
						</Link>
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
				<nav>
					<span>
						<p>
							<i class="fas fa-child" />
							{Content[character].title}
						</p>
					</span>
				</nav>
				<main>
					{Content[character].collectables.map((collectable, index) => {
						return (
							<section key={collectable.title} className="productone">
								<Link
									to={`/collectables/${character}/${index}`}
									className="linkpic"
								>
									<img src={collectable.imageURL} />
								</Link>
								<Link to={`/collectables/${character}/${index}`}>
									{collectable.title}
								</Link>
							</section>
						)
					})}
				</main>
			</>
		)
	}
}

export default Collectables
