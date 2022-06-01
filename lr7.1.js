function calculator() {
    let a=0;
    return {
       add: function(b) {
        return a = a + b;
    },
    multiplye: function(b) {
        return a = a * b ;
    },
    substract: function(b) {
        return a = a - b;
    },
    divide: function(b) {
        return a = a / b;;
    },
    getResult: function() {
        return a;
    },

ln: function() {
    return a = Math.log(a);
},
    
    sin: function() {
        return a = Math.sin(a);
    },
    cos: function() {
        return a = Math.cos(a);
    },
        }}

    const calc = calculator();
    calc.add(3)
    calc.multiplye(4) 
    calc.substract(6) 
    calc.divide(3) 
    calc.ln()
    calc.sin()
    calc.cos()
    console.log(calc.getResult())