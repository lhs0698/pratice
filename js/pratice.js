let User_list = document.querySelector(".User_list");

let Users_list = [
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
        name: '케리아',
        age: '29'
    },
    {
        id: '4',
        name: '오너',
        age: '30'
    },
    {
        id: '5',
        name: '클템',
        age: '31'
    }
]

const result = [];

Users_list.forEach(function (element) {
    console.log(element)
});





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
