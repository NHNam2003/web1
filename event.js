"use strict"; // chế độ nghiêm ngặt
const $ = document.querySelector.bind(document) // nó gán $ = $
const $$ = document.querySelectorAll.bind(document) // nó gán $All = $$
// locastorage
function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? [] // dich mã du lieu JOSN tu locastrorage về wed
    const save = () => {
        localStorage.setItem(key, JSON.stringify(store)) // phiên mã JOSN đẩy lên locastrorage
    }

    const storage = {
        // lay du lieu tu locastorage
        get() {
            return store
        },

        // them du lieu tu locastorage
        set(data = undefined) {
            if (data != undefined) {
                store.push(data)
                save()
            }
        },

        // chinh sua du lieu tu locastorage
        edit(data = undefined) {
            if (data != undefined) {
                store.forEach((item, idx) => {
                    if (item.id == data.id) {
                        store.splice(idx, 1, data);
                    }
                })
            }
            save()
        },

        // xoa du lieu tu locastorage
        remove(id = undefined) {
            if (id != undefined) {
                store.forEach((item, idx) => {
                    if (item.id == id) {
                        store.splice(idx, 1)
                    }
                })
                save()
            }
        }
    }
    return storage
}
const accounts = createStorage('accounts') // tao key cho locastorage
const items = createStorage('items') // tao key cho locastorage
const saleItems = createStorage('saleItems') // tao key cho locastorage
const orderItemAll = createStorage('orderItemAll') // tao key cho locastorage
//-------------------------------------------------------------------------------
const list = [
    {
        id: 0,
        img: './img/anh1.jpg',
        name: 'Áo khoác nam AKHTK301',
        classify: 'Áo khoác',
        detail: {
            cl: 'DẠ (16% COTON, 78% POLY, 6% SPANDEX)',
            d: 'Relax',
        },
        price: 869
    },
    {
        id: 1,
        img: './img/anh2.jpg',
        name: 'Áo khoác nam AKBTK301',
        classify: 'Áo khoác',
        detail: {
            cl: 'Jeans cotton (100% cotton)',
            d: 'Regular',
        },
        price: 699
    },
    {
        id: 2,
        img: './img/anh3.jpg',
        name: 'Áo khoác blazer ABZTK301',
        classify: 'Áo khoác',
        detail: {
            cl: 'VẢI TỔNG HỢP (58% Tylen, 40% Rayon, 2% Spandex)',
            d: 'Regular',
        },
        price: 1195
    },
    {
        id: 3,
        img: './img/anh4.jpg',
        name: 'Áo nỉ nam ANTTK307',
        classify: 'Áo thun các loại',
        detail: {
            cl: 'PIQUE (75% COTTON, 25% POLY)',
            d: 'Regular',
        },
        price: 449
    },
    {
        id: 4,
        img: './img/anh5.jpg',
        name: 'Áo nỉ nam ANHTK314',
        classify: 'Áo thun các loại',
        detail: {
            cl: 'NỈ DA CÁ (88% Cotton,12% Poly)',
            d: 'RELAX',
        },
        price: 449
    },
    {
        id: 5,
        img: './img/anh6.jpg',
        name: 'Áo len nam ALETK301',
        classify: 'Áo len',
        detail: {
            cl: 'LEN (49% Viscose,29% Poly,22% Nilong)',
            d: 'Regular',
        },
        price: 599
    },
    {
        id: 6,
        img: './img/anh7.jpg',
        name: 'Áo len nam ALETK305',
        classify: 'Áo len',
        detail: {
            cl: 'LEN (49% Viscose,29% Poly,22% Nilong)',
            d: 'Regular',
        },
        price: 565
    },
    {
        id: 7,
        img: './img/anh8.jpg',
        name: 'Áo nỉ nam ANTTK315',
        classify: 'Áo thun các loại',
        detail: {
            cl: 'MẶT DỆT LẠ (61% COTTON,37% POLY.2% SPANDEX)',
            d: 'Regular',
        },
        price: 419
    },
    {
        id: 8,
        img: './img/anh9.jpg',
        name: 'Áo len nam ALETK306',
        classify: 'Áo len',
        detail: {
            cl: 'Len (49% Viscose,29% Poly,22% Nilong)',
            d: 'Regular',
        },
        price: 549
    },
    {
        id: 9,
        img: './img/anh10.jpg',
        name: 'Áo len nam ALETK302',
        classify: 'Áo len',
        detail: {
            cl: 'Len (49% Viscose,29% Poly,22% Nilong)',
            d: 'Regular',
        },
        price: 349
    },
    {
        id: 10,
        img: './img/anh11.jpg',
        name: 'Áo hoodie nam AHHTK306',
        classify: 'Áo hoodie',
        detail: {
            cl: 'NỈ DA CÁ (88% COTTON,12% POLY)',
            d: 'RELAX',
        },
        price: 549
    },
    {
        id: 11,
        img: './img/anh12.jpg',
        name: 'Áo sơ mi nam SDKTK347',
        classify: 'Áo thun các loại',
        detail: {
            cl: 'KHAKI CHÉO (98% COTTON,2% POLY)',
            d: 'RELAX',
        },
        price: 449
    },
    {
        id: 12,
        img: './img/anh13.jpg',
        name: 'Áo hoodie nam AHHTK315',
        classify: 'Áo hoodie',
        detail: {
            cl: '95% cotton,5% poly',
            d: 'Regular',
        },
        price: 499
    },
    {
        id: 13,
        img: './img/anh14.jpg',
        name: 'Áo len nam ALETK303',
        classify: 'Áo len',
        detail: {
            cl: 'Len (49% Viscose,29% Poly,22% Nilong)',
            d: 'Regular',
        },
        price: 349
    },
    {
        id: 14,
        img: './img/anh15.jpg',
        name: 'Áo thun dài tay ATDTK303',
        classify: 'Áo thun các loại',
        detail: {
            cl: 'COTTON (88% COTTON,12% SPANDEX)',
            d: 'Regular',
        },
        price: 399
    },
    {
        id: 15,
        img: './img/anh16.jpg',
        name: 'Áo len nam ALETK304',
        classify: 'Áo len',
        detail: {
            cl: 'Len (49% Viscose,29% Poly,22% Nilong)',
            d: 'Regular',
        },
        price: 379
    },
    {
        id: 16,
        img: './img/anh17.jpg',
        name: 'ÁO SHACKET NAM ASHTK302',
        classify: 'Áo thun các loại',
        detail: {
            cl: '100% TUYẾT NHUNG',
            d: 'SHACKET',
        },
        price: 699
    },
    {
        id: 17,
        img: './img/anh18.jpg',
        name: 'Áo len nam CARTK301',
        classify: 'Áo len',
        detail: {
            cl: 'LEN (50%visco 30%poly 20%NYLON)',
            d: 'TAPERED',
        },
        price: 699
    },
    {
        id: 18,
        img: './img/anh19.jpg',
        name: 'Áo nỉ nam ANHTK308',
        classify: 'Áo thun các loại',
        detail: {
            cl: 'NỈ DA CÁ (88% Cotton,12% Poly)',
            d: 'RELAX',
        },
        price: 425
    },
    {
        id: 19,
        img: './img/anh20.jpg',
        name: 'Áo khoác NAM AKITK301',
        classify: 'Áo khoác',
        detail: {
            cl: 'KAKI (100% Cotton)',
            d: 'RELAX',
        },
        price: 619
    },
    {
        id: 20,
        img: './img/anh21.jpg',
        name: 'Áo nỉ nam ANHTK309',
        classify: 'Áo thun các loại',
        detail: {
            cl: 'TEXTURE KNIT/NỈ MỎNG (70% Cotton,30% Poly)',
            d: 'RELAX',
        },
        price: 449
    },
    {
        id: 21,
        img: './img/anh22.jpg',
        name: 'Áo polo nam POTTK333',
        classify: 'Áo thun các loại',
        detail: {
            cl: 'PIQUE (65% COTTON,35% POLY)',
            d: 'Regular',
        },
        price: 599
    },
    {
        id: 22,
        img: './img/anh23.jpg',
        name: 'Áo khoác nam AKGTK306',
        classify: 'Áo khoác',
        detail: {
            cl: 'DẠ (16% COTON, 78% POLY, 6% SPANDEX)',
            d: 'RELAX',
        },
        price: 749
    },
    {
        id: 23,
        img: './img/anh24.jpg',
        name: 'Áo khoác nam KNMTK302',
        classify: 'Áo khoác',
        detail: {
            cl: 'GIÓ (100% POLY)',
            d: 'RELAX',
        },
        price: 549
    },
    {
        id: 24,
        img: './img/anh25.jpg',
        name: 'Áo khoác nam AKBTK304',
        classify: 'Áo khoác',
        detail: {
            cl: '88% Cotton, 12% Spandex',
            d: 'RELAX',
        },
        price: 699
    },
    {
        id: 25,
        img: './img/anh33.jpg',
        name: 'Áo sơ mi nam AKBTK301',
        classify: 'Áo thun các loại',
        detail: {
            cl: 'Jeans (100% cotton)',
            d: 'Regular',
        },
        price: 420
    },
    {
        id: 26,
        img: './img/anh27.jpg',
        name: 'Áo nỉ nam ANHTK312',
        classify: 'Áo thun các loại',
        detail: {
            cl: 'NỈ DA CÁ (88% Cotton, 12 % Poly)',
            d: 'Regular',
        },
        price: 445
    },
    {
        id: 27,
        img: './img/anh28.jpg',
        name: 'Áo hoodie nam AHTTK304',
        classify: 'Áo hoodie',
        detail: {
            cl: 'NỈ DA CÁ (88% Cotton,12% Spandex)',
            d: 'RELAX',
        },
        price: 529
    },
    {
        id: 28,
        img: './img/anh29.jpg',
        name: 'Áo khoác nam ADLTK302',
        classify: 'Áo khoác',
        detail: {
            cl: 'Da lộn (100% Poly)',
            d: 'Regular',
        },
        price: 819
    },
    {
        id: 29,
        img: './img/anh30.jpg',
        name: 'Áo khoác jean nam AKBTK303',
        classify: 'Áo khoác',
        detail: {
            cl: '100% JEAN COTTON',
            d: 'Regular',
        },
        price: 695
    },
    {
        id: 30,
        img: './img/anh31.jpg',
        name: 'Áo nỉ nam ANTTK303',
        classify: 'Áo thun các loại',
        detail: {
            cl: 'PIQUE (52% Cotton, 48% Poly)',
            d: 'Regular',
        },
        price: 395
    },
    {
        id: 31,
        img: './img/anh32.jpg',
        name: 'Áo sơ mi nam SKDTK340',
        classify: 'Áo thun các loại',
        detail: {
            cl: 'FLANNEL COTTON (100% Cotton)',
            d: 'Regular',
        },
        price: 485
    },
]

