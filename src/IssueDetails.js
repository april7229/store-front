import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Content from './Content.json'
import { callbackify } from 'util'
class IssueDetails extends Component {
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
						<Link to={`/comics/${character}`}>
							<i class="fas fa-book-open" />
							{Content[character].title}
						</Link>
					</span>
					<span>
						<p>
							<i class="fas fa-info-circle" />
							{Content[character].issues[index].title}
						</p>
					</span>
				</nav>
				<main className="producttwo">
					<div className="top">
						<h4>{Content[character].issues[index].title}</h4>
						<h4>{Content[character].issues[index].price}</h4>
						<button onClick={out}>BUY</button>
					</div>
					<div className="bottom">
						<div className="product">
							<img src={Content[character].issues[index].imageURL} />
						</div>
						<div className="product">
							<article>{Content[character].issues[index].synopsis}</article>
						</div>
					</div>
				</main>
			</>
		)
	}
}

export default IssueDetails
