const db = require('../config/db')

const FILECAM = function (FILECAM) {
    this.idloaifile = FILECAM.IDLOAIFILE;
    this.loaifile = FILECAM.LOAIFILE;
};

FILECAM.d4pageupdate = function (page, result) {
    db.query('UPDATE TAIKHOAN SET DA4PAGE = ? WHERE VAITRO = "user"',
        [page], function (err, res) {
            if (err) {
                console.log('Error while fetching FILECAM', err);
                result(null, err);
            } else {
                console.log('FILECAM fetched successfully');
                result(null, res);
            }
        });
};


FILECAM.findByAttrByKeyword = function (attr, keyword, result) {
    db.query('CALL FindByAttrKeyword(?,?,?)',
        ['FILECAM', attr, keyword], function (err, res) {
            if (err) {
                console.log('Error while fetching FILECAM by attr and keyword', err);
                result(null, err);
            } else {
                console.log('FILECAM fetched successfully');
                result(null, res);
            }
        });
}
//---------------------------------------------
FILECAM.findAll = function (result) {
    db.query('SELECT * FROM FILECAM', function (err, res) {
        if (err) {
            console.log('Error while fetching FILECAM', err);
            result(null, err);
        } else {
            console.log('FILECAM fetched successfully');
            result(null, res);
        }
    });
}

FILECAM.create = function (newFC, result) {
    db.query('INSERT INTO FILECAM (IDLOAIFILE, LOAIFILE) VALUES (?,?)',
        [newFC.idloaifile, newFC.loaifile],
        function (err, res) {
            if (err) {
                console.log('Error while inserting data', err);
                result(null, err);
            } else {
                console.log('FILECAM inserted successfully');
                result(null, res);
            }
        })
}

FILECAM.update = function (FC, result) {
    db.query('UPDATE FILECAM SET loaifile=? WHERE idloaifile=?',
        [FC.loaifile, FC.idloaifile],
        function (err, res) {
            if (err) {
                console.log('Error while updating the FILECAM', err);
                result(null, err);
            } else {
                console.log('FILECAM updated successfully');
                result(null, res);
            }
        });
}

FILECAM.delete = function (id, result) {
    db.query('DELETE FROM FILECAM WHERE IDLOAIFILE = ?', id, function (err, res) {
        if (err) {
            console.log('Error while deleting the FILECAM', err);
            result(null, err);
        } else {
            console.log('FILECAM deleted successfully');
            result(null, res);
        }
    })
}

module.exports = FILECAM;
