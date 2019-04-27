$(document).ready(function(){
    var nguoiDungService = new NguoiDungService();
    layDanhSachNguoiDung();
    function moiTaoBranch(){
        console.log("Them")
    }
    function setHeaderFooterModal(tieuDe , titleButton , idButton){
        $(".modal-title").html(tieuDe);
        var footer = `
        <button class="btn btn-success" id="${idButton}">${titleButton}</button>
        `;
        $(".modal-footer").html(footer);
    }
    $("#btnThemNguoiDung").click(function(){
       
        setHeaderFooterModal("Thêm Người Dùng","Thêm","btnThem");
    })
    $("body").delegate(".btnSua" , "click" , function(){
        setHeaderFooterModal("Cập Nhật Người Dùng","Cập Nhật","btnCapNhat");
        var taiKhoan = $(this).data('taikhoan');
        var nguoiDung = nguoiDungService.layThongTinNguoiDung(taiKhoan);
        $("#TaiKhoan").attr("disabled", 'disabled');
        
        $("#TaiKhoan").val(nguoiDung.TaiKhoan);
        $("#HoTen").val(nguoiDung.HoTen);
        $("#MatKhau").val(nguoiDung.MatKhau);
        $("#Email").val(nguoiDung.Email);
        $("#SoDienThoai").val(nguoiDung.SoDT);
        $("#loaiNguoiDung").val(nguoiDung.MaLoaiNguoiDung);
    })
    $("body").delegate(".btnXoa" , "click" , function(){
       var taiKhoan = $(this).data('taikhoan');
       console.log(taiKhoan);
       nguoiDungService.xoaNguoiDung(taiKhoan);
    

        
    })
    $("body").delegate("#btnThem" , "click" , function(){
        
    var taiKhoan=$("#TaiKhoan").val();
    var hoTen =$("#HoTen").val();
    var matKhau =$("#MatKhau").val();
    var email =$("#Email").val();
    var soDT =$("#SoDienThoai").val();
    var loaiNguoiDung =$("#loaiNguoiDung").val();
    
    var nguoiDung = new NguoiDung(taiKhoan ,matKhau , hoTen,email,soDT,loaiNguoiDung);
        nguoiDungService.themNguoiDung(nguoiDung);
        
    })
    $("body").delegate("#btnCapNhat" , "click" , function(){
       
        var taiKhoan=$("#TaiKhoan").val();
        var hoTen =$("#HoTen").val();
        var matKhau =$("#MatKhau").val();
        var email =$("#Email").val();
        var soDT =$("#SoDienThoai").val();
        var loaiNguoiDung =$("#loaiNguoiDung").val();
        var nguoiDung = new NguoiDung(taiKhoan ,matKhau , hoTen,email,soDT,loaiNguoiDung);
        
        nguoiDungService.capNhatNguoiDung(nguoiDung);

    })
    function layDanhSachNguoiDung(){
        nguoiDungService.layDanhSachNguoiDung();
     
    }
    
    
})


