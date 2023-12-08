const db = require('../config/db')

const TAIKHOAN = function (TAIKHOAN) {
    this.idtaikhoan = TAIKHOAN.IDTAIKHOAN;
    this.tendangnhap = TAIKHOAN.TENDANGNHAP;
    this.pwd = TAIKHOAN.PWD;
    this.vaitro = TAIKHOAN.VAITRO;
    this.idsinhvien = TAIKHOAN.IDSINHVIEN;
    this.da4page = TAIKHOAN.DA4PAGE;
};


TAIKHOAN.findByID = function (id, result) {
    db.query('SELECT * FROM TAIKHOAN WHERE IDTAIKHOAN = ?', id, function (err, res) {
        if (err) {
            console.log('Error while fetching TAIKHOAN', err);
            result(null, err);
        }
        else {
            console.log('TAIKHOAN fetched successfully');
            result(null, res);
        }
    })
}


TAIKHOAN.findByAttrByKeyword = function (attr, keyword, result) {
    db.query('CALL FindByAttrKeyword(?,?,?)',
        ['TAIKHOAN', attr, keyword], function (err, res) {
            if (err) {
                console.log('Error while fetching TAIKHOAN by attr and keyword', err);
                result(null, err);
            } else {
                console.log('TAIKHOAN fetched successfully');
                result(null, res);
            }
        });
}

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
    db.query('INSERT INTO TAIKHOAN (IDTAIKHOAN, TENDANGNHAP, PWD, VAITRO, IDSINHVIEN) VALUES (?,?,?,?,?)',
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

TAIKHOAN.delete = function (id, result) {
    console.log(id);
    db.query('DELETE FROM TAIKHOAN WHERE IDTAIKHOAN = ?', id, function (err, res) {
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
