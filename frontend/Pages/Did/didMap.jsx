import React from 'react';

onSubmitHandler = (e) => {
    e.preventDefault();
   this.props.history.push('./Login')
  }

<body>
	<h1>
        Your Local Area:
    </h1>
	<hr/>
    <h2>
        
    </h2>
    <div>
        <button type="submit" onClick={this.onSubmitHandler}>LOGOFF</button>
    </div>
</body>