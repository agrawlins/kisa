import React from 'react';

<body>
	<h1>In Order for Us to Protect You, We Have to Know Who You Are. <br/>
        Please Fill Out the Following:
    </h1>
	<hr/>
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
				<button type="submit">Submit</button>
			</div>
		</form>
	</div>

	<hr/>

</body>