const db = require('../config/db')

const MAYIN = function (MAYIN) {
    this.idmayin = MAYIN.IDMAYIN;
    this.idvitri = MAYIN.IDVITRI;
    this.tenmayin = MAYIN.TENMAYIN;
    this.model = MAYIN.MODEL;
    this.mota = MAYIN.MOTA;
    this.tinhtrang = MAYIN.TINHTRANG;


};


MAYIN.findByViTri = function (id, result) {
    db.query('SELECT * FROM MAYIN WHERE IDVITRI = ?', [id], function (err, res) {
        if (err) {
            console.log('Error while fetching MAYIN', err);
            result(null, err);
        } else {
            console.log('MAYIN fetched successfully');
            result(null, res);
        }
    }
    );
}


MAYIN.findbyattrandkeyword = function (attr, keyword, result) {
    db.query('CALL FindByAttrKeyword(?,?,?)',
        ['MAYIN', attr, keyword], function (err, res) {
            if (err) {
                console.log('Error while fetching MAYIN', err);
                result(null, err);
            } else {
                console.log('MAYIN fetched successfully');
                result(null, res);
            }
        });
        
}

//---------------------------------------------
MAYIN.findAll = function (result) {
    db.query('SELECT * FROM MAYIN JOIN VITRI ON MAYIN.IDVITRI = VITRI.IDVITRI', function (err, res) {
        if (err) {
            console.log('Error while fetching MAYIN', err);
            result(null, err);
        } else {
            console.log('MAYIN fetched successfully');
            result(null, res);
        }
    });
}

MAYIN.create = function (newMI, result) {
    db.query('INSERT INTO MAYIN (IDMAYIN, IDVITRI, TENMAYIN, MODEL, MOTA, TINHTRANG) VALUES  (?,?,?,?,?,?)',
        [newMI.idmayin, newMI.idvitri, newMI.tenmayin, newMI.model, newMI.mota, newMI.tinhtrang],
        function (err, res) {
            if (err) {
                console.log('Error while inserting data', err);
                result(null, err);
            } else {
                console.log('MAYIN inserted successfully');
                result(null, res);
            }
        })
}

MAYIN.update = function (MI, result) {
    db.query('UPDATE MAYIN SET idvitri=?,tenmayin=?,model=?,mota=?,tinhtrang=? WHERE idmayin=?',
        [MI.idvitri, MI.tenmayin, MI.model, MI.mota, MI.tinhtrang, MI.idmayin],
        function (err, res) {
            if (err) {
                console.log('Error while updating the MAYIN', err);
                result(null, err);
            } else {
                console.log('MAYIN updated successfully');
                result(null, res);
            }
        });
}

MAYIN.delete = function (id, result) {
    db.query('DELETE FROM MAYIN WHERE IDMAYIN = ?', [id], function (err, res) {
        if (err) {
            console.log('Error while deleting the MAYIN', err);
            result(null, err);
        } else {
            console.log('MAYIN deleted successfully');
            result(null, res);
        }
    })
}

module.exports = MAYIN;
