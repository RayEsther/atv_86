//4. Crie o elemento canvas


//5. Defina as coordenadas x e y da imagem do personagem


//6. Defina a width e height do bloco imagem


var player_object= "";
var block_image_object= "";

//7.  complete a Função para adicionar playerUpdate():
function player_update()
{
	
	fabric.Image.fromURL("     ", function(Img) {
	player_object =    ;
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({top:player_y,left:player_x});
	canvas.add(player_object);
	});

}
//8.Complete  Função para adicionar a imagem do bloco:
function new_image(    )
{
	fabric.Image.fromURL(      , function(Img) {
	block_image_object =     ;
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({top:player_y,left:player_x});
	canvas.add(block_image_object);
	});

	
}
//---------------proxima aula 87

//1. Adicione o código addEventListner para a função keydown
window.addEventListener("       ",      );

function my_keydown(e)

{
//2 Adicione o código para a criação da função e do valor keyCode


	

// 3. Adicione o código para a condição da tecla C pressionada
if(e.shiftKey == true && keyPressed == '  ')
{
	console.log("C e Shift pressionadas ao mesmo tempo");
	
	block_image_width = block_image_width + 10;//aumentará a largura e altura dos blocos
	block_image_height = block_image_height + 10;//aumentar a largura e altura dos blocos
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
// 4.  COMPLETE Adicione o código para a condição da tecla D pressionada
if(e.shiftKey && keyPressed == '   ')
{
	console.log("D e Shift pressionadas ao mesmo tempo");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}
//5. Adicione o código a condição para chamar a função cima():
	if(keyPressed == '  ')
	{
		up();
		console.log("cima");
	}
//6. Adicione o código a condição para chamar a função BAIXO():
	//Chamar a função down()
	if(keyPressed == '  ')
	{

		
	}
//7. Adicione o código a condição para chamar a função ESQUERDA():
	//Chamar a função left():
	if(keyPressed == '  ')
	{
		left();
		console.log("esquerda");
	}
//8. Adicione o código a condição para chamar a função DIREITA():
	//Chamar a função right():
	if(keyPressed == '39')
	{


		
	}
//9. COMPLETE  o código a condição para carregar novas imagens:
	if(keyPressed == '  ')
	{
		new_image('parede.jpg'); 
		console.log("p");
	}
	if(keyPressed == '   ')
	{
		new_image('grama.png'); 
		console.log("g");
	}
	if(keyPressed == '   ')
	{
		new_image('verde_claro.png'); 
		console.log("v");
	}
	if(keyPressed == '   ')
	{
		new_image('madeira_tronco.jpg'); 
		console.log("m");
	}
	if(keyPressed == '   ')
	{
		new_image('telhado.jpg'); 
		console.log("t");
	}
	if(keyPressed == '   ')
	{
		new_image('parede_amarela.png'); 
		console.log("a");
	}
	if(keyPressed == '   ')
	{
		new_image('verde_escuro.png'); 
		console.log("e");
	}
	if(keyPressed == '   ')
	{
		new_image('unico.png'); 
		console.log("u");
	}
	if(keyPressed == '     ')
	{
		new_image('nuvem.jpg'); 
		console.log("n");
	}
	
}
//PROXIMA AULA 88 PROGRAMAR AS FUNÇOES down() , left()  right()
{
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;//significa que player_y será atualizado de acordo com player_y subtraído do valor de block_image_height
		console.log("altura da imagem do bloco = " + block_image_height);
		console.log("Quando a seta para cima é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);//Remova a imagem do jogador do canvas, pois não queremos manter a imagem da posição antiga.
		player_update();//Essa função enviará a nova imagem do jogador ao canvas, que definimos na última aula.
	}
}

function down()
{



	
}

function left()
{





	
}

function right()
{






	
}
