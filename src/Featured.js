import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CollectableContent from './CollectableContent.json'
import Content from './Content.json'

class Featured extends Component {
	render() {
		return (
			<>
				<nav>
					<span>
						<i class="fas fa-globe" />
						HOME
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
					<span>/</span>
					<span>
						<Link to="/all">
							<i class="fas fa-box" />
							EVERYTHING!
						</Link>
					</span>
				</nav>
				<h3>Best Sellers</h3>
				<section>
					<img src={CollectableContent['batman'].collectables[3].imageURL} />
					<Link to={`/collectables/batman/3`}>
						{CollectableContent['batman'].collectables[3].title}
					</Link>
				</section>
				<section>
					<img src={Content['batman'].issues[3].imageURL} />
					<Link to={`/comics/batman/3`}>
						{Content['batman'].issues[3].title}
					</Link>
				</section>
				<section>
					<img src={CollectableContent['spiderman'].collectables[3].imageURL} />
					<Link to={`/collectables/spiderman/3`}>
						{CollectableContent['spiderman'].collectables[3].title}
					</Link>
				</section>
				<section>
					<img src={Content['spiderman'].issues[3].imageURL} />
					<Link to={`/comics/spiderman/3`}>
						{Content['spiderman'].issues[3].title}
					</Link>
				</section>
			</>
		)
	}
}

export default Featured
