import React from 'react';

<body>    
    <div>
		<form action="/" method="POST" enctype="multipart/form-data">
            <div>
                <button type="radio" id="option1" name="option1" value="" required>I Don't Need Protection Anymore</button>
				<button type="radio" id="option2" name="option2" value="" required>I Found a Better App</button>
				<button type="radio" id="option3" name="option3" value="" required>
					I Was Harmed by a KISA<br/>
					(Please Tell Us Who; We Want to Make Sure They Can't Hurt Anyone Else)
				</button>
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
            </div>
			<div>
				<button type="submit">DELETE MY ACCOUNT</button>
                <p>
                    Don't Worry;<br/>
                    You're Always Welcome<br/>
                    If You Change Your Mind Later!
                </p>
			</div>
		</form>
	</div>

	<hr/>

</body>