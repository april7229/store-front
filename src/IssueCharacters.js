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
						<i class="fas fa-book" />
						COMICS
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
							<aside>
								<h3>
									<Link to={`/comics/${character}`}>
										{Content[character].title}
									</Link>
								</h3>
								<p>{Content[character].description}</p>
								<img src={Content[character].issues[0].imageURL} />
							</aside>
						)
					})}
				</main>
			</>
		)
	}
}

export default IssueCharacters
