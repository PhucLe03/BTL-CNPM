CREATE DATABASE IF NOT EXISTS QUANLYINAN;

USE QUANLYINAN;

CREATE TABLE IF NOT EXISTS TAIKHOAN(
	IDTAIKHOAN VARCHAR(9) PRIMARY KEY,
    TENDANGNHAP VARCHAR(20) NOT NULL,
    PWD VARCHAR(20) NOT NULL,
    VAITRO VARCHAR(20) NOT NULL,
    IDSINHVIEN VARCHAR(9),
    DA4PAGE INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS MAYIN(
	IDMAYIN VARCHAR(8) PRIMARY KEY,
    IDVITRI VARCHAR(8),
    TENMAYIN VARCHAR(20) NOT NULL,
    MODEL VARCHAR(20) NOT NULL,
    MOTA TEXT,
    TINHTRANG VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS FILECAM(
	IDLOAIFILE VARCHAR(9) PRIMARY KEY,
    LOAIFILE VARCHAR(9) NOT NULL
);

CREATE TABLE IF NOT EXISTS VITRI(
	IDVITRI VARCHAR(8) PRIMARY KEY,
    COSO VARCHAR(8) NOT NULL,
    TOA VARCHAR(8) NOT NULL,
    PHONG VARCHAR(8) NOT NULL
);


CREATE TABLE IF NOT EXISTS TAILIEU(
	IDTHUCHIEN VARCHAR(8) PRIMARY KEY,
    TENFILE VARCHAR(50),
    SOTRANG INT NOT NULL,
    LOAIFILE VARCHAR(9) NOT NULL,
    LOAIGIAY VARCHAR(9) NOT NULL,
    THOIGIANIN DATETIME,
    THOIGIANNHAN DATETIME NOT NULL,
    SOBANCOPY INT NOT NULL,
    TONGSOTRANG INT,
    IDTAIKHOAN VARCHAR(9),
    IDMAYIN VARCHAR(9)
);

ALTER TABLE MAYIN
ADD CONSTRAINT FK_IDVITRI_MAYIN_VITRI foreign key (IDVITRI) references VITRI(IDVITRI);


-- Loc
DELIMITER //

CREATE PROCEDURE SortByAttrOrder(
	IN p_tablename VARCHAR(255),
    IN p_attribute VARCHAR(255),
    IN p_order VARCHAR(4) -- 'ASC' or 'DESC'
)
BEGIN
    -- Your SQL query
    SET @sql = CONCAT('
        SELECT *
        FROM ',p_tablename, 
        ' ORDER BY ', p_attribute, ' ', p_order
    );

    PREPARE stmt FROM @sql;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE FindByAttrKeyword(
	IN p_tablename VARCHAR(255),
    IN p_attribute VARCHAR(255),
    IN p_keyword VARCHAR(255)
)
BEGIN
    -- Your SQL query
    SET @sql = CONCAT('
        SELECT *
        FROM ', p_tablename, 
        ' WHERE ',p_tablename,'.', p_attribute, ' LIKE "%', p_keyword, '%"'
    );

    PREPARE stmt FROM @sql;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
END //

DELIMITER ;

-- Insert into TAIKHOAN
INSERT INTO TAIKHOAN (IDTAIKHOAN, TENDANGNHAP, PWD, VAITRO, IDSINHVIEN)
VALUES	('TK000001', 'admin', '123', 'admin', null),
		('TK000002', 'user1', '234', 'user', 'SV123456'),
		('TK000003', 'user2', '234', 'user', 'SV234567'),
		('TK000004', 'user3', '234', 'user', 'SV345678');

INSERT INTO VITRI (IDVITRI, COSO, TOA, PHONG)
VALUES ('VT001', 'CS1', 'A3', '301'),
		('VT002', 'CS1', 'B2', '202'),
        ('VT003', 'CS2', 'H3', '701');

-- Insert into MAYIN
INSERT INTO MAYIN (IDMAYIN, IDVITRI, TENMAYIN, MODEL, MOTA, TINHTRANG)
VALUES	('MAY001', 'VT001', 'Printer A', 'ModelX', 'High-speed printer', 'Not Available'),
		('MAY002', 'VT001', 'Printer B', 'ModelXI', 'High-speed printer', 'Available'),
		('MAY003', 'VT002', 'Printer C', 'ModelXII', 'High-speed printer', 'Available'),
		('MAY004', 'VT002', 'Printer D', 'ModelXIII', 'High-speed printer', 'Not Available'),
		('MAY005', 'VT003', 'Printer E', 'ModelXIV', 'High-speed printer', 'Available');

-- Insert into FILECAM
INSERT INTO FILECAM (IDLOAIFILE, LOAIFILE)
VALUES	('LCF001', 'img'),
		('LCF002', 'png'),
		('LCF003', 'jepg');

-- Insert into VITRI

        
INSERT INTO TAILIEU (IDTHUCHIEN, TENFILE, SOTRANG, LOAIFILE, LOAIGIAY, THOIGIANIN, THOIGIANNHAN, SOBANCOPY, TONGSOTRANG, IDTAIKHOAN, IDMAYIN)
VALUES	('TL001', 'Document1.pdf', 27, 'pdf', 'A4', '2023-11-06 12:00:00', '2023-11-06 14:00:00', 2, 54, 'TK000002', 'MAY002'),
		('TL002', 'Document2.pdf', 18, 'doc', 'A4', '2023-11-07 12:00:00', '2023-11-07 14:00:00', 2, 36, 'TK000003', 'MAY005'),
        ('TL003', 'Document3.pdf', 41, 'pdf', 'A4', '2023-11-08 12:00:00', '2023-11-08 14:00:00', 3, 123, 'TK000004', 'MAY003'),
        ('TL004', 'Document4.pdf', 103, 'docx', 'A4', '2022-12-06 12:00:00', '2022-12-06 14:00:00', 1, 103, 'TK000002', 'MAY002'),
        ('TL005', 'Document5.pdf', 2, 'doc', 'A3', '2022-12-06 12:00:00', '2022-12-06 14:00:00', 2, 4, 'TK000003', 'MAY005'),
        ('TL006', 'Document6.pdf', 38, 'xlsx', 'A4', '2022-12-06 12:00:00', '2022-12-06 14:00:00', 2, 38, 'TK000004', 'MAY003'),
        ('TL007', 'Document7.pdf', 5, 'doc', 'A3', '2022-12-06 12:00:00', '2022-12-06 14:00:00', 3, 39, 'TK000002', 'MAY002');
