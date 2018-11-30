Ext.require([
    'Ext.form.*',
    'Ext.data.*',
    'Ext.chart.*',
    'Ext.grid.Panel',
    'Ext.layout.container.Column',
    'Ext.slider.*',
    'Ext.draw.*'
]);


Ext.onReady(function(){
    
    //use a renderer for values in the data view.
    function perc(v) {
        return v + '%';
    }

    var bd = 'mycreation';//Ext.getBody();
    storeStatic.loadData(generateDataStatic(2011));
    storeGrowth.loadData(generateDataGrowth(2011));
    storeNegativeStatic.loadData(generateNegativeDataStatic(2011));
    storeNegativeGrowth.loadData(generateNegativeDataGrowth(2011));

    //create a bar series to be at the top of the panel.
    var barChart = Ext.create('Ext.chart.Chart', {
       xtype: 'chart',
            animate: true,
            shadow: true,
            store: storeStatic,
            height:450,
           
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['value'],
                grid: true,
                minimum: 0,
                maximum: 100,
                title: 'Resources Left (% wrt 2011)',
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                label: {
                    rotate: {
                        degrees: 270
                    }
                },
                tips: {
                    trackMouse: true,
                    width: 124,
                    height: 80,
                    renderer: function(storeItem, item) {
                        this.setTitle('<p align="center"><div style="font-size:18px;top:0px;position:absolute;">' + storeItem.get('name') + '</div><br/>' + storeItem.get('years') + ' </p>');
                    }
                }
            }],
            series: [{
                type: 'column',
                axis: 'left',
                gutter: 80,
                xField: 'name',
                yField: ['value'], 
                label: {
                    display: 'insideEnd',
                    field: 'years',
                    orientation: 'horizontal',
                    color: '#333',
                    'text-anchor': 'middle',
                    contrast: true,
                    rotate: {
                        degrees: 270
                    }
                },
                tips: {
                    trackMouse: true,
                    width: 124,
                    height: 80,
                    renderer: function(storeItem, item) {
                        this.setTitle('<p align="center"><div style="font-size:18px;top:0px;position:absolute;">' + storeItem.get('name') + '</div><br/>' + storeItem.get('years') + ' </p>');
                    }
                },
                style: {
                    fill: '#D0D02f'//'#38B8BF'
                }
            }]
    });
    
    var sprite = Ext.create('Ext.draw.Sprite', {
        type: 'image',
        src: 'resources/images/bkg.PNG'
    });
    
    
    //create a bar series to be at the top of the panel.
    var barChart2 = Ext.create('Ext.chart.Chart', {
       xtype: 'chart',
            animate: true,
            shadow: true,
            store: storeGrowth,
            height:450,
            
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['value'],
                grid: {
                    true:{
                    stroke:'#fff'
                    }
                },
                minimum: 0,
                maximum: 100,
                title: 'Resources Left (% wrt 2011)',
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                label: {
                    rotate: {
                        degrees: 270
                    }
                }
            }],
            series: [{
                type: 'column',
                axis: 'left',
                gutter: 80,
                xField: 'name',
                yField: ['value'],
                label: {
                    display: 'insideEnd',
                    field: 'years',
                    //renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'horizontal',
                    color: '#333',
                    'text-anchor': 'middle',
                    contrast: true,
                    rotate: {
                        degrees: 270
                    }
                },
                tips: {
                    trackMouse: true,
                    width: 124,
                    height: 60,
                    renderer: function(storeItem, item) {
                        this.setTitle('<p align="center"><div style="font-size:18px;top:0px;position:absolute;">' + storeItem.get('name') + '</div><br/>' + storeItem.get('years') + ' </p>');
                    }
                },
                style: {
                    fill: '#D0D02f'
                }
            }]
    });
    
    //disable highlighting by default.
    barChart.series.get(0).highlight = false;
    
    /*
     * Here is where we create the Form
     */
    var sli = Ext.create('Ext.slider.Single', {
       
        value: 2011,
        minValue: 2011,
        maxValue: 2111,
            listeners: {
            
                'change': function(slider, newValue, thumb, eOpts) {
                     //var selectionModel = gridPanel.getSelectionModel();
                     
                     
                     //selectionModel.select(newValue);
                     storeStatic.loadData(generateDataStatic(newValue));
                     storeGrowth.loadData(generateDataGrowth(newValue));
                     yearText.setText('In the year ' + newValue);
                }
            },
    });
    
   var yearText = Ext.create('Ext.toolbar.TextItem', {
        text: 'In the year 2011',
        margin: '1 0 5 0'
   });
   
    var gridForm = Ext.create('Ext.form.Panel', {
        title: 'What will be left of Earth\'s non-renewable resources?',
        frame: true,
        bodyPadding: 5,
        width: 98%,
        height: 920,

        fieldDefaults: {
            labelAlign: 'left',
            msgTarget: 'side'
        },
    
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        
        items: [
        yearText,sli,
        {
            xtype:'tbtext',
            text: 'Production remains static at current rates',
            margin: '8 0 2 0'
        },
            {
                height: 360,
                layout: 'fit',
                margin: '0 0 3 0',
                items: [barChart]
            },
            {
        xtype:'tbtext',
        text: 'Production continues to grow at current rates',
        margin: '10 0 1 0',
        height: 25
        },
            {
                height: 360,
                layout: 'fit',
                margin: '0 0 3 0',
                items: [barChart2]
            }
            ],
        renderTo: 'mycreation'
    });

    //////////////
    //create a bar series to be at the top of the panel.
    var barChartN = Ext.create('Ext.chart.Chart', {
       xtype: 'chart',
            animate: true,
            shadow: true,
            store: storeNegativeStatic,
            height:450,
           
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['nvalue'],
                grid: true,
                minimum: -100,
                maximum: 0,
                title: 'Resources Left (% wrt 2011)',
            }, {
                type: 'Category',
                position: 'top',
                fields: ['name'],
                label: {
                    rotate: {
                        degrees: 270
                    }
                },
                tips: {
                    trackMouse: true,
                    width: 124,
                    height: 80,
                    renderer: function(storeItem, item) {
                        this.setTitle('<p align="center"><div style="font-size:18px;top:0px;position:absolute;">' + storeItem.get('name') + '</div><br/>' + storeItem.get('years') + ' </p>');
                    }
                }
            }],
            series: [{
                type: 'column',
                axis: 'left',
                gutter: 80,
                xField: 'name',
                yField: ['value'], 
                label: {
                    display: 'outside',
                    field: 'years',
                    orientation: 'horizontal',
                    color: '#333',
                    'text-anchor': 'middle',
                    contrast: true,
                    rotate: {
                        degrees: 270
                    }
                },
                tips: {
                    trackMouse: true,
                    width: 124,
                    height: 80,
                    renderer: function(storeItem, item) {
                        this.setTitle('<p align="center"><div style="font-size:18px;top:0px;position:absolute;">' + storeItem.get('name') + '</div><br/>' + storeItem.get('years') + ' </p>');
                    }
                },
                style: {
                    fill: '#D0D02f'//'#38B8BF'
                }
            }]
    });
    
    var spriteN = Ext.create('Ext.draw.Sprite', {
        type: 'image',
        src: 'resources/images/bkg.PNG'
    });
    
    
    //create a bar series to be at the top of the panel.
    var barChart2N = Ext.create('Ext.chart.Chart', {
       xtype: 'chart',
            animate: true,
            shadow: true,
            store: storeNegativeGrowth,
            height:450,
            
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['nvalue'],
                grid: {
                    true:{
                    stroke:'#ddd'
                    }

                },
                minimum: -100,
                maximum: 0,
                title: 'Resources Left (% wrt 2011)',
            }, {
                type: 'Category',
                position: 'top',
                fields: ['name'],
                label: {
                    rotate: {
                        degrees: 270
                    }
                }
            }],
            series: [{
                type: 'column',
                axis: 'left',
                gutter: 80,
                xField: 'name',
                yField: ['value'],
                label: {
                    display: 'outside',
                    field: 'years',
                    //renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'horizontal',
                    color: '#333',
                    'text-anchor': 'middle',
                    contrast: true,
                    rotate: {
                        degrees: 270
                    }
                },
                tips: {
                    trackMouse: true,
                    width: 124,
                    height: 60,
                    renderer: function(storeItem, item) {
                        this.setTitle('<p align="center"><div style="font-size:18px;top:0px;position:absolute;">' + storeItem.get('name') + '</div><br/>' + storeItem.get('years') + ' </p>');
                    }
                },
                style: {
                    fill: '#D0D02f'
                }
            }]
    });
    
    //disable highlighting by default.
    barChartN.series.get(0).highlight = false;
    
    /*
     * Here is where we create the Form
     */
    var sliN = Ext.create('Ext.slider.Single', {
       
        value: 2011,
        minValue: 2011,
        maxValue: 2111,
            listeners: {
            
                'change': function(sliderN, newValue, thumb, eOpts) {
                     //var selectionModel = gridPanel.getSelectionModel();
                     
                     
                     //selectionModel.select(newValue);
                     storeNegativeStatic.loadData(generateNegativeDataStatic(newValue));
                     storeNegativeGrowth.loadData(generateNegativeDataGrowth(newValue));
                     yearText.setText('In the year ' + newValue);
                }
            },
    });
    
   var yearTextN = Ext.create('Ext.toolbar.TextItem', {
        text: 'In the year 2011',
        margin: '1 0 5 0'
   });
   
    var gridFormN = Ext.create('Ext.form.Panel', {
        title: 'What will be left of Earth\'s non-renewable resources?',
        frame: true,
        bodyPadding: 5,
        width: 1024,
        height: 920,

        fieldDefaults: {
            labelAlign: 'left',
            msgTarget: 'side'
        },
    
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        
        items: [
        yearTextN,sliN,
        {
            xtype:'tbtext',
            text: 'Production remains static at current rates',
            margin: '8 0 2 0'
        },
            {
                height: 360,
                layout: 'fit',
                margin: '0 0 3 0',
                items: [barChartN]
            },
            {
        xtype:'tbtext',
        text: 'Production continues to grow at current rates',
        margin: '10 0 1 0',
        height: 25
        },
            {
                height: 360,
                layout: 'fit',
                margin: '0 0 3 0',
                items: [barChart2N]
            }
            ],
        renderTo: 'mycreation2'
    });

    
});
