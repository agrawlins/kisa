import React from 'react';

onSubmitHandlerMap = (e) => {
    e.preventDefault();
   this.props.history.push('/policeMap')
  }

onSubmitHandlerAccept = (e) => {
//     e.preventDefault();
//    this.props.history.push('/policeMap')
  }

onSubmitHandlerAccept = (e) => {
//     e.preventDefault();
//    this.props.history.push('/policeMap')
  }

<body>
	<h1>
        REMEMBER
    </h1>
	<hr/>
    <h2>
        Carefully Review Each Applicant:<br/>
        It Only Takes ONE BAD APPLE to<br/>
        SPOIL THE BARRELL!!!<br/>
    </h2>
    <form>
        {/* Assigns a KISA to POLICE */}
        <div>
            <img src="CREATE NEW MONGODB COLLECTION CALLED 'WAITING KISAS'"/>
            <div>
                <button type="submit" onClick={this.onSubmitHandlerKisaDelete}>Assign</button>
            </div>
        </div>
        {/* Un-Assigns a KISA from POLICE */}
        <div>
            <img src="PULL FROM POLICE/KISATRACKER/KISAS"/>
            <div>
                <button type="submit" onClick={this.onSubmitHandlerKisaDelete}>Un-Assign</button>
            </div>
        </div>
        {/* MENU NAVIGATION */}
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                <a class="navbar-brand" href="#">WebSiteName</a>
                </div>
                <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><button type="submit" onClick={this.onSubmitHandlerMap}>MAP</button></li>
                </ul>
            </div>
        </nav> 
    </form>
</body>