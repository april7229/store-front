import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Content from './Content.json'
class CollectableDetails extends Component {
	render() {
		const character = this.props.match.params.character
		const index = this.props.match.params.index
		function out() {
			alert('Sorry out of stock, find it on Amazon')
		}
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
							<i class="fas fa-child" />
							{Content[character].title}
						</Link>
					</span>
					<span>
						<p>
							<i className="fas fa-info-circle" />
							{Content[character].collectables[index].title}
						</p>
					</span>
				</nav>
				<main className="producttwo">
					<div className="top">
						<h4>{Content[character].collectables[index].title}</h4>
						<h4>{Content[character].collectables[index].price}</h4>
						<button onClick={out}>BUY</button>
					</div>
					<div className="bottom">
						<div className="product">
							<img src={Content[character].collectables[index].imageURL} />
						</div>
						<div className="product">
							<article>
								{Content[character].collectables[index].synopsis}
							</article>
						</div>
					</div>
				</main>
			</>
		)
	}
}

export default CollectableDetails
