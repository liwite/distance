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
* Wijmo culture file: lt (Lithuanian)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            numberFormat: {
                '.': ',',
                ',': ' ',
                percent: { pattern: ['-n %', 'n %'] },
                currency: { decimals: 2, symbol: '€', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '-',
                ':': ':',
                firstDay: 1,
                days: ['sekmadienis', 'pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis', 'penktadienis', 'šeštadienis'],
                daysAbbr: ['Sk', 'Pr', 'An', 'Tr', 'Kt', 'Pn', 'Št'],
                months: ['sausis', 'vasaris', 'kovas', 'balandis', 'gegužė', 'birželis', 'liepa', 'rugpjūtis', 'rugsėjis', 'spalis', 'lapkritis', 'gruodis'],
                monthsAbbr: ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rgp', 'Rgs', 'Spl', 'Lap', 'Grd'],
                am: ['', ''],
                pm: ['', ''],
                eras: ['po Kristaus'],
                patterns: {
                    d: 'yyyy-MM-dd', D: 'yyyy "m." MMMM d "d."',
                    f: 'yyyy "m." MMMM d "d." HH:mm', F: 'yyyy "m." MMMM d "d." HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'MMMM d "d."', M: 'MMMM d "d."',
                    y: 'yyyy "m." MMMM', Y: 'yyyy "m." MMMM',
                    g: 'yyyy-MM-dd HH:mm', G: 'yyyy-MM-dd HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                }
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} vnt pasirinktas'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} elementai)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Didėjimo tvarka',
            descending: '\u2193 Mažėjimo tvarka',
            apply: 'Taikyti',
            clear: 'Valyti',
            conditions: 'Filtruoti pagal sąlygą',
            values: 'Filtruoti pagal reikšmę',
            // value filter
            search: 'Ieškoti',
            selectAll: 'Pasirinkti viską',
            null: '(nieko)',
            // condition filter
            header: 'Rodyti elementus, kur reikšmė',
            and: 'Ir',
            or: 'Arba',
            stringOperators: [
                { name: '(nenustatyta)', op: null },
                { name: 'Lygu', op: 0 },
                { name: 'Nelygu', op: 1 },
                { name: 'Prasideda', op: 6 },
                { name: 'Pasibaigia', op: 7 },
                { name: 'Apima', op: 8 },
                { name: 'Neapima', op: 9 }
            ],
            numberOperators: [
                { name: '(nenustatyta)', op: null },
                { name: 'Lygu', op: 0 },
                { name: 'Nelygu', op: 1 },
                { name: 'Didesnis nei', op: 2 },
                { name: 'Didesnis arba lygus', op: 3 },
                { name: 'Mažesnis nei', op: 4 },
                { name: 'Mažesnis arba lygus', op: 5 }
            ],
            dateOperators: [
                { name: '(nenustatyta)', op: null },
                { name: 'Lygu', op: 0 },
                { name: 'Yra prieš', op: 4 },
                { name: 'Yra po', op: 3 }
            ],
            booleanOperators: [
                { name: '(nenustatyta)', op: null },
                { name: 'Lygu', op: 0 },
                { name: 'Nelygu', op: 1 }
            ]
        }
    };
})(wijmo || (wijmo = {}));
;
//# sourceMappingURL=wijmo.culture.lt.js.map

