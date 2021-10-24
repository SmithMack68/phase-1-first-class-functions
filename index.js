function receivesAFunction(cb){
    return cb();
}
receivesAFunction(function () {return Spy;});

function returnsANamedFunction() {
   return () => {Hello};
};

function returnsAnAnonymousFunction() {
    return function(){
    }
};
