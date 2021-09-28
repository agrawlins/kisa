import React from 'react';

onSubmitHandlerLogoff = (e) => {
    e.preventDefault();
    this.props.history.push('./login')
}

onSubmitHandlerApproval = (e) => {
    e.preventDefault();
    this.props.history.push('/policeApproval')
}

onSubmitHandlerDelete = (e) => {
    e.preventDefault();
    this.props.history.push('/policeDelete')
}

<body>
	<h1>
        Your Local Area:
    </h1>
	<hr/>
    <h2>
        Map
    </h2>
     {/* MENU NAVIGATION */}
    <nav class="navbar navbar-default">
        <div class="container-fluid">
        <div class="navbar-header">
        <a class="navbar-brand" href="#">WebSiteName</a>
        </div>
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><button type="submit" onClick={this.onSubmitHandlerDelete}>DELETE ACCOUNT</button></li>
                <li><button type="submit" onClick={this.onSubmitHandlerApproval}>APPROVALS</button></li>
            </ul>
        </div>
    </nav> 
</body>