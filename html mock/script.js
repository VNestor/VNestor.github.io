const app = document.getElementById('root');

const logo = document.createElement('img');

logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();

request.open('GET', 'https://cloud.iexapis.com/beta/stock/market/list/losers?token=pk_b24a0719ee7f4415b33737e51e8ef7f8', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(stock => {
    	const card = document.createElement('div');
    	card.setAttribute('class', 'card');
    	
    	//symbol
    	const h1 = document.createElement('h1');
    	h1.textContent = stock.symbol;
    	
    	//Company name
    	const h2 = document.createElement('h2');
    	h2.textContent = stock.companyName;


    	//description
    	const p = document.createElement('p');
    	//limit characters to 300 if string
    	stock.latestPrice = stock.latestPrice; 
    	//end with an ellipses NOT A SINGLE QUOTE
    	p.textContent = "Lastest Price:" + " $" + `${stock.latestPrice}`; 
    	
    	const p1 = document.createElement('p1');
    	stock.open = stock.open;
    	p1.textContent = "Open:" + " $" + `${stock.open}`;

    	const p2 = document.createElement('p2');
    	stock.high = stock.high;
    	p2.textContent = "High:" + " $" + `${stock.high}`;

    	const p3 = document.createElement('p3');
    	stock.low = stock.low;
    	p3.textContent = "Low:" + " $" + `${stock.low}`;

    	//append card to container
    	

    	//Each card with contain 'h1/title' and a 'p/description'
    	container.appendChild(card);
    	card.appendChild(h1);
    	card.appendChild(h2);
    	card.appendChild(p);
    	card.appendChild(p1);
    	card.appendChild(p2);
    	card.appendChild(p3);


    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContext = 'Error! Victor, fix it!';
    app.appendChild(errorMessage); 
  }
}

request.send();