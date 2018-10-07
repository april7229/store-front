import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Content from './Content.json'

class IssueCharacters extends Component {
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
						<a>
							<i class="fas fa-book" />
							COMICS
						</a>
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
				<main>
					{Object.keys(Content).map(character => {
						return (
							<aside className="productone">
								<h3>
									<Link to={`/comics/${character}`}>
										{Content[character].title}
									</Link>
								</h3>
								<img src={Content[character].issues[0].imageURL} />
								<p>{Content[character].description}</p>
							</aside>
						)
					})}
				</main>
			</>
		)
	}
}

export default IssueCharacters
