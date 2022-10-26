let row = '';
let array = [];
let amounts = 0;

function displayProduct() {
    let str = '';
    for (let i = 0; i < array.length; i++) {
        str += `<tr>
                <th>${array[i]}</th> 
                <td><button onclick="editProduct(` + i + `)">Edit</button></td> 
                <td><button onclick="deleteProduct(` + i + `)">Delete</button></td>
                </tr>`;
    }
    document.querySelector('#resultproduct').innerHTML = str;
}

displayProduct();

function addProduct() {
    let product = document.querySelector('#product').value;
    array.push(product);
    displayProduct();
    document.querySelector('#amounts').innerHTML = array.length;
    document.querySelector('#product').value = '';
}

function editProduct(inDex) {
    let str = '';
    str = `<div style="width: 100%; height: 100%; border: 2px solid deepskyblue; background-color: wheat; text-align: center; padding-top: 45px; border-radius: 10px">
            <input type="text" id="editProduct" value="` + array[inDex] + `" style="border-radius: 5px; border: none; outline: none;" placeholder="Edit content"><br><br>
            <button onclick="saveProduct(` + inDex + `)">Save</button></div>`;
    document.querySelector('#div2').innerHTML = str;
}

function saveProduct(inDex) {
    array[inDex] = document.querySelector('#editProduct').value;
    displayProduct();
    document.querySelector('#div2').innerHTML = '';
}

function deleteProduct(inDex) {
    array.splice(inDex, 1);
    displayProduct();
    document.querySelector('#amounts').innerHTML = array.length;
}