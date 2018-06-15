window.onload = function(){
    var first = 'Steve';
    var last = 'Austin';
    var msg = `Hello ${first} ${last}.`;
    console.log(msg);

    function setNames(first = 'Steve', last = 'Austin'){
        console.log(`Hello, ${first} ${last}`);
    }
    setNames('Bret','Hart');
    setNames('Bret');
};