const saleList = [
    {
        id: 0,
        img: './img/anhsale1.jpg',
        name: 'Áo khoác blazer ABZTK302',
        detail: {
            cl: 'TUYTSI (65% Tylen,32% Rayon,3% Spandex)',
            d: 'Regular',
        },
        priceOld: 1195,
        price: 830
    },
    {
        id: 1,
        img: './img/anhsale2.jpg',
        name: 'Áo khoác nam AKGTK309',
        detail: {
            cl: 'GIÓ LÌ (100% POLY)',
            d: 'Regular',
        },
        priceOld: 720,
        price: 650
    },
    {
        id: 2,
        img: './img/anhsale3.jpg',
        name: 'Áo khoác nam AKGTK301',
        detail: {
            cl: 'GIÓ LÌ (100% POLY)',
            d: 'Regular',
        },
        priceOld: 699,
        price: 499
    },
    {
        id: 3,
        img: './img/anhsale4.jpg',
        name: 'Áo khoác nam AKGTK303',
        detail: {
            cl: 'DỆT KIM MẶT LỖ (33% COTTON/ 62% POLY, 5 % SPANDEX)',
            d: 'Regular',
        },
        priceOld: 345,
        price: 340
    },
    {
        id: 4,
        img: './img/anhsale5.jpg',
        name: 'Áo thun dài tay ATDTK302',
        detail: {
            cl: 'VẢI TỔNG HỢP (68% TYLEN,29% RAYON,3% SPANDEX)',
            d: 'TAPERED',
        },
        priceOld: 340,
        price: 240
    },
    {
        id: 5,
        img: './img/anhsale6.jpg',
        name: 'Áo khoác blazer ABZTK303',
        detail: {
            cl: 'Dạ (50% Wool, 30% Viscose, 20% Poly)',
            d: 'Regular',
        },
        priceOld: 1450,
        price: 1150
    },
    {
        id: 6,
        img: './img/anhsale7.jpg',
        name: 'Áo thun dài tay ATDTK304',
        detail: {
            cl: '100% Cotton',
            d: 'Regular',
        },
        priceOld: 340,
        price: 240
    },
    {
        id: 7,
        img: './img/anhsale8.jpg',
        name: 'Áo thun dài tay ATDTK305',
        detail: {
            cl: '100% Cotton',
            d: 'Regular',
        },
        priceOld: 340,
        price: 240
    },
]

if (items.get().length == 0) {
    for (var i = 0; i < list.length; i++) {
        items.set(list[i])
    }
}

if (accounts.get().length == 0) {
    accounts.set({ id: 0, name: 'admin', email: 'admin@gmail.com', password: 'khongcomatkhau', blackList: false, admin: true, })
    accounts.set({ id: 1, name: 'nam', email: 'nam@gmail.com', password: 'khongcomatkhau', blackList: false, admin: false, cartList: [], orderList: [], realName: 'Nguyễn Hữu Nam', phone: '0947763000', location: 'Đường An Dương Vương Phường 3 Quận 5' })
}

if (saleItems.get() == 0) {
    for (var i = 0; i < saleList.length; i++) {
        saleItems.set(saleList[i])
    }
}

function calculateTotal(products) {
    const total = products.reduce((accumulator, product) => {
      const productPrice = product.quantity * product.price;
      return accumulator + productPrice;
    }, 0);
    return total;
  }
  
  function checkPasswordFormat(password) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?=.*\d).{6,}$/;
    return regex.test(password);
  }
  
function searchByName(name) {
    let result = [];
    for (let product of list) {
      let lowerProductName = product.name.toLowerCase();
      let lowerName = name.toLowerCase();
      if (lowerProductName.includes(lowerName)) {
        result.push(product);
      }
    }
    return result;
  }
  
  function sortByPriceAscending(products) {
    let sortedProducts = [...products];
    sortedProducts.sort(function (a, b) {
      return a.price - b.price;
    });
    return sortedProducts;
  }
  
  function applyCoupon(products, code) {
    const coupons = [
      { code: 'SALE10', minPurchase: 1000, maxDiscount: 100 },
      { code: 'SALE20', minPurchase: 2000, maxDiscount: 300 },
      { code: 'SALE30', minPurchase: 3000, maxDiscount: 500 }, 
    ];
  
    const coupon = coupons.find((c) => c.code === code);
    if (!coupon) return 'Mã khuyến mãi không hợp lệ';
    total = products.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);
    if (total < coupon.minPurchase)
      return `Đơn hàng của bạn phải từ ${coupon.minPurchase} để sử dụng mã khuyến mãi này`;
    const discount = Math.min((total * coupon.code.slice(4)) / 100, coupon.maxDiscount);
    const discountProducts = [];
    for (let product of products) {
      const ratio = product.price / total;
      const productDiscount = discount * ratio;
      const newProduct = {
        ...product,
        price: Math.round(product.price - productDiscount),
      };
      discountProducts.push(newProduct);
    }
    return discountProducts;
  }
//-------------------------------------------------------------------------------
const itemsApi = items.get()
var accountApi = accounts.get()
const saleItemsApi = saleItems.get()
var orderItemAllApi = orderItemAll.get()
var accountActive
function save() {
    localStorage.setItem('accounts', JSON.stringify(accountApi))
}

function saveOrder() {
    localStorage.setItem('orderItemAll', JSON.stringify(orderItemAllApi))
}

// xoa san pham
function renderRemoveItems() {
    var html = itemsApi.map(item => `
        <li class="admin-right-list__item">
            <img class="admin-right-img" src="${item.img}" atl="loi anh"/>
            <p class="admin-right-name">${item.name}</p>
            <p class="admin-right-price">${item.price >= 1000 ?
            String(item.price).slice(0, String(item.price).length - 3) + '.' + String(item.price).slice(String(item.price).length - 3, String(item.price).length) :
            item.price}.000₫
            </p>
            <button onclick="showAsk(${item.id})" class="remove">&times;</button>
        </li>`).join('')

    $('.admin-right-list').innerHTML = html
}

function renderEditItems() {
    var html = itemsApi.map(item => `
        <li class="admin-right-list__item">
            <img class="admin-right-img" src="${item.img}" atl="loi anh"/>
            <p class="admin-right-name">${item.name}</p>
            <p class="admin-right-price">${item.price >= 1000 ?
            String(item.price).slice(0, String(item.price).length - 3) + '.' + String(item.price).slice(String(item.price).length - 3, String(item.price).length) :
            item.price}.000₫
            </p>
            <p class="admin-right-price">${item.detail.cl}</p>
            <p class="admin-right-price">${item.detail.d}</p>
            <button onclick="showEdit(${item.id})" class="edit">Sửa</button>
        </li>`).join('')
    $('.admin-right-list').innerHTML = html
}

function showAsk(id) {
    var idx
    itemsApi.forEach(item => {
        if (item.id == id) {
            idx = item
        }
    })
    $('.ask').classList.add('ask--active')
    $('.ask-container').innerHTML = `
    <p class="ask-content">Có muốn xoá sản phẩm</p>
    <li class="admin-right-list__item" style="border: 0;">
        <img class="admin-right-img" style="width: 15%;" src="${idx.img}" atl="loi anh"/>
        <p class="admin-right-name" style="width: auto;">${idx.name}</p>
        <p class="admin-right-price" style="width: auto;">${idx.price >= 1000 ?
            String(idx.price).slice(0, String(idx.price).length - 3) + '.' + String(idx.price).slice(String(idx.price).length - 3, String(idx.price).length) :
            idx.price}.000₫
        </p>
    </li>
    <div style="display: flex; width: 100%; justify-content: space-around; margin: 20px 0">
        <button onclick="removeItem(${id})" class="yes">Đồng ý</button>
        <button class="no">trở lại</button>
    </div>
    `
    $('.no').onclick = () => {
        $('.ask').classList.remove('ask--active')
    }
}

function removeItem(id) {
    items.remove(id)
    render(0)
    showSuccessRemoveItem()
    var html = itemsApi.map(item => `
            <li class="admin-right-list__item">
                <img class="admin-right-img" src="${item.img}" atl="loi anh"/>
                <p class="admin-right-name">${item.name}</p>
                <p class="admin-right-price">${item.price >= 1000 ?
            String(item.price).slice(0, String(item.price).length - 3) + '.' + String(item.price).slice(String(item.price).length - 3, String(item.price).length) :
            item.price}.000₫</p>
                <button onclick="showAsk(${item.id})" class="remove">&times;</button>
            </li>`).join('')
    $('.admin-right-list').innerHTML = html
    $('.ask').classList.remove('ask--active')
}

