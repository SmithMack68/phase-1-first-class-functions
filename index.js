function receivesAFunction(cb){
    return cb();
}
receivesAFunction(function () {return Spy;});

function returnsANamedFunction() {
  return function named(){}
}

function returnsAnAnonymousFunction() {
    return function(){
    }
}
