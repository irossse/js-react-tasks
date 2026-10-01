import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
export default class Autocomplete extends React.Component {
  state = {term: '', countries: []}

  handleChange = async (e) => {
    const term = e.target.value
    this.setState({ term })
    if (term === '') {
      this.setState({ countries: [] })
      return
    }
    const result = await axios.get('/countries', {
      params: { term },
    })
    this.setState({ countries: result.data })
  }


  render() {
    const { term, countries } = this.state
    return (
      <div>
        <form>
          <input
            type="text" className="form-control" placeholder="Enter Country"
            value={term} onChange={this.handleChange}
          />
        </form>
        {countries.length > 0 && (
        <ul>
        {countries.map((country) => (
            <li key={country}>{country}</li>
))}
          </ul>)}
      </div>
    )}}
// END
