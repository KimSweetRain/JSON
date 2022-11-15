const url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=20&serviceKey=P1GH2kzBAJ93%2Fw44Z0Vo5kyMWfCrEEpvpl5VH2IoF0OJT5x5j1cpZsDwkN9x%2F0tF7Pw8fzGECx4WIgNgAQg%2BAA%3D%3D'; /*URL*/


// for(let i=0; i<10; i++){
//     fetch(url)
//     .then(res => res.json())
// 	.then(myJson => {
//         const centerName= myJson.data[i].centerName;
//         const address= myJson.data[i].address;
//         const zipCode= myJson.data[i].zipCode;
//         const phoneNumber= myJson.data[i].phoneNumber;
//         // const lat= myJson.data[i].lat;
//         // const lng= myJson.data[i].lng;
//         document.getElementById('table').appendChild(document.write(`<tr><td>`)); 
//     })
// }

function fetchAPI(){
    return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}
fetchAPI().then((datas) => {
    console.log(datas.data);
    showDatas(datas.data);
});
function showDatas(datas){
    const table = document.querySelector('#table');
    table.innerHTML = datas.map((data) => setLiElement(data)).join('');
    // table.appendChild(document.createTextNode(datas.map((data) => setLiElement(data))))
}
function setLiElement(data){
    return `<tr><td>${data.centerName}</td><td>${data.address}</td><td>${data.zipCode}</td><td>${data.phoneNumber}</td></tr>`;
}
