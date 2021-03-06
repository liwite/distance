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
 * Wijmo culture file: kk (Kazakh)
 */
module wijmo {
    wijmo.culture = {
        Globalize: {
            numberFormat: {
                '.': ',',
                ',': ' ',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: '₸', pattern: ['-$n', '$n'] }
            },
            calendar: {
                '/': '-',
                ':': ':',
                firstDay: 1,
                days: ['Жексенбі', 'Дүйсенбі', 'Сейсенбі', 'Сәрсенбі', 'Бейсенбі', 'Жұма', 'Сенбі'],
                daysAbbr: ['Жек', 'Дүй', 'Сей', 'Сәр', 'Бей', 'Жұм', 'Сен'],
                months: ['қаңтар', 'ақпан', 'наурыз', 'сәуір', 'мамыр', 'маусым', 'шілде', 'тамыз', 'қыркүйек', 'қазан', 'қараша', 'желтоқсан'],
                monthsAbbr: ['қаң', 'ақп', 'нау', 'сәу', 'мам', 'мау', 'шіл', 'там', 'қыр', 'қаз', 'қар', 'жел'],
                am: ['', ''],
                pm: ['', ''],
                eras: ['б.з.'],
                patterns: {
                    d: 'd-MMM-yy', D: 'd MMMM yyyy "ж."',
                    f: 'd MMMM yyyy "ж." HH:mm', F: 'd MMMM yyyy "ж." HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'd MMMM', M: 'd MMMM', 
                    y: 'MMMM yyyy', Y: 'MMMM yyyy', 
                    g: 'd-MMM-yy HH:mm', G: 'd-MMM-yy HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                }
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} элементтер таңдалған'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} элемент)'
        },
        FlexGridFilter: {

            // filter
            ascending: '\u2191 Артуы бойынша',
            descending: '\u2193 Кемуі бойынша',
            apply: 'Қолдану',
            clear: 'Тазалау',
            conditions: 'Шарты бойынша сүзу',
            values: 'Мәні бойынша сүзу',

            // value filter
            search: 'Іздеу',
            selectAll: 'Бәрін бөлектеу',
            null: '(жоқ)',

            // condition filter
            header: 'Мәні мынадай элементтерді көрсету',
            and: 'Және',
            or: 'Немесе',
            stringOperators: [
                { name: '(орнатылмаған)', op: null },
                { name: 'Тең', op: 0 },
                { name: 'Тең емес', op: 1 },
                { name: 'Басталады', op: 6 },
                { name: 'Аяқталады', op: 7 },
                { name: 'Құрамында бар', op: 8 },
                { name: 'Құрамында жоқ', op: 9 }
            ],
            numberOperators: [
                { name: '(орнатылмаған)', op: null },
                { name: 'Тең', op: 0 },
                { name: 'Тең емес', op: 1 },
                { name: 'Үлкендеу', op: 2 },
                { name: 'Үлкендеу немесе тең', op: 3 },
                { name: 'Аздау', op: 4 },
                { name: 'Аздау немесе тең', op: 5 }
            ],
            dateOperators: [
                { name: '(орнатылмаған)', op: null },
                { name: 'Тең', op: 0 },
                { name: 'Бұрын', op: 4 },
                { name: 'Кейін', op: 3 }
            ],
            booleanOperators: [
                { name: '(орнатылмаған)', op: null },
                { name: 'Тең', op: 0 },
                { name: 'Тең емес', op: 1 }
            ]
        }
    };
};
