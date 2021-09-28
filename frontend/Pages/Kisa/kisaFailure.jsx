import React from 'react';

onSubmitHandler = (e) => {
    e.preventDefault();
   this.props.history.push('/')
  }

<body>
	<h1>"You Have Been Weighed,<br/>
        You Have Been Measured,<br/>
        And You Have Been Found...<br/>
        Wanting
    </h1>
    <h2>
        Your Application Has Been Rejected<br/>
    </h2>
    <div>
        <button type="button" onClick={this.onSubmitHandler}>Submit</button>
    </div>
</body>