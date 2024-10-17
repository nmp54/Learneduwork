CREATE TABLE users (
    user_id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    gender VARCHAR(10),
    address TEXT
);

INSERT INTO `db_eduwork`.`users`(user_id, name, email, phone, gender, address) VALUES
(1, 'Michieda Shunsuke', 'michieda.shunsuke@example.com', '+628111111111', 'Male', 'Jl. Sudirman, Jakarta'),
(2, 'Kazuya Ohashi', 'kazuya.ohashi@example.com', '+628111111112', 'Male', 'Jl. Thamrin, Jakarta'),
(3, 'Daigo Nishihata', 'daigo.nishihata@example.com', '+628111111113', 'Male', 'Jl. Gatot Subroto, Jakarta'),
(4, 'Ryusei Onishi', 'ryusei.onishi@example.com', '+628111111114', 'Male', 'Jl. Kuningan, Jakarta'),
(5, 'Kyohei Takahashi', 'kyohei.takahashi@example.com', '+628111111115', 'Male', 'Jl. Rasuna Said, Jakarta'),
(6, 'Kento Nagao', 'kento.nagao@example.com', '+628111111116', 'Male', 'Jl. Mangga Dua, Jakarta'),
(7, 'Ryosuke Yamada', 'ryosuke.yamada@example.com', '+628111111117', 'Male', 'Jl. Kemang Raya, Jakarta'),
(8, 'Kei Ino', 'kei.ino@example.com', '+628111111118', 'Male', 'Jl. Tebet Barat, Jakarta'),
(9, 'Daiki Arioka', 'daiki.arioka@example.com', '+628111111119', 'Male', 'Jl. Senayan, Jakarta'),
(10, 'Yuuri Chinen', 'yuuri.chinen@example.com', '+628111111120', 'Male', 'Jl. Radio Dalam, Jakarta'),
(11, 'Yuya Takaki', 'yuya.takaki@example.com', '+628111111121', 'Male', 'Jl. Fatmawati, Jakarta'),
(12, 'Yuto Nakajima', 'yuto.nakajima@example.com', '+628111111122', 'Male', 'Jl. Pondok Indah, Jakarta'),
(13, 'Hikaru Youtome', 'hikaru.youtome@example.com', '+628111111123', 'Male', 'Jl. Antasari, Jakarta'),
(14, 'Kota Yabu', 'kota.yabu@example.com', '+628111111124', 'Male', 'Jl. Melawai, Jakarta'),
(15, 'Keito Okamoto', 'keito.okamoto@example.com', '+628111111125', 'Male', 'Jl. Pangeran Antasari, Jakarta'),
(16, 'Ryutaro Morimoto', 'ryutaro.morimoto@example.com', '+628111111126', 'Male', 'Jl. Cipete, Jakarta'),
(17, 'Ren Nagase', 'ren.nagase@example.com', '+628111111127', 'Male', 'Jl. Merdeka, Bandung'),
(18, 'Sho Hirano', 'sho.hirano@example.com', '+628111111128', 'Male', 'Jl. Asia Afrika, Bandung'),
(19, 'Kaito Takahashi', 'kaito.takahashi@example.com', '+628111111129', 'Male', 'Jl. Riau, Bandung'),
(20, 'Yuta Kishi', 'yuta.kishi@example.com', '+628111111130', 'Male', 'Jl. Dago, Bandung'),
(21, 'Yuta Jinguji', 'yuta.jinguji@example.com', '+628111111131', 'Male', 'Jl. Setiabudi, Bandung'),
(22, 'Genki Iwahashi', 'genki.iwahashi@example.com', '+628111111132', 'Male', 'Jl. Braga, Bandung'),
(23, 'Kento Yamazaki', 'kento.yamazaki@example.com', '+628111111133', 'Male', 'Jl. Cihampelas, Bandung'),
(24, 'Jun Matsumoto', 'jun.matsumoto@example.com', '+628111111134', 'Male', 'Jl. Sudirman, Surabaya'),
(25, 'Kazunari', 'kazunari@example.com', '+628111111135', 'Male', 'Jl. Diponegoro, Surabaya'),
(26, 'Masaki Suda', 'masaki.suda@example.com', '+628111111136', 'Male', 'Jl. Darmo, Surabaya'),
(27, 'Masaki Aiba', 'masaki.aiba@example.com', '+628111111137', 'Male', 'Jl. Gubeng, Surabaya'),
(28, 'Mason Roberts', 'mason.roberts@example.com', '+628111111138', 'Male', 'Jl. Embong Malang, Surabaya'),
(29, 'Ava Turner', 'ava.turner@example.com', '+628111111139', 'Male', 'Jl. Basuki Rahmat, Surabaya'),
(30, 'Jacob Phillips', 'jacob.phillips@example.com', '+628111111140', 'Male', 'Jl. Mayjen Sungkono, Surabaya');

SELECT 
    name AS username, 
    phone AS telephone, 
    address AS location 
FROM users;
