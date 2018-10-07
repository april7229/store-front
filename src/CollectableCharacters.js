import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Content from './Content.json'

class CollectableCharacters extends Component {
	render() {
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
						<p>
							<i class="fas fa-child" />
							COLLECTABLES
						</p>
					</span>
					<span>
						<Link to="/all">
							<i class="fas fa-box" />
							EVERYTHING!
						</Link>
					</span>
				</nav>
				<main>
					{Object.keys(Content).map(character => {
						return (
							<aside className="productone">
								<Link to={`/collectables/${character}`}>
									{Content[character].title}
								</Link>
								<Link to={`/collectables/${character}`} className="linkpic">
									<img src={Content[character].collectables[0].imageURL} />
								</Link>
								<article>{Content[character].description}</article>
							</aside>
						)
					})}
				</main>
			</>
		)
	}
}

export default CollectableCharacters
