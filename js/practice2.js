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
];

const listUpVer2 = () => {

    users.forEach(function (user) {
        let userLi = document.createElement('li');
        userLi.setAttribute('class', 'item');
        userLi.innerHTML = `${user.name} ${user.age}`;
        // userLi = li태그 생성

        let delBtn = document.createElement('button');
        delBtn.innerHTML = '삭제';
        delBtn.style = 'margin-left: 20px;'
        // 삭제버튼 생성

        delBtn.addEventListener('click', (e) => {
            delBtn.parentElement.remove();
            deleteUser();
            users.filter()

        });
        userList.appendChild(userLi);
        userLi.appendChild(delBtn);
    });
}

function deleteUser() {
    console.log(users)
}

listUpVer2();

let UserName = document.getElementById("userName");
let UserAge = document.getElementById("userAge");
let creatBox = document.getElementById("create");

creatBox.addEventListener('click', function () {
    userList.innerHTML = '';
    
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
    listUpVer2();
})

let delButton = document.getElementById("delButton");

delButton.addEventListener('click', function (e) {
    const del = users.filter(resule => resule.name.length < 3)
    console.log(del);
})






// let test = {
//     arg: function (){
//         this.arg2 = {
//             test: test
//         }
//     }
// }

// test.arg();


// const arrDup1 = ['라이언', '어피치', '프로도', '콘', '라이언', '프로도'];
// const set1 = new Set(arrDup1);

// if(set1.size < arrDup1.length){
//   console.log("중복이 있슴.");
// }
//  기본 데이터 타입 배열의 중복 체크 


// const arrDup =[
//     {name:'라이언',company:'kakao'}, 
//     {name:'브라운',company:'naver'}, 
//     {name:'라이언',company:'kakao'}, 
//     {name:'펭수',company:'ebs'},
// ];

// let ttt = arrDup[0] === arrDup[2]


// if (!ttt) {
//     console.log(arrDup[0] === arrDup[2]);
// }

// const set = new Set(arrDup);
// console.log(set.size);

