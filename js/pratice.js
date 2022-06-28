let userList = document.querySelector(".userList");

let users = [
    {
        id: 0,
        name: '페이커',
        age: 26
    },
    {
        id: 1,
        name: '구마유시',
        age: 27
    },
    {
        id: 2,
        name: '제우스',
        age: 28
    },
    {
        id: 3,
        name: '쇼메이커',
        age: 29
    },
    {
        id: 4,
        name: '쵸비',
        age: 30
    }
]

// var arr1 = [...users];

// arr1[1].name = "클템";
// arr1[2].age = 30;

let div = document.getElementById("id");

const listUP = () => {
    userList.innerHTML = '';
    users.forEach(function (user) {
        let li = document.createElement('li');
        
        li.innerHTML = user.name;
        userList.appendChild(li);
        
        li.addEventListener('click',function(){
            
            div.innerHTML = '<div> ID : ' + user.id + '</div>';
        });
    });
}

const listUPver2 = () => {
    userList.innerHTML = '';
    let tmpTxt = '';

    users.forEach(function (user) {
        tmpTxt += `<li class='item'>${user.name} ${user.age}</li>`
    });
    userList.innerHTML = tmpTxt;
}
listUPver2()
// const itmes =  document.querySelectorAll('.item');
// itmes.forEach((item, index) => {
//     item.addEventListener('click', function(e) {
//         div.innerHTML = '<div> ID : ' + users[index].name + '</div>';
//     })
// })
// const ul = document.querySelector('.userList')

// ul.addEventListener('click', function(e) {
//     // console.log(e.target)
//     // console.log(e.currentTarget) //
// })

let UserName = document.getElementById("userName");
let UserAge = document.getElementById("userAge");
let creatBox = document.getElementById("create");

creatBox.addEventListener('click', function () {
    

    let newUser_ID = users.length;
    let newUser_Name = UserName.value;
    let newUser_Age = UserAge.value;

    const newBe = {
        id: newUser_ID,
        name: newUser_Name,
        age: parseInt(newUser_Age),
    }
    users.push(newBe);
    console.log(users);
    // console.log(newBe);
    // result.push(newUser_ID);
    // result.push(newUser_Name);
    // result.push(newUser_Age);
    listUPver2();
})

let delButton = document.getElementById("delButton");

delButton.addEventListener('click', function () {
    const del = users.filter(resule => resule.name.length < 3)
    // del은 users 에서 filter 된 값 - 이름이 3글자가 안되는 글자
    console.log(del);
})

//Spread Operator(스프레드 연산자)

// var arr = ['철수', '영희'];
// var arr1 = arr;

// arr1.push('바둑이');
// console.log(arr1);
// //
// var arr2 = ['철수','영희'];
// var arr3 = arr2.map((item) => item);

// arr3.push('바둑이');
// console.log(arr3);
// console.log(arr2);
// //

// var str = ['철수','영희']
// var str1 = [...str];

// str1.push('바둑이');

// console.log(str1);


// var arr1 = [{name : '철수',  age : 25}];
// var arr2 = [...arr1];

// arr2[0].name = '영희';

//Rest Parameter
// function add(...rest) {
//     let sum = 0 ;
//     for (let item of rest){
//         sum += item;
//     }
//     return sum;
// }

// console.log(add(1));
// console.log(add(1,2));
// console.log(add(1,2,3));


var input = [
    {
        name : 'faker',
        age : 29
    },
    {
        name : 'bdd',
        age : 33
    },
    {
        name : 'show',
        age : 34
    }
]

var min = Math.min(...input.map((mi) => mi.age));
var max = Math.max(...input.map((mx) => mx.age));

console.log(min);
console.log(max);

function addList(newPerson) {
    input.push(newPerson);
}

// function sum(arg1, arg2){
//     return arg1 + arg2;
// }

// function minus(arg1, arg2) {
//     return arg1 - arg2;
// }

// function math(arg1, arg2, calc) {
//     return calc(arg1, arg2);
// }

// let result = math(20, 30, sum);
// console.log(result);


// 
// console.log(users);
// listUP()
// let result2 = users.map(function(user){
//     console.log(user)
//     let li = document.createElement('li');
//     li.addEventListener('click',function(){
//         alert(user.age);    
//     })
//     li.innerHTML = user.name;
//     userList.appendChild(li);
//     // let userInfo = document.querySelectorAll("li")
// })
// console.log(result2)
// li_show();

