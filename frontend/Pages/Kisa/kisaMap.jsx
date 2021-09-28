import React from 'react';

onSubmitHandler = (e) => {
    e.preventDefault();
   this.props.history.push('/')
  }



let value;
switch (Math.floor(Math.random()*6)) {
    case 0:
        value = "A Knight is Sworn to Valor";
        break;
    case 1:
        value = "His Heart Knows Only Virtue";
        break;
    case 2:
        value = "His Blade Defends the Helpless";
        break;
    case 3:
        value = "His Might Upholds the Weak";
        break;
    case 4:
        value = "His Word Speaks Only Truth";
        break;
    case 5:
        value = "His Wrath Undoes the Wicked";
        break;
    default:
        value = "Your Local Area"
        break;
}

<body>
	<h1>
        {document.getElementById("value").innerHTML = value}
    </h1>
	<hr/>
    <h2>

    </h2>
    <div>
        <button type="submit" onClick={this.onSubmitHandler}>ACKNOWLEDGE AND CONTINUE</button>
    </div>
</body>