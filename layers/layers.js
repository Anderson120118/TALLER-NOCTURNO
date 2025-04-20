ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-77.697609, -12.242545, -76.765054, -11.641672]);
var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_GEOLOGIAaDELCALLAO_1 = new ol.format.GeoJSON();
var features_GEOLOGIAaDELCALLAO_1 = format_GEOLOGIAaDELCALLAO_1.readFeatures(json_GEOLOGIAaDELCALLAO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GEOLOGIAaDELCALLAO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGIAaDELCALLAO_1.addFeatures(features_GEOLOGIAaDELCALLAO_1);
var lyr_GEOLOGIAaDELCALLAO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGIAaDELCALLAO_1, 
                style: style_GEOLOGIAaDELCALLAO_1,
                popuplayertitle: 'GEOLOGIAa DEL CALLAO',
                interactive: true,
    title: 'GEOLOGIAa DEL CALLAO<br />\
    <img src="styles/legend/GEOLOGIAaDELCALLAO_1_0.png" /> C_poblados<br />\
    <img src="styles/legend/GEOLOGIAaDELCALLAO_1_1.png" /> C-d<br />\
    <img src="styles/legend/GEOLOGIAaDELCALLAO_1_2.png" /> Ll-a<br />\
    <img src="styles/legend/GEOLOGIAaDELCALLAO_1_3.png" /> Llo-b<br />\
    <img src="styles/legend/GEOLOGIAaDELCALLAO_1_4.png" /> Vc-d<br />' });

lyr_EsriTopographic_0.setVisible(true);lyr_GEOLOGIAaDELCALLAO_1.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_GEOLOGIAaDELCALLAO_1];
lyr_GEOLOGIAaDELCALLAO_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SIMBOLO_': 'SIMBOLO_', 'REGION': 'REGION', 'FORMAS_DEL': 'FORMAS_DEL', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_GEOLOGIAaDELCALLAO_1.set('fieldImages', {'OBJECTID': 'Hidden', 'SIMBOLO_': 'TextEdit', 'REGION': 'Hidden', 'FORMAS_DEL': 'Hidden', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_GEOLOGIAaDELCALLAO_1.set('fieldLabels', {'SIMBOLO_': 'inline label - always visible', 'Area': 'inline label - always visible', 'Perimetro': 'inline label - always visible', });
lyr_GEOLOGIAaDELCALLAO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});