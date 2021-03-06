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
 * Wijmo culture file: hu (Hungarian)
 */
module wijmo {
    wijmo.culture = {
        Globalize: {
            numberFormat: {
                '.': ',',
                ',': ' ',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: 'Ft', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '.',
                ':': ':',
                firstDay: 1,
                days: ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'],
                daysAbbr: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                months: ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'],
                monthsAbbr: ['jan.', 'febr.', 'márc.', 'ápr.', 'máj.', 'jún.', 'júl.', 'aug.', 'szept.', 'okt.', 'nov.', 'dec.'],
                am: ['de.', 'de.'],
                pm: ['du.', 'du.'],
                eras: ['i.sz.'],
                patterns: {
                    d: 'yyyy.MM.dd.', D: 'yyyy. MMMM d.',
                    f: 'yyyy. MMMM d. H:mm', F: 'yyyy. MMMM d. H:mm:ss',
                    t: 'H:mm', T: 'H:mm:ss',
                    m: 'MMMM d.', M: 'MMMM d.', 
                    y: 'yyyy. MMMM', Y: 'yyyy. MMMM', 
                    g: 'yyyy.MM.dd. H:mm', G: 'yyyy.MM.dd. H:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                }
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} kiválasztott tételek'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} elemek)'
        },
        FlexGridFilter: {

            // filter
            ascending: '\u2191 Növekvő',
            descending: '\u2193 Csökkenő',
            apply: 'Alkalmaz',
            clear: 'Törlés',
            conditions: 'Szűrés feltétel szerint',
            values: 'Szűrés érték szerint',

            // value filter
            search: 'Keresés',
            selectAll: 'Az összes kiválasztása',
            null: '(semmi)',

            // condition filter
            header: 'Olyan elemek megjelenítése, ahol az érték',
            and: 'És',
            or: 'Vagy',
            stringOperators: [
                { name: '(nincs megadva)', op: null },
                { name: 'Egyenlő', op: 0 },
                { name: 'Nem egyenlő', op: 1 },
                { name: 'Ezzel kezdődik', op: 6 },
                { name: 'Ezzel végződik', op: 7 },
                { name: 'Tartalmazza a következőt', op: 8 },
                { name: 'Nem tartalmazza a következőt', op: 9 }
            ],
            numberOperators: [
                { name: '(nincs megadva)', op: null },
                { name: 'Egyenlő', op: 0 },
                { name: 'Nem egyenlő', op: 1 },
                { name: 'Nagyobb, mint', op: 2 },
                { name: 'Nagyobb vagy egyenlő', op: 3 },
                { name: 'Kisebb, mint', op: 4 },
                { name: 'Kisebb vagy egyenlő', op: 5 }
            ],
            dateOperators: [
                { name: '(nincs megadva)', op: null },
                { name: 'Egyenlő', op: 0 },
                { name: 'Korábbi', op: 4 },
                { name: 'Későbbi', op: 3 }
            ],
            booleanOperators: [
                { name: '(nincs megadva)', op: null },
                { name: 'Egyenlő', op: 0 },
                { name: 'Nem egyenlő', op: 1 }
            ]
        }
    };
};
