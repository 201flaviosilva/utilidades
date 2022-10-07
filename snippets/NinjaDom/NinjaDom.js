// # Código pequenos ou muito basicos, mas tambem muito fixes

{ // ## Permite editar todos os textos na tela
	document.designMode = "on";
}

{ // ## Simular click em elementos
	setInterval(() => { document.getElementById("elementID").click() }, 10);
}

{ // ## Obter o HTML todo de uma página
	console.log(document.documentElement.outerHTML); // Versão 1
	console.log(document.documentElement.innerHTML); // Versão 2
}

{ // ## Mudar todas as images da página
	Array.prototype.slice
		.call(document.querySelectorAll("img"))
		.map(tag => {
			tag.src = "https://picsum.photos/200";
		});
}

// ----- Alerações que apenas mudão estilos
{ // ## Muda cor de todos as tag "div"
	const allDivs = document.querySelectorAll("div");

	for (let i = 0; i < allDivs.length; i++) {
		allDivs[i].style["background-color"] = "black";
		allDivs[i].style["color"] = "green";
		allDivs[i].style["font-family"] = "Monospace";
	}
}

{ // ## Rodar Elementos do Site 
	{ // ###
		Array.prototype.slice
			.call(document.querySelectorAll("div,p,span,img,a,li,body"))
			.map(tag => {
				tag.style["transform"] =
					"rotate(" + (Math.floor(Math.random() * 3) - 1) + "deg)";
			});

	}

	{// ### On Click
		const body = document.querySelector("body");
		body.addEventListener("click", () => {
			body.style["transition"] = "transform 3s";
			body.style["transform"] = "rotate(180deg)";
		});
	}
}
