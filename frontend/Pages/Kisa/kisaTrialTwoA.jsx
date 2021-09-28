import React from 'react';

onSubmitHandlerYes = (e) => {
    e.preventDefault();
    this.props.history.push('/kisaTrialTwoB');
    }

onSubmitHandlerNo = (e) => {
    e.preventDefault();
    this.props.history.push('/kisaFailure');
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
        Please Submit to the Following:
    </h2>
    <h3>
        Do You Give Permission for KISA to <br/>
        Run a Criminal Background Check on You?
    </h3>
	<div>
		<div>
            <button type="submit" onClick={this.onSubmitHandlerYes}>YES</button>
        </div>
        <div>
            <button type="submit" onClick={this.onSubmitHandlerNo}>NO</button>
        </div>	
	</div>

	<hr/>

</body>