$$('.subadmin-list_items').forEach(item => {
    item.onclick = function () {
        if (this.innerText == 'Xóa sản phẩm') {
            renderRemoveItems()
        } else if (this.innerText == 'Thêm sản phẩm') {
            $('.admin-right-list').innerHTML = `
            <li class="admin-right-list__item" style="display: block;">
                <input type="file" class="input-img" accept="image/png, image/jpeg" />
                <img src=""/ class="preview-img">
                <p class="error-input-name" style="text-align: center;"></p>
                <div style="display: flex; justify-content: space-around; margin: 20px 0;">
                    <div>
                        <label class="label-input" for="input-name">Tên sản phẩm</label>
                        <input id="input-name" type="text" class="input-name" placeholder="Nhập tên sản phẩm"/>
                        <p class="error-input-name"></p>
                    </div>
                    <div>
                        <label class="label-input" for="input-price">Giá sản phẩm</label>
                        <input id="input-price" type="text" class="input-price" maxlength="13" placeholder="1 = 1000đ"/>
                        <p class="error-input-name" style="text-align: center;"></p>
                    </div>
                </div>
                <div style="display: flex; justify-content: space-around; margin: 20px 0;">
                    <div>
                        <label class="label-input" for="input-content1">Chất liệu sản phẩm</label>
                        <input id="input-content1" type="text" class="input-name" placeholder="Nhập chất liệu sản phẩm"/>
                    </div>
                    <div>
                        <label class="label-input" for="input-content2">Dáng sản phẩm</label>
                        <input id="input-content2" type="text" class="input-name" placeholder="Nhập dáng sản phẩm"/>
                    </div>
                </div>
                <button class="add-list-item">Thêm sản phẩm</button>
            </li>`

            $('.input-price').oninput = function () {
                this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
                $$('.error-input-name')[2].innerText = ''
            }

            $('.input-img').onchange = function () {
                var file = URL.createObjectURL(this.files[0])
                $('.preview-img').src = file
                $$('.error-input-name')[0].innerText = ''
            }

            $('.input-name').onblur = function () {
                itemsApi.forEach(item => {
                    if (item.name == $('.input-name').value) {
                        $$('.error-input-name')[1].innerText = 'Tên sản phẩm đã tồn tại'
                    }
                })

                if (this.value == '') {
                    $$('.error-input-name')[1].innerText = 'Chưa nhập tên sản phẩm'
                }
            }

            $('.input-price').onblur = function () {
                if (this.value == '' || this.value == 0) {
                    $$('.error-input-name')[2].innerText = 'Chưa nhập giá'
                }
            }

            $('.input-name').oninput = function () {
                $$('.error-input-name')[1].innerText = ''
            }

            $('.add-list-item').onclick = function () {
                var up = true
                var max = 0
                itemsApi.forEach(item => {
                    if (item.id > max) {
                        max = item.id
                    }
                })

                var data = {
                    id: max + 1,
                    img: this.parentElement.querySelector('.preview-img').src,
                    name: this.parentElement.querySelector('.input-name').value,
                    price: this.parentElement.querySelector('.input-price').value,
                    detail: {
                        cl: this.parentElement.parentElement.querySelector('#input-content1').value,
                        d: this.parentElement.parentElement.querySelector('#input-content2').value,
                    }
                }

                if ((this.parentElement.querySelector('.preview-img').src).indexOf('blob') == -1) {
                    $$('.error-input-name')[0].innerText = 'Chưa chọn ảnh'
                    up = false
                }

                if (this.parentElement.querySelector('.input-name').value == '') {
                    $$('.error-input-name')[1].innerText = 'Chưa nhập tên sản phẩm'
                    up = false
                }

                itemsApi.forEach(item => {
                    if (item.name == $('.input-name').value) {
                        $$('.error-input-name')[1].innerText = 'Tên sản phẩm đã tồn tại'
                        up = false
                    }
                })

                if (this.parentElement.querySelector('.input-price').value == 0 || this.parentElement.querySelector('.input-price').value == '') {
                    $$('.error-input-name')[2].innerText = 'Chưa nhập giá'
                    up = false
                }

                if (up) {
                    this.parentElement.querySelector('.preview-img').src = ''
                    this.parentElement.querySelector('.input-name').value = ''
                    this.parentElement.querySelector('.input-price').value = ''
                    $('.input-img').value = null
                    items.set(data)
                    showSuccessAddItem()
                    render(0)
                }
            }
        } else if (this.innerText == 'Sửa sản phẩm') {
            renderEditItems()
        } else if (this.innerText == 'Tất cả đơn hàng') {
            renderOrderItemsAll()
        } else if (this.innerText == 'Đơn hàng chưa duyệt') {
            renderOrderItemsApproved()
        } else if (this.innerText == 'Đơn hàng đã duyệt') {
            renderOrderItemsApproved(1)
        } else if (this.innerText == 'Tất cả') {
            renderStatistical()
        } else if (this.innerText == 'Áo khoác') {
            renderStatistical(this.innerText)
        } else if (this.innerText == 'Áo len') {
            renderStatistical(this.innerText)
        } else if (this.innerText == 'Áo hoodie') {
            renderStatistical(this.innerText)
        } else if (this.innerText == 'Áo thun các loại') {
            renderStatistical(this.innerText)
        }
    }
})

// thống kê
function renderStatistical(classify = undefined) {
    $('.admin-right-list').innerHTML =
        `<li class="admin-right-list__item" style="border: 0">
        <span class="label-statistical">Ngày:</span>
        <input class="input-statistical" id="to-day" type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" maxlength="2" placeholder="nhập ngày bắt đầu tìm"/>
        <span class="label-statistical">Tháng:</span>
        <input class="input-statistical" id="to-month" type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" maxlength="2" placeholder="nhập tháng bắt đầu tìm"/>
        <span class="label-statistical">Năm:</span>
        <input class="input-statistical" id="to-year" type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" maxlength="4" placeholder="nhập năm bắt đầu tìm" value="2022"/>
    </li>
    <li class="admin-right-list__item" style="border: 0">
        <span class="label-statistical">Ngày:</span>
        <input class="input-statistical" id="from-day" type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" maxlength="2" placeholder="nhập ngày kết thúc tìm"/>
        <span class="label-statistical">Tháng:</span>
        <input class="input-statistical" id="from-month" type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" maxlength="2" placeholder="nhập tháng kết thúc tìm"/>
        <span class="label-statistical">Năm:</span>
        <input class="input-statistical" id="from-year" type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" maxlength="4" placeholder="nhập năm kết thúc tìm"/ value="2022">
    </li>
    <li class="admin-right-list__item" style="border: 0">
        <button class="search-Statistical">Tìm kiếm</button>
    </li>
    <li class="admin-right-list__item" style="border: 0; flex-direction: column;">
        
    </li>`

    $$('.input-statistical').forEach(input => {
        input.oninput = function () {
            this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
        }
    })

    $$('.input-statistical').forEach((input, idx) => {
        input.onblur = function () {
            if (idx == 0 || idx == 3) {
                if (this.value > 31 || this.value == 0) {
                    this.value = 1
                }
            }

            if (idx == 1 || idx == 4) {
                if (this.value > 12 || this.value == 0) {
                    this.value = 1
                }
            }
        }
    })

    $('.search-Statistical').onclick = function () {
        var total = 0
        var quantity = 0
        var maxItem
        var max = 0
        orderItemAllApi.forEach(order => {
            order.order.forEach(orderitem => {
                var days = order.day.split('/')
                if (Number($('#to-day').value) <= Number($('#from-day').value) && Number($('#to-month').value) <= Number($('#from-month').value)) {
                    if (order.approved) {
                        if (classify == undefined) {
                            if (Number(days[0]) >= Number($('#to-day').value) && Number(days[0]) <= Number($('#from-day').value) &&
                                Number(days[1]) >= Number($('#to-month').value) && Number(days[1]) <= Number($('#from-month').value)) {
                                total += orderitem.price
                                quantity += orderitem.quantity
                                if (max < orderitem.quantity) {
                                    maxItem = orderitem.name
                                }
                            } else if (Number(days[1]) >= Number($('#to-month').value) && Number(days[1]) <= Number($('#from-month').value)) {
                                total += orderitem.price
                                quantity += orderitem.quantity
                                if (max < orderitem.quantity) {
                                    maxItem = orderitem.name
                                }
                            } else if (Number(days[0]) >= Number($('#to-day').value) && Number(days[0]) <= Number($('#from-day').value)) {
                                total += orderitem.price
                                quantity += orderitem.quantity
                                if (max < orderitem.quantity) {
                                    maxItem = orderitem.name
                                }
                            }
                        } else {
                            itemsApi.forEach(item => {
                                if (item.name == orderitem.name && item.classify == classify) {
                                    if (Number(days[0]) >= Number($('#to-day').value) && Number(days[0]) <= Number($('#from-day').value) &&
                                        Number(days[1]) >= Number($('#to-month').value) && Number(days[1]) <= Number($('#from-month').value)) {
                                        total += orderitem.price
                                        quantity += orderitem.quantity
                                        if (max < orderitem.quantity) {
                                            maxItem = orderitem.name
                                        }
                                    } else if (Number(days[1]) >= Number($('#to-month').value) && Number(days[1]) <= Number($('#from-month').value)) {
                                        total += orderitem.price
                                        quantity += orderitem.quantity
                                        if (max < orderitem.quantity) {
                                            maxItem = orderitem.name
                                        }
                                    } else if (Number(days[0]) >= Number($('#to-day').value) && Number(days[0]) <= Number($('#from-day').value)) {
                                        total += orderitem.price
                                        quantity += orderitem.quantity
                                        if (max < orderitem.quantity) {
                                            maxItem = orderitem.name
                                        }
                                    }
                                }
                            })
                        }
                    }
                }
            })
        })
        $$('.admin-right-list__item')[3].innerHTML =
            `<p class="label-statistical">Tổng số sản phẩm bán ra: <span style="color: #2f86eb; font-size: 2.5rem">${quantity}</span> cái</p>
        <p class="label-statistical">Tổng số tiền thu đươc: <span style="color: #f33a58; font-size: 2.5rem">${total >= 1000 ? String(total).slice(0, String(total).length - 3) + '.' + String(total).slice(String(total).length - 3, String(total).length) : total}.000₫</span></p>
        <p class="label-statistical">Sản phẩm bán nhiều nhất: ${maxItem || 'Không có'}</p>`
    }
}

