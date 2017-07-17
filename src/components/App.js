import React, { Component } from "react"
import { Route, Link } from "react-router-dom"
import { inject, observer } from "mobx-react"
import LazyRoute from "lazy-route"
import DevTools from "mobx-react-devtools"

import AlbumArt from './AlbumArt'
import NowPlaying from './NowPlaying'

@inject("store")
@observer
export default class App extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}
	componentDidMount() {
	}

	render() {
		let wrapperStyle = {
			// backgroundImage: `url(${require("../images/sample-brent.jpg")})`,
		};
		console.log(this.store);
		return (
			<div className="wrapper" style={wrapperStyle}>
					<img className='fake_background' src={require("../images/sample-brent.jpg")} alt=""/>
					<AlbumArt
						albumImage={require("../images/sample-brent.jpg")}
					/>
					<NowPlaying
						currentSpeaker={this.store.appState.currentSpeaker}
						songTitle='Lovely'
					/>
			</div>
		);
	}
}
