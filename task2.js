// test case 1

let arr = {};

arr.push((6, 7, 8, 9, 10));

for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
    console.log(sum / 5);
}


// This is where test case 1 ends


// test case 2

{
    let arr = {};

    arr.push((5, 5, 5, 5, 5));

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
        console.log(sum / 5);
    }
}

// This is where test case 2 ends