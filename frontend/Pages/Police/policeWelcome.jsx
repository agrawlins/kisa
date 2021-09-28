import React from 'react';

onSubmitHandler = (e) => {
    e.preventDefault();
   this.props.history.push('/policeMap')
  }

<body>
	<h1>
        WELCOME TO KISA!
    </h1>
	<hr/>
    <h2>
        Be Sure to Assign Yourself Many Good KISAs;<br/>
        They Might Just Save a Few Lives (Including Yours!)<br/>
    </h2>
    <div>
        <button type="submit" onClick={this.onSubmitHandler}>CONTINUE</button>
    </div>
</body>