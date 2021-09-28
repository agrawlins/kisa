import React from 'react';

onSubmitHandlerYes = (e) => {
    e.preventDefault();
    this.props.history.push('/kisaWarning');
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
        "A Knight is Sworn to Valor"<br/>
        Repeat the Following:
    </h2>
    <h3>
        "A Knight is Sworn to Valor,<br/>
        His Heart Knows Only Virtue,<br/>
        His Blade Defends the Helpless,<br/>
        His Might Upholds the Weak,<br/>
        His Word Speaks Only Truth,<br/>
        His Wrath Undoes the Wicked."
    </h3>
    <hr/>
    <h2>
        REMEMBER
    </h2>
    <h3>
        REAL People Will Be <br/>
        Counting on YOU to Help Them.<br/>
        <br/>
        You Can Never Know When<br/>
        You Will Be Called Into Action...<br/>
        <br/>
        Do You Swear to Uphold<br/>
        These Values AT ALL TIMES?<br/>
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