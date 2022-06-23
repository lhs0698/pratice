let userList = document.querySelector(".userList");


let users = [
    {
        id: '0',
        name: '페이커',
        age: '26'
    },
    {
        id: '1',
        name: '구마유시',
        age: '27'
    },
    {
        id: '2',
        name: '제우스',
        age: '28'
    },
    {
        id: '3',
        name: '쇼메이커',
        age: '29'
    },
    {
        id: '4',
        name: '쵸비',
        age: '30'
    }
]

let result1 = users.forEach(function (user) {
    console.log(user);
    let li = document.createElement('li');

    li.addEventListener('click',function(){
        let div = document.getElementById("id");
        // let div2 = div.innerHTML = user.id + user.name + user.age;
        div.innerHTML = '<div> ID : ' + user.id + '</div>';
    });
    li.innerHTML = user.name;
    userList.appendChild(li);
    // let userInfo = document.querySelectorAll("li")
});

let UserID = document.getElementById("useID");
let UserName = document.getElementById("userName");
let UserAge = document.getElementById("userAge");
let creatBox = document.getElementById("create");

creatBox.addEventListener('click', function () {
    let newUser_ID = UserID.value;
    let newUser_Name = UserName.value;
    let newUser_Age = UserAge.value;
    
    let result = [];
    // let obj = {};

    const newBe = {
        id : newUser_ID,
        name : newUser_Name,
        age : newUser_Age,
    }
    // console.log(newBe);

    users.push(newBe);
    // result.push(newUser_ID);
    // result.push(newUser_Name);
    // result.push(newUser_Age);

    // console.log(result)

    // users.push(result);
    // console.log(users);
})
// 

console.log(users);




 
  











// let newUser = [
//     {
//         id : '5',
//         name : '오너',
//         age : '31'
//     }
// ]























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



// function li_show() {
//     let li = document.createElement('li');
//     li.appendChild(document.createTextNode(Users_list[0].name));
//     User_list.appendChild(li);

//     let li_1 = document.createElement('li');
//     li_1.appendChild(document.createTextNode(Users_list[1].name));
//     User_list.appendChild(li_1);

//     let li_2 = document.createElement('li');
//     li_2.appendChild(document.createTextNode(Users_list[2].name));
//     User_list.appendChild(li_2);

//     let li_3 = document.createElement('li');
//     li_3.appendChild(document.createTextNode(Users_list[3].name));
//     User_list.appendChild(li_3);

//     let li_4 = document.createElement('li');
//     li_4.appendChild(document.createTextNode(Users_list[4].name));
//     User_list.appendChild(li_4);

//     let li_5 = document.createElement('li');
//     li_5.appendChild(document.createTextNode(Users_list[5].name));
//     User_list.appendChild(li_5);

//     console.log(li)
//     User_list.addEventListener('click',addItem);

//     function addItem(event) {
//         alert(Users_list[0].age);
//     }
// }

// li_show();
