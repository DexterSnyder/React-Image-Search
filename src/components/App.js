import React from 'react'
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'
import ImageList from './ImageList'

// unsplash access key: a06758ed78a0c7fa8601b5d28387a94e8dbaddecd0cacbab8855ea9afebfa89b
// unsplash secret key: 6360709aa55e5763af3fce5a01cc1f7a4ba88a19e6d96822c23d23f5f2a6f692

class App extends React.Component {
	state = { images: [] }

	onSearchSubmit = async term => {
		const response = await unsplash.get('/search/photos', {
			params: { query: term }
		})

		this.setState({ images: response.data.results })
	}

	render() {
		return (
			<div className='ui container' style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		)
	}
}

export default App
