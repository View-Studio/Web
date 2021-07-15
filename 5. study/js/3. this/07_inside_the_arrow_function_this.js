var obj = {
    outer: function () {
        console.log(this); // {outer: ƒ}   ( === obj1 )

        var innerFunc = () => {
            console.log(this); // {outer: ƒ}   ( === obj1 )
        };
        innerFunc();
    }
};
obj.outer();
