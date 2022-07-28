function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    if (number === 0){
        return 'Rock';
    }
    if (number === 1){
        return 'Paper';
    }
    if (number === 2){
        return 'Scissors'
    }
}