// chinh sua san sham
function showEdit(id) {
    var idx
    itemsApi.forEach(item => {
        if (item.id == id) {
            idx = item
        }
    })
    $('.ask').classList.add('ask--active')
    $('.ask-container').innerHTML = `
    <p class="ask-content">Sửa sản phẩm</p>
    <li class="admin-right-list__item" style="display: block; border: 0;">
        <input type="file" class="input-img" accept="image/png, image/jpeg" />
        <img src="${idx.img}"/ class="preview-img">
        <p class="error-input-name" style="text-align: center;"></p>
        <div style="margin: 0 20px">
            <label class="label-input" for="input-name">Tên sản phẩm</label>
            <input id="input-name" type="text" class="input-name" placeholder="Nhận tên sản phẩm" value="${idx.name}"/>
            <p class="error-input-name"></p>
        </div>
        <div style="margin: 0 20px">
            <label class="label-input" for="input-price">Giá sản phẩm</label>
            <input id="input-price" type="text" class="input-price" maxlength="13" placeholder="1 = 1000đ" value="${idx.price}"/>
            <p class="error-input-name" style="text-align: center;"></p>
        </div>
        <div style="margin: 0 20px">
            <label class="label-input" for="input-content1">Chất liệu sản phẩm</label>
            <input id="input-content1" type="text" class="input-name" placeholder="Nhập chất liệu sản phẩm" value="${idx.detail.cl}"/>
        </div>
        <div style="margin: 0 20px">
            <label class="label-input" for="input-content2">Dáng sản phẩm</label>
            <input id="input-content2" type="text" class="input-name" placeholder="Nhập Dáng sản phẩm" value="${idx.detail.d}"/>
        </div>
    </li>
    <div style="display: flex; width: 100%; justify-content: space-around; margin: 20px 0">
        <button data-id="${id}" class="save">Lưu</button>
        <button class="no">trở lại</button>
    </div>
    `
    $('.no').onclick = () => {
        $('.ask').classList.remove('ask--active')
    }

    $('.input-price').onclick = function () {
        this.select()
    }

    $('.input-name').onclick = function () {
        this.select()
    }

    $('.input-price').oninput = function () {
        this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }

    $('.input-img').onchange = function () {
        var file = URL.createObjectURL(this.files[0])
        $('.preview-img').src = file
    }

    $('.input-name').onblur = function () {
        itemsApi.forEach(item => {
            if (item.name == $('.input-name').value) {
                $$('.error-input-name')[1].innerText = 'Tên sản phẩm đã tồn tại'
            }
        })

        if (this.value == '') {
            $$('.error-input-name')[1].innerText = 'Chưa nhập tên sản phẩm'
        }
    }

    $('.input-price').onblur = function () {
        if (this.value == '' || this.value == 0) {
            $$('.error-input-name')[2].innerText = 'Chưa nhập giá'
        }
    }

    $('.input-name').oninput = function () {
        $$('.error-input-name')[1].innerText = ''
    }

    $('.save').onclick = function () {
        var edit = true

        var data = {
            id: id,
            img: this.parentElement.parentElement.querySelector('.preview-img').src,
            name: this.parentElement.parentElement.querySelector('.input-name').value,
            price: Number(this.parentElement.parentElement.querySelector('.input-price').value),
            detail: {
                cl: this.parentElement.parentElement.querySelector('#input-content1').value,
                d: this.parentElement.parentElement.querySelector('#input-content2').value
            }
        }

        if (this.parentElement.parentElement.querySelector('.input-name').value == '') {
            $$('.error-input-name')[1].innerText = 'Chưa nhập tên sản phẩm'
            edit = false
        }

        itemsApi.forEach(item => {
            if (item.name == $('.input-name').value && item.id != id) {
                $$('.error-input-name')[1].innerText = 'Tên sản phẩm đã tồn tại'
                edit = false
            }
        })

        if (this.parentElement.parentElement.querySelector('.input-price').value == 0 || this.parentElement.parentElement.querySelector('.input-price').value == '') {
            $$('.error-input-name')[2].innerText = 'Chưa nhập giá'
            edit = false
        }

        if (edit) {
            items.edit(data)
            showSuccessEditItem()
            render(0)
            renderEditItems()
            $('.ask').classList.remove('ask--active')
        }
    }
}

// renderSaleItem
function renderSaleItems() {
    var html = saleItemsApi.map(item =>
        `<li class="container-item-selling__list-item">
            <img src="${item.img}" alt="" class="container-item-selling__list-item-img item-sale">
            <div class="container-item-wrap">
                <p class="container-item-wrap__name">${item.name}</p>
                <div style="display: flex; width: 100%; justify-content: center;">
                    <span style="font-size: 1.4rem; margin-right: 8px; text-decoration: line-through;">${item.priceOld >= 1000 ? String(item.priceOld).slice(0, String(item.priceOld).length - 3) + '.' + String(item.priceOld).slice(String(item.priceOld).length - 3, String(item.priceOld).length) : item.priceOld}.000₫</span>
                    <p class="container-item-wrap__price">${item.price >= 1000 ? String(item.price).slice(0, String(item.price).length - 3) + '.' + String(item.price).slice(String(item.price).length - 3, String(item.price).length) : item.price}.000₫</p>
                </div>
            </div>
            <div class="btn-wrap">
                <button class="buy">Mua ngay</button>
                <button class="cart-add">
                    <i class="fa-solid fa-cart-plus"></i>
                    Thêm vào giỏ hàng
                </button> 
            </div>
        </li>`).join('')
    $$('.container-item-selling__list')[1].innerHTML = html
}
renderSaleItems()

// render san pham
var sort = undefined
var buy = false
function render(n, sreachItem = undefined, classify = undefined, to = undefined, from = undefined) {
    var indexHTML = itemsApi
    if (sreachItem != undefined) {
        var html1 = []
        indexHTML.forEach(item => {
            if (((item.name).toLowerCase()).indexOf(sreachItem.toLowerCase()) != -1) {
                html1.push(item)
            }
        })
        indexHTML = html1
    }

    if (classify != undefined) {
        var html2 = []
        indexHTML.forEach(item => {
            if (item.classify == classify) {
                html2.push(item)
            }
        })
        indexHTML = html2
    }

    if (to != undefined && from != undefined) {
        var html3 = []
        indexHTML.forEach(item => {
            if (item.price * 1000 >= to && item.price * 1000 <= from) {
                html3.push(item)
            }
        })
        indexHTML = html3
    }

    if (sort == true) {
        var html1 = []
        for (var i = 0; i < indexHTML.length; i++) {
            for (var j = i + 1; j < indexHTML.length; j++) {
                if (indexHTML[i].price > indexHTML[j].price) {
                    var temp = indexHTML[j]
                    indexHTML[j] = indexHTML[i]
                    indexHTML[i] = temp
                }
            }
            html1.push(indexHTML[i])
        }
        indexHTML = html1
    } else if (sort == false) {
        var html1 = []
        for (var i = 0; i < indexHTML.length; i++) {
            for (var j = i + 1; j < indexHTML.length; j++) {
                if (indexHTML[i].price < indexHTML[j].price) {
                    var temp = indexHTML[j]
                    indexHTML[j] = indexHTML[i]
                    indexHTML[i] = temp
                }
            }
            html1.push(indexHTML[i])
        }
        indexHTML = html1
    }
    var html = ''
    var idx = 0
    for (var i = n * 4; i < indexHTML.length; i++) {
        if (idx < 4) {
            var s = String(indexHTML[i].price)
            var PriceS = s.slice(0, s.length - 3) + '.' + s.slice(s.length - 3, s.length)
            html = html +
                `<li style="width: calc(22% + 6px); animation: fadebottom linear 0.5s;" class="container-item-selling__list-item">
                        <img src="${indexHTML[i].img}" alt="" class="container-item-selling__list-item-img">
                        <div class="btn-wrap">
                            <button class="buy">Mua ngay</button>
                            <button class="cart-add">
                                <i class="fa-solid fa-cart-plus"></i>
                                Thêm vào giỏ hàng
                            </button> 
                        </div>

                        <div class="container-item-wrap">
                            <p class="container-item-wrap__name">${indexHTML[i].name}</p>
                            <p class="container-item-wrap__price">${indexHTML[i].price >= 1000 ? PriceS : indexHTML[i].price}.000₫</p>
                        </div>
                    </li>`
            idx += 1
        }
    }

    if (html == '') {
        $('.error-sreach').innerText = 'Không tìm được sản phẩm'
    } else {
        $('.container-item-selling__list').innerHTML = html
        renderGagination(indexHTML, sreachItem, classify, to, from)
    }

    $$('.cart-add').forEach((item, idx) => {
        item.onclick = function (e) {
            if (buy) {
                var trung = 0
                if (idx >= 4) {
                    saleItemsApi.forEach(item => {
                        if (this.parentElement.parentElement.querySelector('.container-item-wrap__name').innerText == item.name) {
                            accountApi[accountActive].cartList.forEach(item => {
                                if (item.name == this.parentElement.parentElement.querySelector('.container-item-wrap__name').innerText) {
                                    trung = 1
                                }
                            })

                            if (trung == 0) {
                                accountApi[accountActive].cartList.push({
                                    img: item.img,
                                    name: item.name,
                                    price: item.price,
                                    quantity: 1,
                                    approved: false,
                                })
                                save()
                                renderCart()
                                showCartToast()
                            } else {
                                showCartAgainToast()
                            }
                        }
                    })
                } else {
                    var trung = 0
                    itemsApi.forEach(item => {
                        if (this.parentElement.parentElement.querySelector('.container-item-wrap__name').innerText == item.name) {
                            accountApi[accountActive].cartList.forEach(item => {
                                if (item.name == this.parentElement.parentElement.querySelector('.container-item-wrap__name').innerText) {
                                    trung = 1
                                }
                            })
                            if (trung == 0) {
                                accountApi[accountActive].cartList.push({
                                    img: item.img,
                                    name: item.name,
                                    price: item.price,
                                    quantity: 1,
                                    approved: false,
                                })
                                save()
                                renderCart()
                                showCartToast()
                            } else {
                                showCartAgainToast()
                            }
                        }
                    })
                }
            } else {
                $('.login').click()
            }
            e.stopPropagation()
        }
    })

    $$('.buy').forEach((item, idx) => {
        item.onclick = function (e) {
            if (buy) {
                if (idx <= 3) {
                    var trung = 0
                    itemsApi.forEach(item => {
                        if (item.name == this.parentElement.parentElement.querySelector('.container-item-wrap__name').innerText) {
                            accountApi[accountActive].cartList.forEach(item => {
                                if (item.name == this.parentElement.parentElement.querySelector('.container-item-wrap__name').innerText) {
                                    trung = 1
                                    item.quantity += 1
                                }
                            })

                            if (trung == 0) {
                                accountApi[accountActive].cartList.push({
                                    img: item.img,
                                    name: item.name,
                                    price: item.price,
                                    quantity: 1,
                                    approved: false,

                                })
                            }
                            save()
                            renderCart()
                            showSuccessToast()
                            $('.heading-wrap-right__icon').click()
                        }
                    })
                } else {
                    var trung = 0
                    accountApi[accountActive].cartList.forEach(item => {
                        if (item.name == this.parentElement.parentElement.querySelector('.container-item-wrap__name').innerText) {
                            trung = 1
                            item.quantity += 1
                        }
                    })
                    if (trung == 0) {
                        accountApi[accountActive].cartList.push({
                            img: (item.parentElement.parentElement.querySelector('.container-item-selling__list-item-img')).attributes[0].value,
                            name: item.parentElement.parentElement.querySelector('.container-item-wrap__name').innerText,
                            price: Number((item.parentElement.parentElement.querySelector('.container-item-wrap__price').innerText).split('.000₫').join('')),
                            quantity: 1,
                            approved: false,
                        })
                    }
                    save()
                    renderCart()
                    showSuccessToast()
                    $('.heading-wrap-right__icon').click()
                }
            } else {
                $('.login').click()
            }
            e.stopPropagation()
        }
    })

    $$('.container-item-selling__list-item').forEach(item => {
        item.onclick = () => {
            $('.showcart').classList.add('showcart--active')
            $('.overlay').classList.add('overlay--active')
        }
    })

    $$('.container-item-selling__list-item').forEach((item, index) => {
        item.onclick = function () {
            if (index < 4) {
                var idx
                itemsApi.forEach(item => {
                    if (this.querySelector('.container-item-wrap__name').innerText == item.name) {
                        idx = item
                    }
                })
                renderDetails(idx)
                $('.showcart-wrap').classList.add('showcart--active')
                $('.showcart').classList.add('showcart--active')
            } else {
                var idx
                saleItemsApi.forEach(item => {
                    if (this.querySelector('.container-item-wrap__name').innerText == item.name) {
                        idx = item
                    }
                })
                renderDetails(idx)
                $('.showcart-wrap').classList.add('showcart--active')
                $('.showcart').classList.add('showcart--active')
            }
        }
    })
}

