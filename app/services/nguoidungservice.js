function NguoiDungService() {

    this.layDanhSachNguoiDung = function () {
        $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
            type: "GET"
        })
            .done(function (result) {

                localStorage.setItem("DSND", JSON.stringify(result));
                taoBang(result);
                console.log(result);

            })
            .fail(function (err) {
                console.log(err);
            })


        this.themNguoiDung = function (nguoiDung) {
            $.ajax({
                url: "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
                type: "POST",
                data: nguoiDung
            })
                .done(function (result) {
                    if (result === "tai khoan da ton tai !") {
                        alert(result);
                    }
                    else {
                        location.reload();
                    }
                })
                .fail(function (err) {
                    console.log(err);
                })
        }
        this.xoaNguoiDung = function (taiKhoan) {
            $.ajax({
                url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${taiKhoan}`,
                type: "DELETE",
            })
                .done(function (result) {
                    console.log(result);
                    location.reload();
                })
                .fail(function (err) {
                    console.log(err);
                })
        }
        this.layThongTinNguoiDung = function (taiKhoan) {
            var danhsachnguoiDung = JSON.parse(localStorage.getItem("DSND"));
            var nguoiDung;
            danhsachnguoiDung.map(function (item) {
                if (item.TaiKhoan === taiKhoan) {
                    nguoiDung = item;
                    return nguoiDung;
                }

            })
            return nguoiDung;
        }

        this.capNhatNguoiDung = function(nguoiDung){
            var ngd = JSON.stringify(nguoiDung)
          $.ajax({
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung`,
            type:"PUT",
            data: ngd,
            contentType:'application/json',
            dataType:'json'
          })
          .done(function(res){
              location.reload();

          })
          .fail(function(err){
              console.log(err);
          })

        //   return $.ajax({

        //       url:urlAPI,

        //      
        //       data:upNgDung,

        //   })
        // }

         return danhsachnguoiDung.find(function(item){
             return item.TaiKhoan === taiKhoan;
         })

    }
}

function taoBang(dsMang) {
    console.log(dsMang);
    var noiDungTable = ``;
    dsMang.map(function (item, i) {
        noiDungTable +=
            `
        <tr>
            <td>${i + 1}</td>
            <td>${item.TaiKhoan}</td>
            <td>${item.MatKhau}</td>
            <td>${item.HoTen}</td>
            <td>${item.Email}</td>
            <td>${item.SoDT}</td>
            <td>${item.TenLoaiNguoiDung}</td>
            <td>
                <button class="btn btn-success btnSua" data-taikhoan="${item.TaiKhoan}" data-toggle="modal" data-target="#myModal">Sửa</button>
                <button class="btn btn-danger btnXoa" data-taikhoan="${item.TaiKhoan}">Xóa</button>
            </td>
        </tr>
        `
    })
    $("#tblDanhSachNguoiDung").html(noiDungTable);
}
}
