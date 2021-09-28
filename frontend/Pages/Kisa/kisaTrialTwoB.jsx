import React from 'react';

onSubmitHandler = (e) => {
    e.preventDefault();
   this.props.history.push('./login')
  }

<body>
	<h1>To Become a Knight,<br/>
        You Must Pass Through<br/>
        Three Trials...<br/>
    </h1>
	<hr/>
    <h2>
        TRIAL II<br/>
        "His Heart Knows Only Virtue"<br/>
        Your Application is Still in Review.
    </h2>
    <div>
        <button type="submit" onClick={this.onSubmitHandler}>GO BACK TO LOGIN SCREEN</button>
    </div>
</body>