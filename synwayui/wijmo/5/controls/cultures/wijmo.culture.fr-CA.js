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
* Wijmo culture file: fr-CA (French (Canada))
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            numberFormat: {
                '.': ',',
                ',': ' ',
                percent: { pattern: ['-n %', 'n %'] },
                currency: { decimals: 2, symbol: '$', pattern: ['(n $)', 'n $'] }
            },
            calendar: {
                '/': '-',
                ':': ':',
                firstDay: 0,
                days: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
                daysAbbr: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
                months: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
                monthsAbbr: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
                am: ['', ''],
                pm: ['', ''],
                eras: ['ap. J.-C.'],
                patterns: {
                    d: 'yyyy-MM-dd', D: 'd MMMM yyyy',
                    f: 'd MMMM yyyy HH:mm', F: 'd MMMM yyyy HH:mm:ss',
                    t: 'HH:mm', T: 'HH:mm:ss',
                    m: 'd MMMM', M: 'd MMMM',
                    y: 'MMMM, yyyy', Y: 'MMMM, yyyy',
                    g: 'yyyy-MM-dd HH:mm', G: 'yyyy-MM-dd HH:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                }
            }
        },
        MultiSelect: {
            itemsSelected: '{count:n0} articles sélectionnés'
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} articles)'
        },
        FlexGridFilter: {
            // filter
            ascending: '\u2191 Croissant',
            descending: '\u2193 Décroissant',
            apply: 'Appliquer',
            clear: 'Effacer',
            conditions: 'Filtrer par état',
            values: 'Filtrer par valeur',
            // value filter
            search: 'Rechercher',
            selectAll: 'Sélectionner tous les éléments',
            null: '(rien)',
            // condition filter
            header: 'Afficher les articles où la valeur',
            and: 'Et',
            or: 'Ou',
            stringOperators: [
                { name: '(non défini)', op: null },
                { name: 'Est égale à', op: 0 },
                { name: 'N\’est pas égale à', op: 1 },
                { name: 'Commence par', op: 6 },
                { name: 'Se termine par', op: 7 },
                { name: 'Contient', op: 8 },
                { name: 'Ne contient pas', op: 9 }
            ],
            numberOperators: [
                { name: '(non défini)', op: null },
                { name: 'Est égale à', op: 0 },
                { name: 'N\’est pas égale à', op: 1 },
                { name: 'Est supérieure à', op: 2 },
                { name: 'Est supérieure ou égale à', op: 3 },
                { name: 'Est inférieure à', op: 4 },
                { name: 'Est inférieure ou égale à', op: 5 }
            ],
            dateOperators: [
                { name: '(non défini)', op: null },
                { name: 'Est égale à', op: 0 },
                { name: 'Est avant', op: 4 },
                { name: 'Est après', op: 3 }
            ],
            booleanOperators: [
                { name: '(non défini)', op: null },
                { name: 'Est égale à', op: 0 },
                { name: 'N\’est pas égale à', op: 1 }
            ]
        }
    };
})(wijmo || (wijmo = {}));
;
//# sourceMappingURL=wijmo.culture.fr-CA.js.map

