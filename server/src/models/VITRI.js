const db = require('../config/db')

const VITRI = function (VITRI) {
    this.idvitri = VITRI.IDVITRI;
    this.coso = VITRI.COSO;
    this.toa = VITRI.TOA;
    this.phong = VITRI.PHONG;
};


VITRI.findByAttrAndKeyWord = function (attr, keyword, result) {
    db.query('CALL FindByAttrKeyword(?,?,?)',
        ['VITRI', attr, keyword], function (err, res) {
            if (err) {
                console.log('Error while fetching VITRI', err);
                result(null, err);
            }
            else {
                console.log('VITRI fetched successfully');
                result(null, res);
            }
        }
    );
}


//---------------------------------------------
VITRI.findAll = function (result) {
    db.query('SELECT * FROM VITRI', function (err, res) {
        if (err) {
            console.log('Error while fetching VITRI', err);
            result(null, err);
        } else {
            console.log('VITRI fetched successfully');
            result(null, res);
        }
    });
}

VITRI.create = function (newVT, result) {
    db.query('INSERT INTO VITRI (IDVITRI, COSO, TOA, PHONG) VALUES (?,?,?,?)',
        [newVT.idvitri, newVT.coso, newVT.toa, newVT.phong],
        function (err, res) {
            if (err) {
                console.log('Error while inserting data', err);
                result(null, err);
            } else {
                console.log('VITRI inserted successfully');
                result(null, res);
            }
        })
}

VITRI.update = function (VT, result) {
    db.query('UPDATE VITRI SET coso=?,toa=?,phong=? WHERE idvitri=?',
        [VT.coso, VT.toa, VT.phong, VT.idvitri],
        function (err, res) {
            if (err) {
                console.log('Error while updating the VITRI', err);
                result(null, err);
            } else {
                console.log('VITRI updated successfully');
                result(null, res);
            }
        });
}

VITRI.delete = function (id, result) {
    db.query('DELETE FROM VITRI WHERE IDVITRI = ?', [id], function (err, res) {
        if (err) {
            console.log('Error while deleting the VITRI', err);
            result(null, err);
        } else {
            console.log('VITRI deleted successfully');
            result(null, res);
        }
    })
}

module.exports = VITRI;
