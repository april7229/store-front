import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Content from './Content.json'
class IssueDetails extends Component {
	render() {
		const character = this.props.match.params.character
		const index = this.props.match.params.index
		return (
			<>
				<nav>
					<span>
						<Link to="/">
							<i class="fas fa-globe" />
							HOME
						</Link>
					</span>
					<span>/</span>
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
						<Link to={`/comics/${character}`}>
							<i class="fas fa-book-open" />
							{Content[character].title}
						</Link>
					</span>
					<span>
						<i class="fas fa-info-circle" />
						{Content[character].issues[index].title}
					</span>
				</nav>
				<main>
					<h3>{Content[character].issues[index].title}</h3>
					<figure>{Content[character].issues[index].price}</figure>
					<article>{Content[character].issues[index].synopsis}</article>
					<img src={Content[character].issues[index].imageURL} />
				</main>
			</>
		)
	}
}

export default IssueDetails
