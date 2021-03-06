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
 * Wijmo culture file: sr (Serbian)
 */
module wijmo {
    wijmo.culture = {
        Globalize: {
            numberFormat: {
                '.': ',',
                ',': '.',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: 'din.', pattern: ['-n $', 'n $'] }
            },
            calendar: {
                '/': '.',
                ':': ':',
                firstDay: 1,
                days: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
                daysAbbr: ['ned.', 'pon.', 'uto.', 'sre.', 'čet.', 'pet.', 'sub.'],
                months: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
                monthsAbbr: ['jan.', 'feb.', 'mart', 'apr.', 'maj', 'jun', 'jul', 'avg.', 'sept.', 'okt.', 'nov.', 'dec.'],
                am: ['', ''],
                pm: ['', ''],
                eras: ['n.e.'],
                patterns: {
                    d: 'd.M.yyyy.', D: 'd. MMMM yyyy.',
                    f: 'd. MMMM yyyy. H:mm', F: 'd. MMMM yyyy. H:mm:ss',
                    t: 'H:mm', T: 'H:mm:ss',
                    m: 'd. MMMM', M: 'd. MMMM', 
                    y: 'MMMM yyyy.', Y: 'MMMM yyyy.', 
                    g: 'd.M.yyyy. H:mm', G: 'd.M.yyyy. H:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                }
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} stavki odabrano'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} stavke)'
        },
        FlexGridFilter: {

            // filter
            ascending: '\u2191 Rastuće',
            descending: '\u2193 Opadajuće',
            apply: 'Primeni',
            clear: 'Obriši',
            conditions: 'Filtriraj prema uslovu',
            values: 'Filtriraj prema vrednosti',

            // value filter
            search: 'Traži',
            selectAll: 'Izaberi sve',
            null: '(ništa)',

            // condition filter
            header: 'Prikaži stavke gde je vredbnost',
            and: 'I',
            or: 'Ili',
            stringOperators: [
                { name: '(nije postavljeno)', op: null },
                { name: 'Jednako', op: 0 },
                { name: 'Nije jednako', op: 1 },
                { name: 'Počinje sa', op: 6 },
                { name: 'Završava sa', op: 7 },
                { name: 'Sadrži', op: 8 },
                { name: 'Ne sadrži', op: 9 }
            ],
            numberOperators: [
                { name: '(nije postavljeno)', op: null },
                { name: 'Jednako', op: 0 },
                { name: 'Nije jednako', op: 1 },
                { name: 'Veće od', op: 2 },
                { name: 'Veće od ili jednako', op: 3 },
                { name: 'Manje od', op: 4 },
                { name: 'Manje od ili jednako', op: 5 }
            ],
            dateOperators: [
                { name: '(nije postavljeno)', op: null },
                { name: 'Jednako', op: 0 },
                { name: 'Pre', op: 4 },
                { name: 'Posle', op: 3 }
            ],
            booleanOperators: [
                { name: '(nije postavljeno)', op: null },
                { name: 'Jednako', op: 0 },
                { name: 'Nije jednako', op: 1 }
            ]
        }
    };
};
