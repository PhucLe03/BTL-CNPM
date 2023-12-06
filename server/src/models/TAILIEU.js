const db = require('../config/db')

const TAILIEU = function (TAILIEU) {
    this.idthuchien = TAILIEU.idthuchien;
    this.sotrang = TAILIEU.sotrang;
    this.tenfile = TAILIEU.tenfile;
    this.loaifile = TAILIEU.loaifile;
    this.loaigiay = TAILIEU.loaigiay;
    this.thoigianin = TAILIEU.thoigianin;
    this.thoigiannhan = TAILIEU.thoigiannhan;
    this.sobancopy = TAILIEU.sobancopy;
    this.tongsotrang = TAILIEU.tongsotrang;
    this.idtaikhoan = TAILIEU.idtaikhoan;
    this.idmayin = TAILIEU.idmayin;
};


//---------------------------------------------
TAILIEU.findAll = function (result) {
    db.query('SELECT * FROM TAILIEU', function (err, res) {
        if (err) {
            console.log('Error while fetching TAILIEU', err);
            result(null, err);
        } else {
            console.log('TAILIEU fetched successfully');
            result(null, res);
        }
    });
}

TAILIEU.create = function (newTL, result) {
    db.query('INSERT INTO TAILIEU (IDTHUCHIEN, TENFILE, SOTRANG, LOAIFILE, LOAIGIAY, THOIGIANIN, THOIGIANNHAN, SOBANCOPY, TONGSOTRANG, IDTAIKHOAN, IDMAYIN) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
        [newTL.idthuchien, newTL.sotrang, newTL.tenfile, newTL.loaifile, newTL.loaigiay, newTL.thoigianin, newTL.thoigiannhan, newTL.sobancopy, newTL.tongsotrang, newTL.idtaikhoan, newTL.idmayin],
        function (err, res) {
            if (err) {
                console.log('Error while inserting data', err);
                result(null, err);
            } else {
                console.log('TAILIEU inserted successfully');
                result(null, res);
            }
        })
}

TAILIEU.update = function (TL, result) {
    db.query('UPDATE TAILIEU SET sotrang=?,tenfile=?,loaifile=?,loaigiay=?,thoigianin=?,thoigiannhan=?,sobancopy=?,tongsotrang=?,idtaikhoan=?,idmayin=? WHERE idthuchien=?',
        [TL.sotrang, TL.tenfile, TL.loaifile, TL.loaigiay, TL.thoigianin, TL.thoigiannhan, TL.sobancopy, TL.tongsotrang, TL.idtaikhoan, TL.idmayin, TL.idthuchien],
        function (err, res) {
            if (err) {
                console.log('Error while updating the TAILIEU', err);
                result(null, err);
            } else {
                console.log('TAILIEU updated successfully');
                result(null, res);
            }
        });
}

TAILIEU.delete = function (idTAILIEU, result) {
    db.query('DELETE FROM TAILIEU WHERE IDTAILIEU = ?', idTAILIEU, function (err, res) {
        if (err) {
            console.log('Error while deleting the TAILIEU', err);
            result(null, err);
        } else {
            console.log('TAILIEU deleted successfully');
            result(null, res);
        }
    })
}

module.exports = TAILIEU;
