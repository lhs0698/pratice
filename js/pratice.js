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
let div = document.getElementById("id");

const listUP = () => {
    userList.innerHTML = '';
    users.forEach(function (user) {
        let li = document.createElement('li');
        
        li.innerHTML = user.name;
        userList.appendChild(li);
        // let userInfo = document.querySelectorAll("li")
        
        
        li.addEventListener('click',function(){
            // let div2 = div.innerHTML = user.id + user.name + user.age;
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
const ul = document.querySelector('.userList')
ul.addEventListener('click', function(e) {
    // console.log(e.target)
    // console.log(e.currentTarget) //
})

let UserName = document.getElementById("userName");
let UserAge = document.getElementById("userAge");
let creatBox = document.getElementById("create");

creatBox.addEventListener('click', function () {
    let newUser_ID = users.length;
    let newUser_Name = UserName.value;
    let newUser_Age = UserAge.value;
    let result = [];
    // let obj = {};
    const newBe = {
        id: newUser_ID,
        name: newUser_Name,
        age: parseInt(newUser_Age),
    }
    // console.log(newBe);
    users.push(newBe);
    // result.push(newUser_ID);
    // result.push(newUser_Name);
    // result.push(newUser_Age);

    // console.log(result)

    // users.push(result);
    listUPver2()
    

    const del = users.filter(resule => resule.name.length < 4)
    if(del){
        
    }
    console.log(del);
})

// const resule = users;
// const del = users.filter(resule => resule.name.length < 4)
// console.log(del);

let delButton = document.getElementById("delButton");
const del = users.delete(resule => resule.name.length < 3)

delButton.addEventListener('click',function() {
    console.log(del)
    let resule2 = del

    
})


























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