render(0)
// tim kiem san pham
const sreach = $('.heading-wrap-container__input')

sreach.onkeydown = function (e) {
    if (e.which == 13) {
        var to = $('#to').value
        var from = $('#from').value
        if (to == 0 || to == '') {
            to = undefined
        }
        if (from == 0 || from == '') {
            from = undefined
        }
        render(0, this.value, undefined, to, from)
        $('.advanced-search').classList.remove('search--active')
        if ($('.error-sreach').innerText == '') {
            $$('.header-footer__list-item')[7].click()
        }
        to = ''
        from = ''
    }
}

sreach.oninput = () => {
    $('.error-sreach').innerText = ''
}

$('.heading-wrap-container__btn').onclick = () => {
    var to = $('#to').value
    var from = $('#from').value
    var classify
    $$('.classify-radio').forEach(item => {
        if (item.checked) {
            classify = item.parentElement.innerText
            if (item.parentElement.innerText == 'Tất cả') {
                classify = undefined
            }
        }
    })
    if (to == 0 || to == '') {
        to = undefined
    }

    if (from == 0 || from == '') {
        from = undefined
    }

    render(0, sreach.value, classify, to, from)
    $('.advanced-search').classList.remove('search-active')
    if ($('.error-sreach').innerText == '') {
        $$('.header-footer__list-item')[7].click()
    }
}
// load trang
window.onload = function (e) {
    var address = (location.href).split('?')[1]
    if (address != undefined) {
        if (address.includes('#')) {
            address = address.split('#')[0]
        }
    }

    if (address == '%C3%A1o-kho%C3%A1c') {
        $$('nav-item').forEach(item => {
            item.querySelector('a').classList.remove('class--active')
            console.log(item.querySelector('a'))
        })
        $$('.nav-item')[1].querySelector('a').classList.add('class--active')
        render(0, undefined, 'Áo khoác')
        $$('.header-footer__list-item')[7].click()

    } else if (address == '%C3%A1o-len') {
        $$('nav-item').forEach(item => {
            item.querySelector('a').classList.remove('class--active')
        })
        $$('.nav-item')[2].querySelector('a').classList.add('class--active')
        render(0, undefined, 'Áo len')
        $$('.header-footer__list-item')[7].click()

    } else if (address == '%C3%A1o-hoodie') {
        $$('nav-item').forEach(item => {
            item.querySelector('a').classList.remove('class--active')
        })
        $$('.nav-item')[3].querySelector('a').classList.add('class--active')
        render(0, undefined, 'Áo hoodie')
        $$('.header-footer__list-item')[7].click()

    } else if (address == '%C3%A1o-thun-c%C3%A1c-lo%E1%BA%A1i') {
        $$('nav-item').forEach(item => {
            item.querySelector('a').classList.remove('class--active')
        })
        $$('.nav-item')[4].querySelector('a').classList.add('class--active')
        render(0, undefined, 'Áo thun các loại')
        $$('.header-footer__list-item')[7].click()
    } else {
        $$('.nav-item')[0].querySelector('a').classList.add('class--active')
    }
}
// tim kiem san pham nâng cao
$('.heading-wrap-container__input').onclick = (e) => {
    $('.advanced-search').classList.add('search--active')
    e.stopPropagation()
}

$('.advanced-search').onclick = (e) => {
    $('.advanced-search').classList.add('search--active')
    e.stopPropagation()
}

document.body.onclick = () => {
    $('.advanced-search').classList.remove('search--active')
}

$('.down').onclick = () => {
    sort = false
}

$('.up').onclick = () => {
    sort = true
}

$('.defaut').onclick = () => {
    sort = undefined
}

$('#to').onclick = function () {
    this.select()
}

$('#from').onclick = function () {
    this.select()
}
// click nut trang
function gagina(n, searchItem = undefined, classify = undefined, to = undefined, from = undefined) {
    render(n, searchItem, classify, to, from)
    const gagi = $$('.pagination__item-btn')
    for (var i = 0; i < gagi.length; i++) {
        if (i == n) {
            gagi[i].classList.add('btn--active')
        } else {
            gagi[i].classList.remove('btn--active')
        }
    }
}

// render nut trang
function renderGagination(indexHTML, sreachItem = undefined, classify = undefined, to = undefined, from = undefined) {
    var gaginations = Math.ceil(indexHTML.length / 4)
    var gagination = ''
    for (var i = 0; i < gaginations; i++) {
        if (i == 0) {
            gagination = gagination +
                `<li class="pagination__item">
                <button onclick="gagina(0,${sreachItem != undefined && `'${sreachItem}'` || undefined}, ${classify != undefined && `'${classify}'` || undefined} ${to != undefined && `,'${to}'` || ''} ${from != undefined && `,'${from}'` || ''})" class="pagination__item-btn btn--active">1</button>
            </li>`
        } else {
            gagination = gagination +
                `<li class="pagination__item">
                <button onclick="gagina(${i},${sreachItem != undefined && `'${sreachItem}'` || undefined}, ${classify != undefined && `'${classify}'` || undefined} ${to != undefined && `,'${to}'` || ''} ${from != undefined && `,'${from}'` || ''})" class="pagination__item-btn">${i + 1}</button>
            </li>`
        }
    }
    $('.gagination').innerHTML = gagination
}

// render cart

function renderCart() {
    var html = accountApi[accountActive].cartList.map(cart =>
        `<li class="cart-item">
        <div style="background: url(${cart.img}) top / cover no-repeat;" class="cart-img"></div>
        <div class="cart-item__right">
            <p class="item-name">${cart.name}</p>
            <div class="cart-item__right-wrap">
                <p class="item-price">${cart.price >= 1000 ? String(cart.price).slice(0, String(cart.price).length - 3) + '.' + String(cart.price).slice(String(cart.price).length - 3, String(cart.price).length) : cart.price}.000₫</p>
                <i class="fa-solid fa-minus minus"></i>
                <input class="quantity" type="text" maxlength="4" value="${cart.quantity}">
                <i class="fa-solid fa-plus plus"></i>
                <div class="remove">&times;</div>
            </div>
        </div>
    </li>`).join('')
    $('.cart-list').innerHTML = html == '' ? 'Hiện chưa có sản phẩm' : html

    $$('.quantity').forEach(item => {
        item.oninput = function () {
            this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
        }
    })
    total()
    if (accountApi[accountActive].cartList.length > 0) {
        $('.cart-quantity').style.display = 'block'
        $('.cart-quantity-fixed').style.display = 'block'
    } else {
        $('.cart-quantity').style.display = 'none'
        $('.cart-quantity-fixed').style.display = 'none'
    }
    $('.cart-quantity').innerText = accountApi[accountActive].cartList.length
    $('.cart-quantity-fixed').innerText = accountApi[accountActive].cartList.length

    // xoa cart items
    $$('.remove').forEach((item, idx) => {
        item.onclick = function () {
            accountApi[accountActive].cartList.splice(idx, 1)
            renderCart()
            save()
        }
    })

    // tang quantity
    $$('.plus').forEach((item, idx) => {
        item.onclick = function () {
            if (Number($$('.quantity')[idx].value) <= 9999) {
                var quantity = Number($$('.quantity')[idx].value)
                quantity += 1
                $$('.quantity')[idx].value = quantity
                accountApi[accountActive].cartList[idx].quantity += 1
                save()
                total()
            }
        }
    })

    // giảm quantity
    $$('.minus').forEach((item, idx) => {
        item.onclick = function () {
            if (Number($$('.quantity')[idx].value) > 1) {
                var quantity = Number($$('.quantity')[idx].value)
                quantity -= 1
                accountApi[accountActive].cartList[idx].quantity -= 1
                $$('.quantity')[idx].value = quantity
                save()
                total()
            }
        }
    })

    // set lai quantity
    $$('.quantity').forEach((item, idx) => {
        item.onblur = function () {
            if (this.value <= 0) {
                this.value = 1
                accountApi[accountActive].cartList[idx].quantity = 1
                total()
            }
            accountApi[accountActive].cartList[idx].quantity = Number(this.value)
            total()
            save()
        }
    })
}

