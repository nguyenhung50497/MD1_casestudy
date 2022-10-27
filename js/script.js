let lists = [];
let amounts = [];
let moneys = [];
let salary = 0;
let spending = 0;
let sumMoney = 0;
function salarySubmit() {
    salary = +document.querySelector('#salary').value;
}
function spendingSubmit() {
    spending = +document.querySelector('#spending').value;
}
function displayProduct() {
    let str = '';

    for (let i = 0; i < lists.length; i++) {
        str += `<tr>
                <td class="row1">${lists[i]}</td>
                <td class="row2">${amounts[i]}</td>
                <td class="row3">${moneys[i]}</td>
                <td class="row4"><button onclick="editProduct(` + i + `)">Sửa</button></td> 
                <td class="row5"><button onclick="deleteProduct(` + i + `)">Xóa</button></td>
                </tr>`;
    }
    document.querySelector('#resultproduct').innerHTML = str;
}

displayProduct();

function addProduct() {
    let product = document.querySelector('#product').value;
    let amount = +document.querySelector('#amounts').value;
    let money = +document.querySelector('#money').value;
    lists.push(product);
    amounts.push(amount);
    moneys.push(money);
    displayProduct();
    document.querySelector('#amountsSpending').innerHTML = lists.length;
    document.querySelector('#product').value = '';
    document.querySelector('#money').value = '';
    document.querySelector('#amounts').value = '';
    sumMoney = 0;
    for (let i=0; i<moneys.length; i++) {
        sumMoney += (moneys[i] * amounts[i]);
    }
    document.querySelector('#spent').innerHTML = sumMoney;
    if (spending-sumMoney <= 0) {
        document.querySelector('#still').innerHTML = 0;
        document.querySelector('#alert').innerHTML = 'Đã vượt hạn mức chi tiêu!';
    }
    else {
        document.querySelector('#still').innerHTML = spending - sumMoney;
        document.querySelector('#alert').innerHTML = '';
    }
    document.querySelector('#alert1').innerHTML = '';
    document.querySelector('#saveMoney').innerHTML = 0;
    document.querySelector('#right').innerHTML = '';
}

function editProduct(inDex) {
    let str = '';
    str = `<div id="divjs" style="">
           <table>
               <tr style="height: 40px">
                <td><strong>Nội dung</strong></td>
                <td><input type="text" id="editContent" value="` + lists[inDex] + `" style="border-radius: 5px; border: none; width: 300px"></td>
               </tr>
               <tr style="height: 40px">
                <td><strong>Số lượng</strong></td>
                <td><input type="number" id="editAmount" value="` + amounts[inDex] + `" style="border-radius: 5px; border: none; width: 150px"></td>
               </tr>
               <tr style="height: 40px">
                <td><strong>Số tiền</strong></td>
                <td><input type="number" id="editMoney" value="` + moneys[inDex] + `" style="border-radius: 5px; border: none; width: 250px"></td>
               </tr>
           </table>
           <br>
           <center><button onclick="saveProduct(` + inDex + `)">Save</button></div></center>`;
    document.querySelector('#right').innerHTML = str;
}

function saveProduct(inDex) {
    lists[inDex] = document.querySelector('#editContent').value;
    amounts[inDex] = document.querySelector('#editAmount').value;
    moneys[inDex] = document.querySelector('#editMoney').value;
    displayProduct();
    document.querySelector('#right').innerHTML = '';
}

function deleteProduct(inDex) {
    lists.splice(inDex, 1);
    displayProduct();
    document.querySelector('#amountsSpending').innerHTML = lists.length;
    document.querySelector('#right').innerHTML = '';
}
function settlement() {
    if (salary-sumMoney <= 0) {
        document.querySelector('#saveMoney').innerHTML = 0;
        document.querySelector('#alert1').innerHTML = 'Bạn không tiết kiệm được tiền!';
        document.querySelector('#alert').innerHTML = '';
    }
    else {
        document.querySelector('#saveMoney').innerHTML = salary - sumMoney;
        document.querySelector('#alert1').innerHTML = '';
    }
    document.querySelector('#right').innerHTML = '';
}
function resetBoard() {
    lists = [];
    moneys = [];
    amounts = [];
    document.querySelector('#resultproduct').innerHTML = '';
    document.querySelector('#spent').innerHTML = '';
    document.querySelector('#still').innerHTML = '';
    document.querySelector('#alert').innerHTML = '';
    document.querySelector('#saveMoney').innerHTML = '';
    document.querySelector('#alert1').innerHTML = '';
    document.querySelector('#salary').value = '';
    document.querySelector('#spending').value = '';
    document.querySelector('#right').innerHTML = '';
}

