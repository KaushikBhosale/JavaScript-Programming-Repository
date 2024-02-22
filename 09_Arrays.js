// Arrays

// can hold any kind of data together also object and other array to
let array = ["Kaushik", 88,"Helo",101,false,null,undefined]; 

console.log(array);
console.log(typeof array);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Array Methods

console.log(array.length);

let a1 = [8,2,11,1,"Kaushik"];
let a2 = [5,9,1,4];
let a3 = [9,10,11,22];

console.log(a1.sort());

num=[1,2,3,4,6,8];
//   0 1 2 3
console.log(num.slice(1,3));
console.log(num.slice(3));

// Array with Loops

// FoEachloop

num.forEach(function(aa){
    console.log(aa);
});

num.forEach((aa)=>{
    console.log(aa);
});


// Arrayfrom
let integ="Kaushik Bhosale";

let rrr = Array.from(integ);
console.log(rrr);


let _MAP = [1,2,3,4,5];

let t1 = _MAP.map((v,i,a)=>{ // creates new array
    console.log(v,i,a)
    return v+10;
})
console.log(t1);


let t = _MAP.filter((v,i,a)=>{ // creates new array and passses the value which are true
    console.log(v,i,a)
    return v<5;
})
console.log(t);

let tt = _MAP.reduce((v1,v2)=>{ // add the array elements
    console.log(v1,v2);
    return v1 + v2;
})
console.log(tt);


// 2d Array

let _2darray=[[12,2],[2,3]];

console.log("This is 2d Array");
console.log(_2darray);

let data={
    name:"Anmol",
    city:"Mumbai"
};

_2darray=["Kaushik","Bhosale",[12,3,34,55],_2darray, data];
console.log(_2darray);