// render details
function renderDetails(idx) {
    var s = String(idx.price)
    var PriceS = s.slice(0, s.length - 3) + '.' + s.slice(s.length - 3, s.length)
    $('.showcart').innerHTML =
        `<div class="product-card">
                    
    <div class="badge">Hot
    </div>
    <button class="close_showcart" id="close_cart"> &times;
    </button>
    <div class="product-tumb">
        <img src="${idx.img}" alt="">
    </div>
    <div class="product-details">
        <h1 class="details-name" style="margin-bottom: 10px;">${idx.name}</h1>
    
        <h2>Mô tả</h2>
        <ul style="list-style: none; font-size: 1.6rem; margin: 20px 0;">
            <li style="margin: 8px 0;">Chất liệu: ${idx.detail.cl}</li>
            <li style="margin: 8px 0;">Dáng: ${idx.detail.d}</li>
            <li style="margin: 8px 0;">Đặc tính: Mềm mại, co giãn tốt, có độ thấm hút mồ hôi và hút ẩm cao, thoáng mát</li>
            <li style="margin: 8px 0;">Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống</li>
        </ul>
        <div class="product-bottom-details">
            <div class="product-price">${idx.price >= 1000 ? PriceS : idx.price}.000₫</div>
            <i class="fa-solid fa-minus minus_1"></i>
            <input class="quantity_1" type="text" maxlength="4" value="1">
            <i class="fa-solid fa-plus plus_1"></i>
            <div class="product-links">
        </div>
        <div class="link_b">
            <button class="buy1">Mua ngay</button>
            <button class="cart-add-detail">
            <i class="fa-solid fa-cart-plus"></i>
            Thêm vào giỏ hàng
            </button>
        </div>
        </div>
    </div>`

    $('.quantity_1').oninput = function () {
        this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }

    $('.quantity_1').onblur = function () {
        if (this.value == '' || this.value == 0) {
            this.value = 1
        }
    }

    $('.plus_1').onclick = function () {
        var cong = Number($('.quantity_1').value)
        cong = cong + 1
        $('.quantity_1').value = cong
    }

    $('.minus_1').onclick = function () {
        if (Number($('.quantity_1').value) > 1) {
            var tru = Number($('.quantity_1').value)
            tru = tru - 1
            $('.quantity_1').value = tru
        }
    }

    $('.close_showcart').onclick = function (e) {
        $('.showcart-wrap').classList.remove('showcart--active')
    }

    $$('.buy1').forEach(item => {
        item.onclick = function (e) {
            var _this = this
            if (buy) {
                itemsApi.forEach(item1 => {
                    if (_this.parentElement.parentElement.parentElement.querySelector('.details-name').innerText == item1.name) {
                        var trung = 0
                        accountApi[accountActive].cartList.forEach(item => {
                            if (item.name == _this.parentElement.parentElement.parentElement.querySelector('.details-name').innerText) {
                                trung = 1
                                item.quantity += Number(_this.parentElement.parentElement.querySelector('.quantity_1').value)
                            }
                        })

                        if (trung == 0) {
                            accountApi[accountActive].cartList.push({
                                img: item1.img,
                                name: item1.name,
                                price: item1.price,
                                quantity: Number(_this.parentElement.parentElement.querySelector('.quantity_1').value),
                                approved: false,
                            })
                        }
                        save()
                        renderCart()
                        showSuccessToast()
                        $('.showcart-wrap').classList.remove('showcart--active')
                        $('.heading-wrap-right__icon').click()
                    }
                })

                saleItemsApi.forEach(item1 => {
                    if (_this.parentElement.parentElement.parentElement.querySelector('.details-name').innerText == item1.name) {
                        var trung = 0
                        accountApi[accountActive].cartList.forEach(item => {
                            if (item.name == _this.parentElement.parentElement.parentElement.querySelector('.details-name').innerText) {
                                trung = 1
                                item.quantity += Number(_this.parentElement.parentElement.querySelector('.quantity_1').value)
                            }
                        })
                        if (trung == 0) {
                            accountApi[accountActive].cartList.push({
                                img: item1.img,
                                name: item1.name,
                                price: item1.price,
                                quantity: Number(_this.parentElement.parentElement.querySelector('.quantity_1').value),
                                approved: false,
                            })
                        }

                        save()
                        renderCart()
                        showSuccessToast()
                        $('.showcart-wrap').classList.remove('showcart--active')
                        $('.heading-wrap-right__icon').click()
                    }
                })
            } else {
                $('.login').click()
            }
            e.stopPropagation()
        }
    })

    $$('.cart-add-detail').forEach(item => {
        item.onclick = function (e) {
            if (buy) {
                var trung = 0
                itemsApi.forEach(item => {
                    if (this.parentElement.parentElement.parentElement.querySelector('.details-name').innerText == item.name) {
                        accountApi[accountActive].cartList.forEach(item => {
                            if (item.name == this.parentElement.parentElement.parentElement.querySelector('.details-name').innerText) {
                                trung = 1
                            }
                        })

                        if (trung == 0) {
                            accountApi[accountActive].cartList.push({
                                img: item.img,
                                name: item.name,
                                price: item.price,
                                quantity: Number(this.parentElement.parentElement.querySelector('.quantity_1').value),
                                approved: false,
                            })
                            renderCart()
                            showCartToast()
                        } else {
                            showCartAgainToast()
                        }
                    }
                })
                var trung1 = 0
                saleItemsApi.forEach(item => {
                    if (this.parentElement.parentElement.parentElement.querySelector('.details-name').innerText == item.name) {
                        accountApi[accountActive].cartList.forEach(item => {
                            if (item.name == this.parentElement.parentElement.parentElement.querySelector('.details-name').innerText) {
                                trung1 = 1
                            }
                        })
                        if (trung1 == 0) {
                            accountApi[accountActive].cartList.push({
                                img: item.img,
                                name: item.name,
                                price: item.price,
                                quantity: Number(this.parentElement.parentElement.querySelector('.quantity_1').value),
                                approved: false,
                            })
                            renderCart()
                            showCartToast()
                        } else {
                            showCartAgainToast()
                        }
                    }
                })
                save()
            } else {
                $('.login').click()
            }
            e.stopPropagation()
        }
    })
}

$('.showcart').onclick = function (e) {
    e.stopPropagation()
}

$('.showcart-wrap').onclick = function () {
    $('.showcart-wrap').classList.remove('showcart--active')
}

// tong gia
function total() {
    var total = 0
    accountApi[accountActive].cartList.forEach(item => total += item.price * item.quantity)
    if (total > 1000) {
        var s = String(total)
        total = s.slice(0, s.length - 3) + '.' + s.slice(s.length - 3, s.length)
    }
    $('.cart-footer__price').innerText = total + '.000₫'
    if (total == 0) {
        $('.cart-footer__price').innerText = '0₫'
    }
}

// thanh toan
$('.pay').onclick = function () {
    if (accountApi[accountActive].cartList.length != 0) {
        $('.modal-pay').classList.add('modal-pay--active')
        $('#user-name').value = accountApi[accountActive].realName
        $('#sdt').value = accountApi[accountActive].phone
        $('#location').value = accountApi[accountActive].location
    }
}

$('.modal-pay').onclick = function () {
    this.classList.remove('modal-pay--active')
}

$('.container-order').onclick = function (e) {
    e.stopPropagation()
}

$('.order-close').onclick = function () {
    $('.modal-pay').classList.remove('modal-pay--active')
}

$('#user-name').onclick = function () {
    this.select()
}

function renderOrderUser() {
    var html = accountApi[accountActive].orderList.map(order =>
        `<li class="cart-item" style="border: 1px solid #999; padding: 8px">
        <div style="background: url(${order.img}) top / contain no-repeat; width: 90px; height: 90px" class="cart-img"></div>
        <div class="cart-item__right">
            <p class="item-name">${order.name}</p>
            <div class="cart-item__right-wrap">
                <p class="item-price">${order.price >= 1000 ?
            String(order.price).slice(0, String(order.price).length - 3) + '.' + String(order.price).slice(String(order.price).length - 3, String(order.price).length) :
            order.price}.000₫</p>
                <div class="order-wrap">
                    <p class="order-content">Số lượng:</p>
                    <input readonly class="quantity" type="text" maxlength="4" value="${order.quantity}" style="border: 0; font-size: 2rem;">
                </div>
                <div class="order-wrap">
                    <p class="order-content">Trạng thái:</p>
                    <p class="status" style="color: ${order.approved ? '#47d864;' : '#f33a58'}">${order.approved ? 'đã duyệt' : 'chưa duyệt'}</p>
                </div>
            </div>
        </div>
    </li>`).join('')
    $('.order-list').innerHTML = html
}

function renderSearchUser(id = undefined) {
    const sreachUser = $('.input-name-user').value

    var lists = []
    orderItemAllApi.forEach(order => {
        if (id == undefined) {
            if (((order.userName).toLowerCase()).indexOf(sreachUser.toLowerCase()) != -1) {
                lists.push(order)
            }
        } else if (id == 1) {
            if (((order.userName).toLowerCase()).indexOf(sreachUser.toLowerCase()) != -1) {
                if (!order.approved) {
                    lists.push(order)
                }
            }
        } else if (id == 2) {
            if (((order.userName).toLowerCase()).indexOf(sreachUser.toLowerCase()) != -1) {
                if (order.approved) {
                    lists.push(order)
                }
            }
        }
    })

    var html1 =
        `<li style="justify-content: center; padding: 20px 0" class="admin-right-list__item">
        <input class="input-name-user" placeholder="Nhập tên muốn tìm"/>
        <i onclick="renderSearchUser(${id})" class="input-name-user-icon fa-solid fa-magnifying-glass"></i>
    </li>`

    html1 = html1 + lists.map(order => `
        <li onclick="showDetailOrder(${order.idorder})" style="cursor: pointer; padding: 20px 0" class="admin-right-list__item">
            <p class="admin-right-name">${order.userName}</p>
            <p class="admin-right-price">${order.phone}</p>
            <p class="admin-right-name" style="line-height: 20px">${order.address}</p>
            <div class="order-wrap" style="font-size: 1.8rem">
                <p class="order-content">Trạng thái:</p>
                <p class="status" style="color: ${order.approved ? '#47d864;' : '#f33a58'}">${order.approved ? 'đã duyệt' : 'chưa duyệt'}</p>
            </div>
        </li>`).join('')
    $('.admin-right-list').innerHTML = html1.length == 0 ? '<p style="font-size: 2.5rem; width: 100%; text-align: center;">Hiện chưa có đơn hàng nào</p>' : html1
}

