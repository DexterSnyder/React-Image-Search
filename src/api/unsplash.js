import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID a06758ed78a0c7fa8601b5d28387a94e8dbaddecd0cacbab8855ea9afebfa89b'
	}
})
