import React from "react";



<form className="center">
<label>Please Complete the Following:</label> <br/>
<input type="text" value={this.state.reason}>First Name:</input><br/>
<input type="text" value={this.state.reason}></input>Last Name:<br/>
<input type="text" value={this.state.reason}></input>email address:<br/>
<input type="text" value={this.state.reason}></input>Password:<br/>
<button type="submit" onSubmit= {this.createKisa.bind(this)}>CREATE ACCOUNT</button>
</form>