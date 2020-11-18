
const listAccounts = [
    { id: 1, username: 'aduvip', balance: 1000000, type: 'normal' },
    { id: 2, username: 'aduvip1', balance: 500000, type: 'normal' },
    { id: 3, username: 'aduvip2', balance: 0, type: 'normal' },
    { id: 4, username: 'aduvip3', balance: 20000, type: 'normal', isActive: false },
    { id: 5, username: 'aduvip4', balance: 2500000, type: 'normal' },
    { id: 6, username: 'aduvip5', balance: 0, type: 'normal', isActive: false },
    { id: 7, username: 'aduvip6', balance: 1300000, type: 'normal' },
    { id: 8, username: 'aduvip7', balance: 2200000, type: 'normal' },
    { id: 9, username: 'aduvip8', balance: 1450000, type: 'normal', isActive: false },
    { id: 10, username: 'aduvip9', balance: 0, type: 'normal' },
    { id: 11, username: 'aduvip10', balance: 780000, type: 'normal', isActive: false },
    { id: 12, username: 'aduvip11', balance: 560000, type: 'normal' },
    { id: 13, username: 'aduvip12', balance: 0, type: 'normal', isActive: false },
    { id: 14, username: 'aduvip13', balance: 430000, type: 'normal' },
    { id: 15, username: 'aduvip14', balance: 990000, type: 'normal', isActive: false },
    { id: 16, username: 'aduvip15', balance: 10000, type: 'normal' },
];

function ShowAccounts(a){
    for(let i in a)
        console.log(a[i]);
}

// a) Viết hàm truyền vào 1 danh sách tài khoản, kiểm tra xem tài khoản nào đã nạp trên 1 triệu và set lại loại tài khoản đó thành VIP.
function changType(a){
    for(let i in a){
        if(a[i].balance > 1000000)
            a[i].type = 'VIP';
    }
}

//b) Viết hàm truyền vào 1 danh sách tài khoản, id tài khoản, số tiền để nạp tiền cho 1 tài khoản theo id đó. Kiểm tra nếu balance = 0 thì khuyến mại nạp lần đầu cho tài khoản đó 200%. Còn lại với các tài khoản khác sẽ không có khuyến mại.

function NapTien(listAccounts, id, amount){
    let check = false;
    for(let i in listAccounts){
        if(listAccounts[i].id === id){
            if(listAccounts[i].balance === 0){
                listAccounts[i].balance = amount * 2;
            }else {
                listAccounts[i].balance += amount; 
            }
            check = true;
        }
    }
    if(!check){
        console.log("Check id again!!!");
    }
}

//c) Viết hàm kiểm tra tài khoản nào có thuộc tính isActive thì set thành true sau đó in ra màn hình.
function checkIsActive(a){
    for(let i in a){
        if(a[i].isActive == false)
            a[i].isActive = true;
    }
}

function main(){
    console.log("\nSét tài khoản VIP và in ra: \n");
    changType(listAccounts);
    ShowAccounts(listAccounts);
    
    console.log("\nNạp tiền vào tài khoản và in ra \n")
    NapTien(listAccounts, 2, 50000);
    ShowAccounts(listAccounts);
    
    console.log("\nKiểm tra trạng thái hoạt động và in ra\n");
    checkIsActive(listAccounts);
    ShowAccounts(listAccounts);
}

main();