import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CollectableContent from './CollectableContent.json'

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
						<i class="fas fa-child" />
						COLLECTABLES
					</span>
					<span>
						<Link to="/all">
							<i class="fas fa-box" />
							EVERYTHING!
						</Link>
					</span>
				</nav>
				<main>
					{Object.keys(CollectableContent).map(character => {
						return (
							<aside>
								<h3>
									<Link to={`/collectables/${character}`}>
										{CollectableContent[character].title}
									</Link>
								</h3>
								<p>{CollectableContent[character].description}</p>
								<img
									src={CollectableContent[character].collectables[0].imageURL}
								/>
							</aside>
						)
					})}
				</main>
			</>
		)
	}
}

export default CollectableCharacters
