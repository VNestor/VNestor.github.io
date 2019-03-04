const app = document.getElementById('root');

const logo = document.createElement('img');

logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();

request.open('GET', 'https://cloud.iexapis.com/beta/tops?token=pk_b24a0719ee7f4415b33737e51e8ef7f8', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(stock => {
    	const card = document.createElement('div');
    	card.setAttribute('class', 'card');
    	//title
    	const h1 = document.createElement('h1');
    	h1.textContent = stock.symbol;

    	//description
    	const p = document.createElement('p');
    	//limit characters to 300
    	stock.lastSalePrice = stock.lastSalePrice; 
    	//end with an ellipses NOT A SINGLE QUOTE
    	p.textContent = "Last Sale Price:" + `${stock.lastSalePrice}...`; 
    	//append card to container
    	
    	//Each card with contain 'h1/title' and a 'p/description'
    	container.appendChild(card);
    	card.appendChild(h1);
    	card.appendChild(p);


    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContext = 'Error! Victor, fix it!';
    app.appendChild(errorMessage); 
  }
}

request.send();