function renderOrderItemsAll() {
    var html1 =
        `<li style="justify-content: center; padding: 20px 0" class="admin-right-list__item">
            <input class="input-name-user" placeholder="Nhập tên muốn tìm"/>
            <i onclick="renderSearchUser()" class="input-name-user-icon fa-solid fa-magnifying-glass"></i>
        </li>`

    html1 = html1 + orderItemAllApi.map(order => `
        <li onclick="showDetailOrder(${order.idorder})" style="cursor: pointer; padding: 20px 0" class="admin-right-list__item">
            <p class="admin-right-name">${order.userName}</p>
            <p class="admin-right-price">${order.phone}</p>
            <p class="admin-right-name" style="line-height: 20px">${order.address}</p>
            <div class="order-wrap" style="font-size: 1.8rem">
                <p class="order-content">Trạng thái:</p>
                <p class="status" style="color: ${order.approved ? '#47d864;' : '#f33a58'}">${order.approved ? 'đã duyệt' : 'chưa duyệt'}</p>
            </div>
        </li>`).join('')
    $('.admin-right-list').innerHTML = html1.length == 0 ? '<p style="font-size: 2.5rem; width: 100%; text-align: center;">Hiện chưa có đơn hàng nào</p>' : html1
}

function renderOrderItemsApproved(t = undefined) {
    var lists = []
    orderItemAllApi.forEach(order => {
        if (!order.approved && t == undefined) {
            lists.push(order)
        }

        if (order.approved && t == 1) {
            lists.push(order)
        }
    })

    var html1 =
        `<li style="justify-content: center; padding: 20px 0" class="admin-right-list__item">
        <input class="input-name-user" placeholder="Nhập tên muốn tìm"/>
        <i onclick="renderSearchUser(${t == undefined ? 1 : 2})" class="input-name-user-icon fa-solid fa-magnifying-glass"></i>
        </li>`

    html1 = html1 + lists.map(order =>
        `<li onclick="showDetailOrder(${order.idorder})" style="cursor: pointer; padding: 20px 0" class="admin-right-list__item">
        <p class="admin-right-name">${order.userName}</p>
        <p class="admin-right-price">${order.phone}</p>
        <p class="admin-right-name" style="line-height: 20px">${order.address}</p>
        <div class="order-wrap" style="font-size: 1.8rem">
            <p class="order-content">Trạng thái:</p>
            <p class="status" style="color: ${order.approved ? '#47d864;' : '#f33a58'}">${order.approved ? 'đã duyệt' : 'chưa duyệt'}</p>
        </div>
    </li>`).join('')
    $('.admin-right-list').innerHTML = html1.length == 0 ? '<p style="font-size: 2.5rem; width: 100%; text-align: center;">Hiện chưa có đơn hàng nào</p>' : html1
}

function showDetailOrder(id) {
    orderItemAllApi.forEach(order => {
        if (order.idorder == id) {
            var total = 0
            order.order.forEach(orderItem => {
                total += orderItem.price * orderItem.quantity
            })
            $('.orders-container').innerHTML =
                `<li class="details-list__item">
                <div class="details-list__item-wrap">
                    <div class="wrap-header">
                        <button class="wrap-header__btn-back">&times;</button>
                    </div>
                    
                    <p class="details-list__item-wrap-buyer-name details-list__item-wrap-sp">
                        Tên người đặt:
                        <i class="fa-solid fa-user"></i>
                        ${order.userName}</p>
                    <p class="details-list__item-wrap-time details-list__item-wrap-sp">thời gian đặt: 
                        <span>
                            <i class="fa-solid fa-timer"></i>
                            ${order.time}
                        </span>
                    </p>
                    <p class="details-list__item-wrap-day details-list__item-wrap-sp">ngày đặt: 
                        <span>
                            <i class="fa-regular fa-calendar-days"></i>
                            ${order.day}
                        </span>
                    </p>
                    <p class="details-list__item-wrap-address details-list__item-wrap-sp">điện thoại:
                        <span>
                            <i class="fa-solid fa-phone"></i>
                            ${order.phone}
                        </span>
                    </p>
                    <p class="details-list__item-wrap-address details-list__item-wrap-sp">địa chỉ: 
                        <span>
                            <i class="fa-solid fa-location-dot"></i>
                            ${order.address}
                        </span>
                    </p>

                    ${order.order.map(order => `
                        <div style="font-size: 1.6rem" class="details-list__heading">
                            ${order.name}
                        </div>
                        <div class="details-list__item-wrap-quantity details-list__item-wrap-sp">Số lượng đặt: ${order.quantity}</div>
                    `).join('')}
                        
                    <div class="details-list__item-wrap-price details-list__item-wrap-sp">
                        Tổng giá: 
                        <span>${total >= 1000 ?
                    String(total).slice(0, String(total).length - 3) + '.' + String(total).slice(String(total).length - 3, String(total).length) :
                    total}.000₫</span>  
                    </div>
                    <div class="details-list__item-wrap-stasus details-list__item-wrap-sp">
                        trạng thái:
                        <div data-id=${order.idorder} class="switch ${order.approved ? 'switch--active' : ''}">
                            <div class="switch-content ${order.approved ? 'switch-content--active' : ''} style="${order.approved ? '#47d864;' : '#f33a58'}">${order.approved ? 'đã duyệt' : 'chưa duyệt'}</div>
                        </div>
                    </div>
                </div>
            </li>`
        }
    })
    $('.orders-list').classList.add('ask--active')

    $('.switch').onclick = function (e) {
        orderItemAllApi.forEach(order => {
            if (order.idorder == Number(e.target.attributes[0].value)) {
                order.order.forEach(orders => {
                    if (!orders.approved) {
                        order.approved = true;
                        saveOrder()
                        renderOrderItemsApproved()
                        e.target.querySelector('.switch-content').classList.add('switch-content--active')
                        e.target.classList.add('switch--active')
                        e.target.querySelector('.switch-content').innerText = 'đã duyệt'
                    }
                    accountApi.forEach((account, idx) => {
                        if (idx >= 1) {
                            accountApi[account.id].orderList.forEach(orderAcc => {
                                if (orderAcc.idorder == Number(e.target.attributes[0].value)) {
                                    orderAcc.approved = true;
                                    save()
                                    accountActive = account.id
                                    renderOrderUser()
                                    accountActive = undefined
                                }
                            })
                        }
                    })
                })
            }
        })
    }

    $('.wrap-header__btn-back').onclick = function () {
        $('.orders-list').classList.remove('ask--active')
    }

    $('.orders-list').onclick = function () {
        $('.orders-list').classList.remove('ask--active')
    }

    $('.orders-container').onclick = function (e) {
        e.stopPropagation()
    }
}

$('.order').onclick = function () {
    if (this.parentElement.parentElement.querySelector('#sdt').value != '' && (this.parentElement.parentElement.querySelector('#sdt').value).length == 10 &&
        this.parentElement.parentElement.querySelector('#location').value != '' &&
        this.parentElement.parentElement.querySelector('#user-name').value != '') {

        var curDate = new Date()
        var hours = curDate.getHours() <= 9 ? '0' + curDate.getHours() : curDate.getHours()
        var minutes = curDate.getMinutes() <= 9 ? '0' + curDate.getMinutes() : curDate.getMinutes()
        var seconds = curDate.getSeconds() <= 9 ? '0' + curDate.getSeconds() : curDate.getSeconds()
        var curDay = curDate.getDate()
        var curMonth = curDate.getMonth() + 1
        var curYear = curDate.getFullYear()

        orderItemAllApi.push({})
        orderItemAllApi[orderItemAllApi.length - 1].order = []
        orderItemAllApi[orderItemAllApi.length - 1].userName = this.parentElement.parentElement.querySelector('#user-name').value
        orderItemAllApi[orderItemAllApi.length - 1].phone = this.parentElement.parentElement.querySelector('#sdt').value
        orderItemAllApi[orderItemAllApi.length - 1].address = this.parentElement.parentElement.querySelector('#location').value
        orderItemAllApi[orderItemAllApi.length - 1].time = hours + ':' + minutes + ':' + seconds
        orderItemAllApi[orderItemAllApi.length - 1].day = curDay + '/' + curMonth + '/' + curYear
        orderItemAllApi[orderItemAllApi.length - 1].idorder = orderItemAllApi.length - 1
        orderItemAllApi[orderItemAllApi.length - 1].stasus = false
        for (var i = 0; i < accountApi[accountActive].cartList.length; i++) {
            accountApi[accountActive].cartList[i].idorder = orderItemAllApi.length - 1
            accountApi[accountActive].orderList.push(accountApi[accountActive].cartList[i])
            orderItemAllApi[orderItemAllApi.length - 1].order.id = orderItemAllApi.length - 1 + i
            orderItemAllApi[orderItemAllApi.length - 1].order.push(accountApi[accountActive].cartList[i])
        }

        accountApi[accountActive].phone = this.parentElement.parentElement.querySelector('#sdt').value
        accountApi[accountActive].location = this.parentElement.parentElement.querySelector('#location').value
        accountApi[accountActive].realName = this.parentElement.parentElement.querySelector('#user-name').value


        accountApi[accountActive].cartList = []
        save()
        saveOrder()
        renderCart()
        renderOrderUser()
        renderOrderItemsAll()
        $('.order-close').click()
        $('.close').click()
        showSuccessOrder()
        $('.error-order').innerText = ''
    } else {
        $('.error-order').innerText = 'Vui lòng kiểm tra lại thông tin'
    }

}

// xem san pham da dat;
function showOrderItems() {
    $('.order-items').classList.add('cart--active')
    $('.overlay').classList.add('overlay--active')
}

// gỏi hàng
$$('.heading-wrap-right__icon').forEach(item => {
    item.onclick = () => {
        $('.overlay').classList.add('overlay--active')
        $('.cart').classList.add('cart--active')
    }
})

$$('.close').forEach(item => {
    item.onclick = () => {
        $('.overlay').classList.remove('overlay--active')
        $('.cart').classList.remove('cart--active')
        $('.order-items').classList.remove('cart--active')
    }
})

$('.overlay').onclick = () => {
    $('.overlay').classList.remove('overlay--active')
    $('.cart').classList.remove('cart--active')
    $('.showcart').classList.remove('showcart--active')
    $('.order-items').classList.remove('cart--active')
}

// login 
const modal = $('.modal')
const forms = $$('.form')
const registers = $$('.register')
const logins = $$('.login')
const backs = $$('.back')
const switchs = $$('.heading-right')

// click dang ki
registers.forEach(register => {
    register.onclick = function () {
        forms.forEach(form => {
            form.classList.remove('form--active')
        })
        modal.classList.add('modal--active')
        forms[0].classList.add('form--active')
    }
})

