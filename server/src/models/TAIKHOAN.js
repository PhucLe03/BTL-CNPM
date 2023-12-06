const db = require('../config/db')

const TAIKHOAN = function (TAIKHOAN) {
    this.idtaikhoan = TAIKHOAN.idtaikhoan;
    this.tendangnhap = TAIKHOAN.tendangnhap;
    this.pwd = TAIKHOAN.pwd;
    this.vaitro = TAIKHOAN.vaitro;
    this.idsinhvien = TAIKHOAN.idsinhvien;
    this.da4page = TAIKHOAN.da4page;
};


//---------------------------------------------
TAIKHOAN.findAll = function (result) {
    db.query('SELECT * FROM TAIKHOAN', function (err, res) {
        if (err) {
            console.log('Error while fetching TAIKHOAN', err);
            result(null, err);
        } else {
            console.log('TAIKHOAN fetched successfully');
            result(null, res);
        }
    });
}

TAIKHOAN.create = function (newTK, result) {
    db.query('INSERT INTO TAIKHOAN (IDTAIKHOAN, TENDANGNHAP, PWD, VAITRO, IDSINHVIEN) VALUES (?,?,?,?,?))',
        [newTK.idtaikhoan, newTK.tendangnhap, newTK.pwd, newTK.vaitro, newTK.idsinhvien, newTK.da4page],
        function (err, res) {
            if (err) {
                console.log('Error while inserting data', err);
                result(null, err);
            } else {
                console.log('TAIKHOAN inserted successfully');
                result(null, res);
            }
        })
}

TAIKHOAN.update = function (TK, result) {
    db.query('UPDATE TAIKHOAN SET tendangnhap=?,pwd=?,vaitro=?,idsinhvien=?,da4page=? WHERE idtaikhoan=? ',
        [TK.tendangnhap, TK.pwd, TK.vaitro, TK.idsinhvien, TK.da4page, TK.idtaikhoan],
        function (err, res) {
            if (err) {
                console.log('Error while updating the TAIKHOAN', err);
                result(null, err);
            } else {
                console.log('TAIKHOAN updated successfully');
                result(null, res);
            }
        });
}

TAIKHOAN.delete = function (idtaikhoan, result) {
    // cap nhat maDeTai null cho sinh vien
    db.query('DELETE FROM TAIKHOAN WHERE IDTAIKHOAN = ?', idtaikhoan, function (err, res) {
        if (err) {
            console.log('Error while deleting the TAIKHOAN', err);
            result(null, err);
        } else {
            console.log('TAIKHOAN deleted successfully');
            result(null, res);
        }
    })
}

module.exports = TAIKHOAN;
