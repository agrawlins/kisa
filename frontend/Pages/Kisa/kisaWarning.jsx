import React from 'react';

onSubmitHandler = (e) => {
    e.preventDefault();
   this.props.history.push('/kisaMap')
  }

<body>
	<h1>
        WARNING
    </h1>
	<hr/>
    <h2>
        If You Fail to Honor<br/>
        ANY of these Principles,<br/>
        Your Account Will Be<br/>
        Suspended for a Month.<br/>
        <br/>
        A Repeat Failure Will Result in<br/>
        PERMANENT ACCOUNT TERMINATION<br/>
    </h2>
    <div>
        <button type="submit" onClick={this.onSubmitHandler}>ACKNOWLEDGE AND CONTINUE</button>
    </div>
</body>