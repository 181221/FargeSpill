var antallFirkanter = 6;
var colors = [];
var pickedColor;
var resetBtn = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var modeBtn = document.querySelectorAll(".mode");

settOppSpill();

function settOppSpill(){
	setUpModeknapper();
	settOppFirkanter();
	reset();
}

function setUpModeknapper(){
	for(var i = 0; i < modeBtn.length; i++){
		modeBtn[i].addEventListener("click",function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy"? antallFirkanter = 3: antallFirkanter = 6;
			reset();
		});
	}
}

function settOppFirkanter(){
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
	
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetBtn.textContent = "Play Again";
			skiftFarge(clickedColor);
			h1.style.backgroundColor = pickedColor;
		}else{
			this.style.background = "steelblue";
			messageDisplay.textContent = "Try Again";
		}
	});
	}
}

resetBtn.addEventListener("click", function(){
	reset();
});



function reset(){
	colors = generateRandomColors(antallFirkanter);
	pickedColor = pickColor();
	
	resetBtn.textContent = "New Colors";
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else {
		 	squares[i].style.display ="none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

function skiftFarge(color){
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	 var random = Math.floor(Math.random() * colors.length);
	 return colors[random];
}

function generateRandomColors(num){
	colors = [];
	for(var i = 0; i < num; i++){
		colors.push(randomColor());
	}

	return colors;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " +b +")";
}	

// easyBtn.addEventListener("click",function(){
// 	antallFirkanter = 3;
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	colors = generateRandomColors(antallFirkanter);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = "";
// 	for(var i = 0; i < squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click",function(){
// 	antallFirkanter = 6;
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	colors = generateRandomColors(antallFirkanter);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = "";
// 	for(var i = 0; i < squares.length;i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display ="block";
// 	}
// });

