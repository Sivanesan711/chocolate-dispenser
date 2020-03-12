var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, color, count) {
    if (count <= 0)
        return "Number can't be zero";

    for (var i = 0; i < count; i) {
        chocolates.unshift(color);

    }
}


//Progression 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(chocolates, number) {
    let a = [];
    var count = chocolates.length;
    if (count < number) {
        return "Insufficient chocolates in the dispenser";

    }
    if (number <= 0) {
        return "Number can't be zero";
    }
    for (var i = 0; i < number; i) {
        a.push(chocolates.shift());
    }
    return a;

}


//Progression 3: Dispense ___ chocolates

function disChocolates(chocolates, number) {
    let a = [];
    if (number <= 0)
        return "Number cannot be zero";
    if (number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    for (var i = 0; i < number; i) {
        a.push(chocolates.pop());
    }
    return a;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates, number, color) {
    let a = [];
    var favourite = 0;
    if (number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    if (number <= 0)
        return "Number cannot be zero";
    for (var i = chocolates.length - 1; i >= 0; i--) {
        if (chocolates[i] == color) {
            a.push(chocolates.pop());
            favourite;
            if (favourite == number)
                return a;
        }
    }
    if (favourite != number)
        return "Insufficient chocolates in the dispenser";
}



//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

let a = [];
for (var i = 0; i < chocolates.length; i) {
    if (chocolates[i] !== 0) {
        var count = 1;
        for (var j = i 1; j < chocolates.length; j) {
            if (chocolates[i] == chocolates[j]) {
                count;
                chocolates[j] = 0;
            }
        }
        a.push(count);
    }
}
return a;
}



//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolate(chocolates) {
    let color = [];
    let ar = [];
    for (var i = 0; i < chocolates.length; i) {
        if (chocolates[i] != 0) {
            var count = 1;
            for (var j = i 1; j < chocolates.length; j) {
                if (chocolates[i] == chocolates[j]) {
                    count;
                    chocolates[j] = 0;
                }
            }
            ar.push(count);
            color.push(chocolates[i]);
        }
    }
    for (var i = 0; i < ar.length; i) {
        for (var j = 0; j < ar.length - 1 - i; j) {
            if (ar[j] < ar[j 1]) {
                var temp = ar[j];
                ar[j] = ar[j 1];
                ar[j 1] = temp;
                let tempr = color[j];
                color[j] = color[j 1];
                color[j 1] = tempr;

            }
        }
    }
    let sorted_color_aray = [];
    for (var i = 0; i < color.length; i) {
        for (var j = 0; j < ar[i]; j) {
            sorted_color_aray.push(color[i]);
        }
    }


    //Progression 7: Change ___ chocolates of ____ color to ____ color

    function changeColor(chocolates, number, color, finalColor) {
        var count = 0;
        if (chocolates.length == 0)
            return chocolates;
        if (number <= 0)
            return "Number cannot be zero";
        if (number > chocolates.length)
            return "less chocolates in the dispenser";
        for (var i = 0; i < chocolates.length; i) {
            if (chocolates[i] == finalColor)
                return "Can't replace the same chocolates";
            if (chocolates[i] == color) {
                chocolates[i] = finalColor;
                count;
                if (count == number)
                    return chocolates;

            }
        }
        if (count < number)
            return "less chocolates in the dispenser";

    }


    //Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

    function changeChocolateColorAllOfCount(chocolates, color, finalColor) {
        var count = 0;
        let ar = [];
        let b = [];
        if (chocolates.length == 0) {
            ar.push(count, b);
            return ar;
        } else {
            for (var i = 0; i < chocolates.length; i) {
                if (chocolates[i] == finalColor)
                    return "Can't replace the same chocolates";

                else if (chocolates[i] == color) {
                    chocolates[i] = finalColor;


                }

            }
        }
        for (var i = 0; i < chocolates.length; i) {
            if (chocolates[i] == finalColor) {
                count;
                b.push(chocolates[i]);

            }

        }


        ar.push(count, b);
        return ar;

    }

    //Challenge 1: Remove one chocolate of ____ color from the top


    //Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed