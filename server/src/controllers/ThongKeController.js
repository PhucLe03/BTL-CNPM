const XLSX = require('xlsx');
const fs = require('fs');
const db = require('../config/db');

const TAILIEU = require('../models/TAILIEU');

exports.Export = async function (req, res) {
    TAILIEU.export(req.body.start, req.body.end, function (err, tailieus) {

        const datas = tailieus.map((item) => {
            return {
                idthuchien: item.IDTHUCHIEN,
                sotrang: item.SOTRANG,
                tenfile: item.TENFILE,
                loaifile: item.LOAIFILE,
                loaigiay: item.LOAIGIAY,
                thoigianin: item.THOIGIANIN,
                thoigiannhan: item.THOIGIANNHAN,
                sobancopy: item.SOBANCOPY,
                tongsotrang: item.TONGSOTRANG,
                idtaikhoan: item.IDTAIKHOAN,
                idmayin: item.IDMAYIN,
            };
        });

        // Create a worksheet from your data
        const ws = XLSX.utils.json_to_sheet(datas);

        // Create a workbook and add the worksheet
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Data');

        // Generate a temporary file path
        const tempFilePath = './temp.xlsx';

        // Write the XLSX file to the temp path
        XLSX.writeFile(wb, tempFilePath);

        // Send the file as a response
        res.download(tempFilePath, 'exported-data.xlsx', () => {
            // After the file is sent, delete the temporary file
            fs.unlink(tempFilePath, (err) => {
                if (err) {
                    console.error('Error deleting temporary file:', err);
                }
            });
        });
    }
    )
}