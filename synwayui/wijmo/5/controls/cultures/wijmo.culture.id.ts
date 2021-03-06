/*
    *
    * Wijmo Library 5.20152.84
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    * 
    * Licensed under the Wijmo Commercial License. 
    * sales@wijmo.com
    * http://wijmo.com/products/wijmo-5/license/
    *
    */
/*
 * Wijmo culture file: id (Indonesian)
 */
module wijmo {
    wijmo.culture = {
        Globalize: {
            numberFormat: {
                '.': ',',
                ',': '.',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 0, symbol: 'Rp', pattern: ['($n)', '$n'] }
            },
            calendar: {
                '/': '/',
                ':': ':',
                firstDay: 1,
                days: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
                daysAbbr: ['Mgg', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
                months: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
                monthsAbbr: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
                am: ['', ''],
                pm: ['', ''],
                eras: ['Sebelum Masehi;'],
                patterns: {
                    d: 'dd/MM/yyyy', D: 'dd MMMM yyyy',
                    f: 'dd MMMM yyyy H:mm', F: 'dd MMMM yyyy H:mm:ss',
                    t: 'H:mm', T: 'H:mm:ss',
                    m: 'dd MMMM', M: 'dd MMMM', 
                    y: 'MMMM yyyy', Y: 'MMMM yyyy', 
                    g: 'dd/MM/yyyy H:mm', G: 'dd/MM/yyyy H:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                }
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} item yang dipilih'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} item)'
        },
        FlexGridFilter: {

            // filter
            ascending: '\u2191 Menaik',
            descending: '\u2193 Menurun',
            apply: 'Terapkan',
            clear: 'Bersihkan',
            conditions: 'Filter berdasarkan Kondisi',
            values: 'Filter berdasarkan Nilai',

            // value filter
            search: 'Cari',
            selectAll: 'Pilih Semua',
            null: '(tidak ada)',

            // condition filter
            header: 'Tampilkan item dengan nilai',
            and: 'Dan',
            or: 'Atau',
            stringOperators: [
                { name: '(tidak ditetapkan)', op: null },
                { name: 'Sama dengan', op: 0 },
                { name: 'Tidak sama dengan', op: 1 },
                { name: 'Dimulai dengan', op: 6 },
                { name: 'Diakhiri dengan', op: 7 },
                { name: 'Berisi', op: 8 },
                { name: 'Tidak berisi', op: 9 }
            ],
            numberOperators: [
                { name: '(tidak ditetapkan)', op: null },
                { name: 'Sama dengan', op: 0 },
                { name: 'Tidak sama dengan', op: 1 },
                { name: 'Besar dari', op: 2 },
                { name: 'Besar dari atau sama dengan', op: 3 },
                { name: 'Kurang dari', op: 4 },
                { name: 'Kurang dari atau sama dengan', op: 5 }
            ],
            dateOperators: [
                { name: '(tidak ditetapkan)', op: null },
                { name: 'Sama dengan', op: 0 },
                { name: 'Sebelum', op: 4 },
                { name: 'Setelah', op: 3 }
            ],
            booleanOperators: [
                { name: '(tidak ditetapkan)', op: null },
                { name: 'Sama dengan', op: 0 },
                { name: 'Tidak sama dengan', op: 1 }
            ]
        }
    };
};
