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
						<p>
							<i class="fas fa-book" />
							COMICS
						</p>
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
								<Link to={`/comics/${character}`}>
									{Content[character].title}
								</Link>
								<Link to={`/comics/${character}`} className="linkpic">
									<img src={Content[character].issues[0].imageURL} />
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

export default IssueCharacters
