var array1 = [1, 1, 1, 2, 1, 1];
var array2 = [0, 0, 0.55, 0, 0];

function FindUniq(a) {
    a.sort();
    console.log(a);
    // console.log('-------------------------------------------');
    if(a[0] == a[1]) {
    console.log(a[a.length-1]);
    }
    else if (a[0] !== a[1]) {
    console.log(a[0]);
    }
    console.log('<------------------------------------------->');
}
FindUniq(array1)
FindUniq(array2)
