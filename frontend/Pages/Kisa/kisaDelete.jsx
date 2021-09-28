import React from 'react';

onSubmitHandler = (e) => {
    e.preventDefault();
   this.props.history.push('/')
  }

<body>
	<h1>To Become a Knight,<br/>
        You Must Pass Through<br/>
        Three Trials...<br/>
    </h1>
	<hr/>
    <h2>
        TRIAL I<br/>
        "His Word Speaks Only Truth"<br/>
        Please Complete the Following:
    </h2>
	<div>
		<form action="/" method="POST" enctype="multipart/form-data">
            <div>
                <label for="image">Upload Personal Image</label>
                <input type="file" id="image"
                    name="image" value="" required/>
            </div>
			<div>
				<label for="name">First Name</label>
				<input type="text" id="name" placeholder="Name"
					value="" name="name" required/>
			</div>
            <div>
				<label for="name">Last Name</label>
				<input type="text" id="name" placeholder="Name"
					value="" name="name" required/>
			</div>
            <div>
				<label for="name">Email Address</label>
				<input type="text" id="name" placeholder="Name"
					value="" name="name" required/>
			</div>
            <div>
				<label for="name">Password</label>
				<input type="text" id="name" placeholder="Name"
					value="" name="name" required/>
			</div>
            <div>
				<label for="name">Re-Enter Password</label>
				<input type="text" id="name" placeholder="Name"
					value="" name="name" required/>
			</div>
			<div>
				<button type="submit" onClick={this.onSubmitHandler}>Submit</button>
			</div>
		</form>
	</div>

	<hr/>

</body>