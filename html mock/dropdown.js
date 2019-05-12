var lastIndex = "",
	changedText = document.getElementById('changed');

function listQ() {
	changedText.textContent = this.value;
}

document.getElementById('list').onchange = listQ;
