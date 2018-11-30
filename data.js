/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.require(['Ext.data.*']);

Ext.onReady(function() {

    window.storeStatic = Ext.create('Ext.data.JsonStore', {
        fields: ['name',{name:'value', type: 'float'},{name:'base', type: 'float'},'years',{name:'nvalue', type: 'float'}],
        data: [{name:'Aluminuim',value:'1812'},{name:'Antimony',value:'13'},
        {name:'Cadmium',value:'30'},{name:'Chromium',value:'16'},{name:'Cobalt',value:'83'},{name:'Copper',value:'39'},
        {name:'Gold',value:'20'},{name:'Graphite',value:'65'},{name:'Indium',value:'19'},{name:'Lead',value:'20'},
        {name:'Manganese',value:'48'},{name:'Molybdenum',value:'42'},{name:'Nickel',value:'49'},{name:'Platinum',value:'361'},
        {name:'Phosphorus',value:'369'},{name:'Rare Earths',value:'846'},{name:'Silver',value:'23'},{name:'Tantalum',value:'164'},
        {name:'Tin',value:'20'},{name:'Titanium',value:'110'},{name:'Tungsten',value:'48'},{name:'Uranium',value:'102'},
        {name:'Yttrium',value:'61'},{name:'Zinc',value:'21'},{name:'Oil',value:'43'},
        {name:'Gas',value:'64'},{name:'Coal',value:'126'}]
    });    
    
    window.storeGrowth = Ext.create('Ext.data.JsonStore', {
        fields: ['name',{name:'value', type: 'float'},{name:'base', type: 'float'},'years',{name:'nvalue', type: 'float'}],
        data: [{name:'Aluminuim',value:'81'},{name:'Antimony',value:'10'},
        {name:'Cadmium',value:'25'},{name:'Chromium',value:'12'},{name:'Cobalt',value:'21'},{name:'Copper',value:'28'},
        {name:'Gold',value:'21'},{name:'Graphite',value:'23'},{name:'Indium',value:'13'},{name:'Lead',value:'15'},
        {name:'Manganese',value:'22'},{name:'Molybdenum',value:'20'},{name:'Nickel',value:'33'},{name:'Platinum',value:'108'},
        {name:'Phosphorus',value:'84'},{name:'Rare Earths',value:'78'},{name:'Silver',value:'18'},{name:'Tantalum',value:'58'},
        {name:'Tin',value:'17'},{name:'Titanium',value:'47'},{name:'Tungsten',value:'21'},{name:'Uranium',value:'32'},
        {name:'Yttrium',value:'13'},{name:'Zinc',value:'16'},{name:'Oil',value:'36'},
        {name:'Gas',value:'39'},{name:'Coal',value:'46'}]
    });    
    
    window.storeNegativeStatic = Ext.create('Ext.data.JsonStore', {
        fields: ['name',{name:'value', type: 'float'},{name:'base', type: 'float'},'years',{name:'nvalue', type: 'float'}],
        data: [{name:'Aluminuim',value:'1812'},{name:'Antimony',value:'13'},
        {name:'Cadmium',value:'30'},{name:'Chromium',value:'16'},{name:'Cobalt',value:'83'},{name:'Copper',value:'39'},
        {name:'Gold',value:'20'},{name:'Graphite',value:'65'},{name:'Indium',value:'19'},{name:'Lead',value:'20'},
        {name:'Manganese',value:'48'},{name:'Molybdenum',value:'42'},{name:'Nickel',value:'49'},{name:'Platinum',value:'361'},
        {name:'Phosphorus',value:'369'},{name:'Rare Earths',value:'846'},{name:'Silver',value:'23'},{name:'Tantalum',value:'164'},
        {name:'Tin',value:'20'},{name:'Titanium',value:'110'},{name:'Tungsten',value:'48'},{name:'Uranium',value:'102'},
        {name:'Yttrium',value:'61'},{name:'Zinc',value:'21'},{name:'Oil',value:'43'},
        {name:'Gas',value:'64'},{name:'Coal',value:'126'}]
    });    
    
    window.storeNegativeGrowth = Ext.create('Ext.data.JsonStore', {
        fields: ['name',{name:'value', type: 'float'},{name:'base', type: 'float'},'years',{name:'nvalue', type: 'float'}],
        data: [{name:'Aluminuim',value:'81'},{name:'Antimony',value:'10'},
        {name:'Cadmium',value:'25'},{name:'Chromium',value:'12'},{name:'Cobalt',value:'21'},{name:'Copper',value:'28'},
        {name:'Gold',value:'21'},{name:'Graphite',value:'23'},{name:'Indium',value:'13'},{name:'Lead',value:'15'},
        {name:'Manganese',value:'22'},{name:'Molybdenum',value:'20'},{name:'Nickel',value:'33'},{name:'Platinum',value:'108'},
        {name:'Phosphorus',value:'84'},{name:'Rare Earths',value:'78'},{name:'Silver',value:'18'},{name:'Tantalum',value:'58'},
        {name:'Tin',value:'17'},{name:'Titanium',value:'47'},{name:'Tungsten',value:'21'},{name:'Uranium',value:'32'},
        {name:'Yttrium',value:'13'},{name:'Zinc',value:'16'},{name:'Oil',value:'36'},
        {name:'Gas',value:'39'},{name:'Coal',value:'46'}]
    });    
    
    window.storeStaticBase = Ext.create('Ext.data.JsonStore', {
        fields: ['name',{name:'value', type: 'float'}],
        data: [{name:'Aluminuim',value:'1812'},{name:'Antimony',value:'13'},
        {name:'Cadmium',value:'30'},{name:'Chromium',value:'16'},{name:'Cobalt',value:'83'},{name:'Copper',value:'39'},
        {name:'Gold',value:'20'},{name:'Graphite',value:'65'},{name:'Indium',value:'19'},{name:'Lead',value:'20'},
        {name:'Manganese',value:'48'},{name:'Molybdenum',value:'42'},{name:'Nickel',value:'49'},{name:'Platinum',value:'361'},
        {name:'Phosphorus',value:'369'},{name:'Rare Earths',value:'846'},{name:'Silver',value:'23'},{name:'Tantalum',value:'164'},
        {name:'Tin',value:'20'},{name:'Titanium',value:'110'},{name:'Tungsten',value:'48'},{name:'Uranium',value:'102'},
        {name:'Yttrium',value:'61'},{name:'Zinc',value:'21'},{name:'Oil',value:'43'},
        {name:'Gas',value:'64'},{name:'Coal',value:'126'}]
    });    
    
    window.storeGrowthBase = Ext.create('Ext.data.JsonStore', {
        fields: ['name',{name:'value', type: 'float'}],
        data: [{name:'Aluminuim',value:'81'},{name:'Antimony',value:'10'},
        {name:'Cadmium',value:'25'},{name:'Chromium',value:'12'},{name:'Cobalt',value:'21'},{name:'Copper',value:'28'},
        {name:'Gold',value:'21'},{name:'Graphite',value:'23'},{name:'Indium',value:'13'},{name:'Lead',value:'15'},
        {name:'Manganese',value:'22'},{name:'Molybdenum',value:'20'},{name:'Nickel',value:'33'},{name:'Platinum',value:'108'},
        {name:'Phosphorus',value:'84'},{name:'Rare Earths',value:'78'},{name:'Silver',value:'18'},{name:'Tantalum',value:'58'},
        {name:'Tin',value:'17'},{name:'Titanium',value:'47'},{name:'Tungsten',value:'21'},{name:'Uranium',value:'32'},
        {name:'Yttrium',value:'13'},{name:'Zinc',value:'16'},{name:'Oil',value:'36'},
        {name:'Gas',value:'39'},{name:'Coal',value:'46'}]
    });    
    
    
    window.generateDataStatic = function(n)
    {
        var data = [],
            y = n-2011,
            i;
            
        
        for (i = 0; i < 27; i++) {
            var x  = storeStaticBase.getAt(i).data.value;
            data.push({
                name: storeStaticBase.getAt(i).data.name,
                value: ((x-y) > 0)?(x-y)*100/x : 0,
                base: x,
                years: ((x-y) > 0)?(x-y) + ' years more' : 'Depleted in ' + (2011 + x) + ' : ' + (y-x) + ' years ago'
            });
        }
        
        
        return data;
    };
    
    window.generateDataGrowth = function(n)
    {
        var data = [],
            y = n-2011,
            i;
            
        
        for (i = 0; i < 27; i++) {
            var x  = storeGrowthBase.getAt(i).data.value;
            data.push({
                name: storeGrowthBase.getAt(i).data.name,
                value: ((x-y) > 0)?(x-y)*100/x : 0,
                base: x,
                years: ((x-y) > 0)?(x-y) + ' years more' : 'Depleted in ' + (2011 + x) + ' : ' + (y-x) + ' years ago'
            });
        }
        
        return data;
    };
    
    window.generateNegativeDataStatic = function(n)
    {
        var data = [],
            y = n-2011,
            i;
            
        
        for (i = 0; i < 27; i++) {
            var x  = storeStaticBase.getAt(i).data.value;
            data.push({
                name: storeStaticBase.getAt(i).data.name,
                value: ((x-y) > 0)?(x-y)*-100/x : 0,
                nvalue: ((x-y) > 0)?(x-y)*100/x : 0,
                base: x,
                years: ((x-y) > 0)?(x-y) + ' years more' : 'Depleted in ' + (2011 + x) + ' : ' + (y-x) + ' years ago'
            });
        }
        
        
        return data;
    };
    
    window.generateNegativeDataGrowth = function(n)
    {
        var data = [],
            y = n-2011,
            i;
            
        
        for (i = 0; i < 27; i++) {
            var x  = storeGrowthBase.getAt(i).data.value;
            data.push({
                name: storeGrowthBase.getAt(i).data.name,
                value: ((x-y) > 0)?(x-y)*-100/x : 0,
                nvalue: ((x-y) > 0)?(x-y)*100/x : 0,
                base: x,
                years: ((x-y) > 0)?(x-y) + ' years more' : 'Depleted in ' + (2011 + x) + ' : ' + (y-x) + ' years ago'
            });
        }
        
        return data;
    };
    
});

