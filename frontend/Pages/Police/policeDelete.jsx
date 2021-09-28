import React from 'react';

onSubmitHandler = (e) => {
    e.preventDefault();
   this.props.history.push('/')
  }

<body>
	<h1>
		DELETE ACCOUNT?!
    </h1>

	<hr/>

    <h2>
        Why Are you Leaving?
    </h2>
	<div>
		<form action="/" method="POST" enctype="multipart/form-data">
			<div>
				
				<input type="textarea" id="reason" placeholder="Please Enter Your Reason Here"
					value="" name="reason" required/>
			</div>
			<div>
				<button type="submit" onClick={this.onSubmitHandler}>Submit</button>
			</div>
		</form>
	</div>

	<hr/>

</body>