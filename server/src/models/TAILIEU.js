const db = require('../config/db')

const TAILIEU = function (TAILIEU) {
    this.idthuchien = TAILIEU.IDTHUCHIEN;
    this.sotrang = TAILIEU.SOTRANG;
    this.tenfile = TAILIEU.TENFILE;
    this.loaifile = TAILIEU.LOAIFILE;
    this.loaigiay = TAILIEU.LOAIGIAY;
    this.thoigianin = TAILIEU.THOIGIANIN;
    this.thoigiannhan = TAILIEU.THOIGIANNHAN;
    this.sobancopy = TAILIEU.SOBANCOPY;
    this.tongsotrang = TAILIEU.TONGSOTRANG;
    this.idtaikhoan = TAILIEU.IDTAIKHOAN;
    this.idmayin = TAILIEU.IDMAYIN;
};

TAILIEU.export = function (start, end, result) {
    db.query('SELECT * FROM TAILIEU WHERE THOIGIANIN > ? AND THOIGIANIN < ?', [start, end], function (err, res) {
        if (err) {
            console.log('Error while fetching TAILIEU', err);
            result(null, err);
        } else {
            console.log('TAILIEU fetched successfully');
            result(null, res);
        }
    });
}

TAILIEU.findByAttrByKeyword = function (attr, keyword, result) {
    db.query('CALL FindByAttrKeyword(?,?,?)',
        ['TAILIEU', attr, keyword], function (err, res) {
            if (err) {
                console.log('Error while fetching TAILIEU', err);
                result(null, err);
            } else {
                console.log('TAILIEU fetched successfully');
                result(null, res);
            }
        });
}

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
        [newTL.idthuchien, newTL.tenfile, newTL.sotrang, newTL.loaifile, newTL.loaigiay, newTL.thoigianin, newTL.thoigiannhan, newTL.sobancopy, newTL.tongsotrang, newTL.idtaikhoan, newTL.idmayin],
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

TAILIEU.delete = function (id, result) {
    db.query('DELETE FROM TAILIEU WHERE IDTHUCHIEN = ?', id, function (err, res) {
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
