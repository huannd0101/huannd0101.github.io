
const listPersons = [
    { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
    { name: "Lê Văn Nam", age: 60, gender: "nam" },
    { name: "Trần Chiến Công", age: 8, gender: "nam" },
    { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
    { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
    { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
    { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" },
    { name: "Hà Văn Phòng", age: 30, gender: "nam" },
    { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
    { name: "Lê Văn Hà", age: 55, gender: "nam" },
];
//a) Viết hàm truyền vào 1 mảng person và giới tính trả về số lượng thành viên theo giới tính.
function countPersonByGender(listPerson, gender) {
    let count = 0;
    for(let i = 0; i < listPerson.length; i++){
        if(listPerson[i].gender === gender)
            count++;
    }
    return count;
}

/*b) Viết hàm truyền vào 1 mảng person, trả về danh sách thống kê dạng: 
    {
        treCon: 5,
        thanhNien: 2,
        nguoiGia: 3
    }
    Điều kiện : - dưới 18 trẻ con
                - từ 18 - 30 thanh niên
                - sau 30 người già
    Với data cho sẵn. Sau mỗi phần đều in ra màn hình kết quả.
*/

function statisticsByAge(listPerson) {
    let child = 0, middleAge = 0, older = 0;
    for(let i = 0; i < listPerson.length; i++){
        if(listPerson[i].age < 18)
            child++;
        else if(listPerson[i].age < 30)
            middleAge++;
        else 
            older++;
    }
    console.log(
        "{\n\tTrẻ con: " + child + 
        "\n\tThanh niên: " + middleAge +
        "\n\tNgười già: " + older +
        "\n}"
    );
}

function main() {
    console.log("Có số người giới tính nam là: " + countPersonByGender(listPersons, 'nam'));
    statisticsByAge(listPersons);
}

console.log(main());
