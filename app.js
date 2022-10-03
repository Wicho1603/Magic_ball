const ask = () =>{
    

    //leer pregunta
    const questionInput = document.getElementById('question')
    const answerInput = document.getElementById('answer');
    if (questionInput.value !== ""){  
    //Recibir respuesta al preguntar a bola mágica
    //Imprimir resultado
    let answer = magicBall();
    //Imprimir resultado
    answerInput.value= answer;
} else {
    answerInput.value="Pregunta algo!!";
}
};

//Función Bola Mágica
const magicBall = () => {
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';
    switch (randomNumber){
    case 0:
        eightBall = 'No we';
        break;
    case 1:
        eightBall = 'Echale ganas compadre';
        break;
    case 2:
        eightBall = 'Ándale, eso mero...';
        break;
    case 3:
        eightBall = 'chi';
        break;
    case 4:
        eighBall = 'No';
        break;
    case 5:
        eightBall = 'A lo mejor';
        break;
    case 6:
        eightBall = 'Me viste cara de adivino o que ';
        break;
    case 7:
        eightBall = 'zi c pero no ter wua decir';
        break;
    }
    return eightBall
};
