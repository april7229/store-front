import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import IssueCharacters from './IssueCharacters'
import Issues from './Issues'
import IssueDetails from './IssueDetails'
import Featured from './Featured'
import CollectableCharacters from './CollectableCharacters'
import Collectables from './Collectables'
import CollectableDetails from './CollectableDetails'
import AllProducts from './AllProducts'
class App extends Component {
	render() {
		return (
			<Router>
				<>
					<header className="light">
						<h1>Universe Comic Shop</h1>
						<h2>The Known Universe's Best Place To Find Comics Online</h2>
					</header>
					<>
						<Switch>
							<Route exact path="/" component={Featured} />
							<Route exact path="/comics" component={IssueCharacters} />
							<Route exact path="/comics/:character" component={Issues} />
							<Route
								exact
								path="/comics/:character/:index"
								component={IssueDetails}
							/>
							<Route
								exact
								path="/collectables"
								component={CollectableCharacters}
							/>
							<Route
								exact
								path="/collectables/:character"
								component={Collectables}
							/>
							<Route
								exact
								path="/collectables/:character/:index"
								component={CollectableDetails}
							/>
							<Route exact path="/all" component={AllProducts} />
						</Switch>
					</>
				</>
			</Router>
		)
	}
}

export default App
