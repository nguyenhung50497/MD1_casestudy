let lists = [];
let amounts = [];
let moneys = [];
let units = [];
let salary = 0;
let spending = 0;
let sumMoney = 0;

function salarySubmit() {
    salary = +document.querySelector('#salary').value;
    if (salary < 0) {
        salary = -salary;
    }
    document.querySelector('#salary').value = salary;
}

function spendingSubmit() {
    spending = +document.querySelector('#spending').value;
    if (spending < 0) {
        spending = -spending;
    }
    document.querySelector('#spending').value = spending;
}

console.log(salary);

function displayProduct() {
    let str = '';
    for (let i = 0; i < lists.length; i++) {
        str += `<tr>
                <td class="row1">${lists[i]}</td>
                <td class="row2">${amounts[i]}</td>
                <td class="row6">${units[i]}</td>
                <td class="row3">${moneys[i].toLocaleString('vi', {style: 'currency', currency: 'VND'})}</td>
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
    let unit = document.querySelector('#unit').value;
    lists.push(product);
    amounts.push(amount);
    moneys.push(money);
    units.push(unit);
    displayProduct();
    document.querySelector('#amountsSpending').innerHTML = lists.length;
    document.querySelector('#product').value = '';
    document.querySelector('#money').value = '';
    document.querySelector('#amounts').value = '';
    sumMoney = 0;
    for (let i = 0; i < moneys.length; i++) {
        sumMoney += (moneys[i] * amounts[i]);
    }
    document.querySelector('#spent').innerHTML = sumMoney.toLocaleString('vi', {style: 'currency', currency: 'VND'});
    if (sumMoney > 0) {
        if (spending - sumMoney <= 0) {
            document.querySelector('#still').innerHTML = 0;
            document.querySelector('#alert').innerHTML = 'Đã vượt hạn mức chi tiêu!';
        } else {
            document.querySelector('#still').innerHTML = (spending - sumMoney).toLocaleString('vi', {
                style: 'currency',
                currency: 'VND'
            });
            document.querySelector('#alert').innerHTML = '';
        }
    } else {
        document.querySelector('#still').innerHTML = spending.toLocaleString('vi', {
            style: 'currency',
            currency: 'VND'
        });
    }
    document.querySelector('#alert1').innerHTML = '';
    document.querySelector('#saveMoney').innerHTML = 0;
    document.querySelector('#right').innerHTML = '';
}

function editProduct(inDex) {
    let str = '';
    str = `<div id="divjs" style="width: 100%;
            height: 100%;
            padding: 20px 30px 30px 30px;
            border-radius: 20px;
            ">
           <table>
               <tr style="height: 40px">
                <td><strong>Nội dung</strong></td>
                <td><input type="text" id="editContent" value="` + lists[inDex] + `" style="border-radius: 5px; width: 300px"></td>
               </tr>
               <tr style="height: 40px">
                <td><strong>Số lượng</strong></td>
                <td>
                    <input type="number" id="editAmount" value="` + amounts[inDex] + `" style="border-radius: 5px; width: 150px">
                </td>
               </tr>
               <tr style="height: 40px">
                <td><strong>Đơn vị</strong></td>
                <td>
                    <input type="text" id="editUnit" value="` + units[inDex] + `" style="border-radius: 5px; width: 150px">
                </td>
               </tr>
               <tr style="height: 40px">
                <td><strong>Số tiền</strong></td>
                <td><input type="number" id="editMoney" value="` + moneys[inDex] + `" style="border-radius: 5px; width: 250px"></td>
               </tr>
           </table>
           <center><button onclick="saveProduct(` + inDex + `)">Save</button></center>
           </div>`;
    document.querySelector('#right').innerHTML = str;
}

function saveProduct(inDex) {
    lists[inDex] = document.querySelector('#editContent').value;
    amounts[inDex] = +document.querySelector('#editAmount').value;
    moneys[inDex] = +document.querySelector('#editMoney').value;
    units[inDex] = document.querySelector('#editUnit').value;
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
    if (sumMoney > 0) {
        if (salary - sumMoney <= 0) {
            document.querySelector('#saveMoney').innerHTML = 0;
            document.querySelector('#alert1').innerHTML = 'Bạn không tiết kiệm được tiền!';
            document.querySelector('#alert').innerHTML = '';
        } else {
            document.querySelector('#saveMoney').innerHTML = (salary - sumMoney).toLocaleString('vi', {
                style: 'currency',
                currency: 'VND'
            });
            document.querySelector('#alert1').innerHTML = '';
        }
        document.querySelector('#right').innerHTML = '';
    } else {
        document.querySelector('#saveMoney').innerHTML = salary.toLocaleString('vi', {
            style: 'currency',
            currency: 'VND'
        });
    }
}

function resetBoard() {
    lists = [];
    moneys = [];
    amounts = [];
    salary = 0;
    spending = 0;
    sumMoney = 0;
    document.querySelector('#resultproduct').innerHTML = '';
    document.querySelector('#spent').innerHTML = '';
    document.querySelector('#still').innerHTML = '';
    document.querySelector('#alert').innerHTML = '';
    document.querySelector('#saveMoney').innerHTML = '';
    document.querySelector('#alert1').innerHTML = '';
    document.querySelector('#salary').value = '';
    document.querySelector('#spending').value = '';
    document.querySelector('#right').innerHTML = '';
    document.querySelector('#amountsSpending').innerHTML = '';
    document.querySelector('#saveMoney').innerHTML = '';
    document.querySelector('#still').innerHTML = '';
}

window.addEventListener()
