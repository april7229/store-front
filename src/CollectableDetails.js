import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Content from './Content.json'
class CollectableDetails extends Component {
	render() {
		const character = this.props.match.params.character
		const index = this.props.match.params.index
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
						<Link to="/all">
							<i class="fas fa-box" />
							EVERYTHING!
						</Link>
					</span>
				</nav>
				<nav>
					<span>
						<Link to={`/collectables/${character}`}>
							<i className="fas fa-book-open" />
							{Content[character].title}
						</Link>
					</span>
					<span>/</span>
					<span>
						<i className="fas fa-info-circle" />
						{Content[character].collectables[index].title}
					</span>
				</nav>
				<main>
					<h3>{Content[character].collectables[index].title}</h3>
					<figure>{Content[character].collectables[index].price}</figure>
					<article>{Content[character].collectables[index].synopsis}</article>
					<img src={Content[character].collectables[index].imageURL} />
				</main>
			</>
		)
	}
}

export default CollectableDetails
