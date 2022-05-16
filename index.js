function receivesAFunction(callback){
    callback(); 
}

function returnsANamedFunction(){
    let fn = () => console.log("Oops, I did it again!");
    return fn;
}

function returnsAnAnonymousFunction(){
    return () => console.log("I played with your heart, got lost in the game");
}