import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Content from './Content.json'

class Issues extends Component {
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
						<i class="fas fa-book-open" />
						{Content[character].title}
					</span>
				</nav>
				<h2>{Content[character].title}</h2>
				<main>
					{Content[character].issues.map((issue, index) => {
						return (
							<section key={issue.title}>
								<img src={issue.imageURL} />
								<Link to={`/comics/${character}/${index}`}>{issue.title}</Link>
							</section>
						)
					})}
				</main>
			</>
		)
	}
}

export default Issues