logins.forEach(login => {
    login.onclick = function () {
        forms.forEach(form => {
            form.classList.remove('form--active')
        })
        modal.classList.add('modal--active')
        forms[1].classList.add('form--active')
    }
})

backs.forEach(back => {
    back.onclick = function () {
        modal.classList.remove('modal--active')
        forms.forEach(form => {
            form.classList.remove('form--active')
        })
    }
})

switchs.forEach(switc => {
    switc.onclick = function () {
        if (this == switchs[0]) {
            forms[0].classList.remove('form--active')
            forms[1].classList.add('form--active')
        } else {
            forms[0].classList.add('form--active')
            forms[1].classList.remove('form--active')
        }
    }
})

// toast
function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div')

        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            success: './img/success.png',
            error: './img/error.png',
            infor: './img/cart.jpg'
        };


        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
            <div class="toast__icon">
            <img class="toast__icon--img" src="${icon}">
            </div>
            <div class="toast__body">
            <p class="toast__msg">${message}</p>
            </div>
        `;
        main.appendChild(toast);
    }
}

function showSuccessToast() {
    toast({
        message: 'Mua thành công!',
        type: 'success',
        duration: 2000
    });
}

function showSuccessOrder() {
    toast({
        message: 'Đặt hàng thành công!',
        type: 'success',
        duration: 2000
    });
}

function showSuccessAddItem() {
    toast({
        message: 'Thêm sản phẩm thành công!',
        type: 'success',
        duration: 2000
    });
}

function showSuccessEditItem() {
    toast({
        message: 'Chỉnh sửa sản phẩm thành công!',
        type: 'success',
        duration: 2000
    });
}

function showSuccessRemoveItem() {
    toast({
        message: 'Xoá phẩm thành công!',
        type: 'success',
        duration: 2000
    });
}

function showCartToast() {
    toast({
        message: 'Đã thêm vào giỏ hàng!',
        type: 'infor',
        duration: 2000
    });
}

function showCartAgainToast() {
    toast({
        message: 'Sản phẩm đã có trong giỏ hàng!',
        type: 'infor',
        duration: 2000
    });
}

function createAccount() {
    toast({
        message: 'Tạo tài khoản thành công',
        type: 'success',
        duration: 2000
    });
}

// su kien cuon chuot 
document.body.onscroll = function () {
    if (document.documentElement.scrollTop >= 110) {
        $('.fixed').style = 'display: flex; height: 40px; border-bottom: 1px solid rgba(0, 0, 0, 0.1); opacity: 1;'
    } else {
        $('.fixed').style = 'display: flex; height: 0; border: 0; opacity: 0;'
    }
}

// su kien banner
var banner = 0

setInterval(function () {
    banner -= 100.2
    if (banner == -400.8) {
        banner = 0;
    }

    for (var i = 0; i < 4; i++) {
        if (i == Math.abs(banner / -100.2)) {
            $$('.choose-banner')[i].classList.add('btn--active')
        } else {
            $$('.choose-banner')[i].classList.remove('btn--active')
        }
    }

    $('.list-banner').style.marginLeft = `${banner}vw`
}, 5000)

$$('.choose-banner').forEach((choose, idx) => {
    choose.onclick = function () {
        $$('.choose-banner').forEach(item => {
            item.classList.remove('btn--active')
        })
        banner = -100.2 * idx
        $('.list-banner').style.marginLeft = `${banner}vw`
        this.classList.add('btn--active')
    }
})

// su kien nhan chuyen san pham
var animationItem = 0
setInterval(() => {
    animationItem -= 24.8
    if (animationItem <= -24.8 * 5) {
        animationItem = 0
    }
    $$('.container-item-selling__list')[1].style.marginLeft = `${animationItem}vw`
}, 8000)

$('.btn-left').onclick = function () {
    animationItem += 24.8
    if (animationItem >= 0) {
        animationItem = -24.8 * 4
    }
    $$('.container-item-selling__list')[1].style.marginLeft = `${animationItem}vw`
}

$('.btn-right').onclick = function () {
    animationItem -= 24.8
    if (animationItem <= -24.8 * 5) {
        animationItem = 0
    }
    $$('.container-item-selling__list')[1].style.marginLeft = `${animationItem}vw`
}

// show password

$('.show-password').onclick = function () {
    if (this.parentElement.querySelector('.form-control').type == 'password') {
        this.parentElement.querySelector('.form-control').type = 'text'
        $('.show-password').innerHTML = `<i class="fa-solid fa-eye"></i>`
    } else {
        this.parentElement.querySelector('.form-control').type = 'password'
        $('.show-password').innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
    }
}

// hanhler form 
function validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    var selectorRules = {}

    function validate(inputElement, rule) {

        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
        var errorMessage;

        var rules = selectorRules[rule.selector]

        for (var i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid')
        } else {
            errorElement.innerText = ''
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
        }

        return !errorMessage;
    }

    var formElement = $(options.form);
    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            options.rules.forEach(rule => {
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement, rule)
                if (!isValid) {
                    isFormValid = false;
                }
            })

            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])')
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        switch (input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = ''
                                    return values
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value)
                                break
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value
                        }
                        return values
                    }, {})
                    options.onSubmit(formValues, createAccount)
                    forms[0].classList.remove('form--active')
                    forms[1].classList.add('form--active')
                } else {
                    formElement.submit();
                }
            }
        }

        options.rules.forEach(rule => {

            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector)

            Array.from(inputElements).forEach(function (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule)
                }

                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
                    errorElement.innerText = ''
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                }
            })
        });
    }
}

validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : message || 'Trường này phải là email'
        }
    }
}

validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?=.*\d).{6,}$/;
            return regex.test(value) ? undefined : message || `Vui lòng nhập tối thiểu 6 kí tự bao gồm chữ thường, chữ hoa, số và kí tự đặc biệt`
        }
    }
}

validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}

validator.isEmailExist = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var find = accountApi.some(account => {
                return account.email == value
            })
            return !find ? undefined : message || 'Email đã tồn tại'
        }
    }
}

const js = $$('.js')
function showSettingList() {
    const settingList = $('.setting-list')
    settingList.classList.toggle('setting--active')
}

function logout() {
    $$('.js-login').forEach(item => {
        item.classList.remove('item--hidden')
    })
    buy = false
    $$('.user').forEach(item => {
        item.innerHTML = ``
    })
    removeHidden()
    accountActive = undefined
    if (accountActive == undefined) {
        $('.cart-list').innerHTML = 'Hiện chưa có sản phẩm'
    }
    $('.cart-quantity').style.display = 'none'
    $('.cart-quantity-fixed').style.display = 'none'
    $('.cart-footer__price').innerText = '0₫'
}

function addHidden() {
    js.forEach(item => {
        item.classList.add('js--hidden')
    })
    $('.modal').classList.remove('modal--active')
    $$('.form').forEach(item => {
        item.classList.remove('form--active')
    })
}

function removeHidden() {
    js.forEach(item => {
        item.classList.remove('js--hidden')
    })
    $('.container-admin').classList.remove('container-admin--active')
}

validator({
    // handler form đăng ký
    form: '#form-1',
    formGroupSelector: '.form-group',
    errorSelector: '.form-message',
    rules: [
        validator.isRequired('#name'),
        validator.isRequired('#email'),
        validator.isEmail('#email'),
        validator.isEmailExist('#email'),
        validator.minLength('#password', 6),
        validator.isRequired('#password_confirmation'),
        validator.isConfirmed('#password_confirmation', function () {
            return document.querySelector('#form-1 #password').value
        }, 'Mật khẩu nhập lại không chính xác')
    ],
    // đẩy lên locastorage
    onSubmit: function (data, toast) {
        Object.assign(data, { id: accounts.get().length, blackList: false, admin: false, cartList: [], orderList: [], realName: '', phone: '', location: '' })
        accounts.set(data)
        toast()
    }
})

// handler form đăng nhập
validator({
    form: '#form-2',
    formGroupSelector: '.form-group',
    errorSelector: '.form-message',
    rules: [
        validator.isRequired('#emailLogin'),
        validator.isEmail('#emailLogin'),
        validator.isRequired('#passwordLogin'),
    ],
    onSubmit: function (data, toast = undefined) {
        var login = false
        accountApi.forEach(account => {
            if (account.email == data.emailLogin && account.password == data.passwordLogin) {
                login = true
                if (account.id == 0) {
                    // admin
                    addHidden()
                    $$('.user')[1].innerHTML =
                        `<img style="width: 40px; border-radius: 50%;" src="./img/avata admin.jpg" alt="">
                            <p class="user-name">${account.name}</p>
                            <ul class="user-setting">
                                <li class="user-setting__item infor">Tài khoản của tôi</li>
                                <li onclick="logout()" class="user-setting__item logout">Đăng xuất</li>
                            </ul>`
                    $$('.js-login').forEach(item => {
                        item.classList.add('item--hidden')
                    })
                    $('.container-admin').classList.add('container-admin--active')
                    renderOrderItemsAll()
                } else {
                    // user
                    $$('.user').forEach(item => {
                        item.innerHTML =
                            `<img style="width: 40px; border-radius: 50%;" src="./img/avata admin.jpg" alt="">
                            <p class="user-name">${account.name}</p>
                            <ul class="user-setting">
                                <li class="user-setting__item infor">Tài khoản của tôi</li>
                                <li onclick="showOrderItems()" class="user-setting__item buy-list">Đơn mua</li>
                                <li onclick="logout()" class="user-setting__item logout">Đăng xuất</li>
                            </ul>`
                    })
                    $$('.js-login').forEach(item => {
                        item.classList.add('item--hidden')
                    })
                    buy = true
                    modal.classList.remove('modal--active')
                    accountActive = account.id
                    renderCart()
                    renderOrderUser()
                }
            }
        })

        if (!login) {
            var group = document.querySelectorAll('.form-group')
            group[5].querySelector('.form-message').innerText = 'Email hoặc mật khẩu không đúng'
        }
    }
})
document.querySelectorAll('.form-control')[4].oninput = function () {
    var group = document.querySelectorAll('.form-group')
    group[5].querySelector('.form-message').innerText = ''
}
document.querySelectorAll('.form-control')[5].oninput = function () {
    var group = document.querySelectorAll('.form-group')
    group[5].querySelector('.form-message').innerText = ''
}

// -----------------------------------------------------------------