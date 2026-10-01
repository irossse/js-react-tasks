import React from 'react';

// BEGIN (write your solution here)
export default class MyForm extends React.Component{
    constructor(props){
        super(props)
        this.state={emailText: '', 
            passText: '', 
            addresText: '', 
            sityText:'', 
            countryText: '',
            checkbox: false,
            sub: false
         }
    }

    emailChange=(e)=>{
        this.setState({emailText: e.target.value})

    }

    passChange=(e)=>{
        this.setState({passText: e.target.value})
    }

    addresChange=(e)=>{
        this.setState({addresText:e.target.value})
    }

    cityChange=(e)=>{
        this.setState({sityText: e.target.value})
    }

    countryChange=(e)=>{
        this.setState({countryText: e.target.value})
    }

    checkboxChange=(e)=>{
        this.setState({checkbox: e.target.checked})
    }

    subChange=(e)=>{
        e.preventDefault()
        this.setState({sub: !this.state.sub})
    }



    render(){
        if (!this.state.sub){
        return <form onSubmit={this.subChange}  name="myForm">
  <div className="col-md-6 mb-3">
    <label htmlFor="email" className="col-form-label">Email</label>
    <input
    onChange={this.emailChange}
    value={this.state.emailText}
      type="email"
      name="email"
      className="form-control"
      id="email"
      placeholder="Email"
    />
  </div>


  <div className="col-md-6 mb-3">
    <label htmlFor="password" className="col-form-label">Password</label>
    <input
    onChange={this.passChange}
    value={this.state.passText}
      type="password"
      name="password"
      className="form-control"
      id="password"
      placeholder="Password"
    />
  </div>



  <div className="col-md-6 mb-3">
    <label htmlFor="address" className="col-form-label">Address</label>
    <textarea
    onChange={this.addresChange}
    value={this.state.addresText}
      type="text"
      className="form-control"
      name="address"
      id="address"
      placeholder="1234 Main St"
    ></textarea>
  </div>



  <div className="col-md-6 mb-3">
    <label htmlFor="city" className="col-form-label">City</label>
    <input onChange={this.cityChange} value={this.state.sityText} type="text" 
    className="form-control" name="city" id="city" />
  </div>



  <div className="col-md-6 mb-3">
    <label htmlFor="country" className="col-form-label">Country</label>
    <select onChange={this.countryChange} value={this.state.countryText} id="country" name="country" className="form-control">
      <option value="">Choose</option>
      <option value="argentina">Argentina</option>
      <option value="russia">Russia</option>
      <option value="china">China</option>
    </select>
  </div>



  <div className="col-md-6 mb-3">
    <div className="form-check">
      <label className="form-check-label" htmlFor="rules">
        <input
        onChange={this.checkboxChange}
        checked={this.state.checkbox}
          id="rules"
          type="checkbox"
          name="acceptRules"
          className="form-check-input"
        />
        Accept Rules
      </label>
    </div>
  </div>


  <button type="submit" className="btn btn-primary">Sign in</button>
</form>
    }


else{ return <div>
  <button onClick={this.subChange} type="button" className="btn btn-primary">Back</button>
  <table className="table">
    <tbody>
      <tr>
        <td>acceptRules</td>
        <td>{String(this.state.checkbox)}</td>
      </tr>
      <tr>
        <td>address</td>
        <td>{this.state.addresText}</td>
      </tr>
      <tr>
        <td>city</td>
        <td>{this.state.sityText}</td>
      </tr>
      <tr>
        <td>country</td>
        <td>{this.state.countryText}</td>
      </tr>
      <tr>
        <td>email</td>
        <td>{this.state.emailText}</td>
      </tr>
      <tr>
        <td>password</td>
        <td>{this.state.passText}</td>
      </tr>
    </tbody>
  </table>
</div>


}}

    

}
// END
