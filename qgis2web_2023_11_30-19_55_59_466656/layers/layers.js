var wms_layers = [];


        var lyr_openstreetmap_0 = new ol.layer.Tile({
            'title': 'open street map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UPVIIWonokromo_1 = new ol.format.GeoJSON();
var features_UPVIIWonokromo_1 = format_UPVIIWonokromo_1.readFeatures(json_UPVIIWonokromo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPVIIWonokromo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPVIIWonokromo_1.addFeatures(features_UPVIIWonokromo_1);
var lyr_UPVIIWonokromo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UPVIIWonokromo_1, 
                style: style_UPVIIWonokromo_1,
                interactive: true,
                title: '<img src="styles/legend/UPVIIWonokromo_1.png" /> UP VII Wonokromo'
            });
var format_hasilanalisis_2 = new ol.format.GeoJSON();
var features_hasilanalisis_2 = format_hasilanalisis_2.readFeatures(json_hasilanalisis_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hasilanalisis_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hasilanalisis_2.addFeatures(features_hasilanalisis_2);
var lyr_hasilanalisis_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hasilanalisis_2, 
                style: style_hasilanalisis_2,
                interactive: true,
    title: 'hasil analisis<br />\
    <img src="styles/legend/hasilanalisis_2_0.png" /> 500,000000000000000<br />\
    <img src="styles/legend/hasilanalisis_2_1.png" /> 1000,000000000000000<br />\
    <img src="styles/legend/hasilanalisis_2_2.png" /> 1500,000000000000000<br />\
    <img src="styles/legend/hasilanalisis_2_3.png" /> 2000,000000000000000<br />\
    <img src="styles/legend/hasilanalisis_2_4.png" /> 2500,000000000000000<br />\
    <img src="styles/legend/hasilanalisis_2_5.png" /> 3000,000000000000000<br />'
        });
var format_JaringanJalanUPVIIWonokromo_3 = new ol.format.GeoJSON();
var features_JaringanJalanUPVIIWonokromo_3 = format_JaringanJalanUPVIIWonokromo_3.readFeatures(json_JaringanJalanUPVIIWonokromo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalanUPVIIWonokromo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalanUPVIIWonokromo_3.addFeatures(features_JaringanJalanUPVIIWonokromo_3);
var lyr_JaringanJalanUPVIIWonokromo_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanJalanUPVIIWonokromo_3, 
                style: style_JaringanJalanUPVIIWonokromo_3,
                interactive: true,
                title: '<img src="styles/legend/JaringanJalanUPVIIWonokromo_3.png" /> Jaringan Jalan UP VII Wonokromo'
            });
var format_RumahSakit_4 = new ol.format.GeoJSON();
var features_RumahSakit_4 = format_RumahSakit_4.readFeatures(json_RumahSakit_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_4.addFeatures(features_RumahSakit_4);
var lyr_RumahSakit_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahSakit_4, 
                style: style_RumahSakit_4,
                interactive: true,
                title: '<img src="styles/legend/RumahSakit_4.png" /> Rumah Sakit'
            });
var format_Puskesmas_5 = new ol.format.GeoJSON();
var features_Puskesmas_5 = format_Puskesmas_5.readFeatures(json_Puskesmas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puskesmas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puskesmas_5.addFeatures(features_Puskesmas_5);
var lyr_Puskesmas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puskesmas_5, 
                style: style_Puskesmas_5,
                interactive: true,
                title: '<img src="styles/legend/Puskesmas_5.png" /> Puskesmas'
            });
var format_Posyandu_6 = new ol.format.GeoJSON();
var features_Posyandu_6 = format_Posyandu_6.readFeatures(json_Posyandu_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Posyandu_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Posyandu_6.addFeatures(features_Posyandu_6);
var lyr_Posyandu_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Posyandu_6, 
                style: style_Posyandu_6,
                interactive: true,
                title: '<img src="styles/legend/Posyandu_6.png" /> Posyandu'
            });

lyr_openstreetmap_0.setVisible(true);lyr_UPVIIWonokromo_1.setVisible(true);lyr_hasilanalisis_2.setVisible(true);lyr_JaringanJalanUPVIIWonokromo_3.setVisible(true);lyr_RumahSakit_4.setVisible(true);lyr_Puskesmas_5.setVisible(true);lyr_Posyandu_6.setVisible(true);
var layersList = [lyr_openstreetmap_0,lyr_UPVIIWonokromo_1,lyr_hasilanalisis_2,lyr_JaringanJalanUPVIIWonokromo_3,lyr_RumahSakit_4,lyr_Puskesmas_5,lyr_Posyandu_6];
lyr_UPVIIWonokromo_1.set('fieldAliases', {'Kode': 'Kode', 'Keterangan': 'Keterangan', 'Zona': 'Zona', 'Sub_Zona': 'Sub_Zona', 'Kawasan': 'Kawasan', 'Sub_UP': 'Sub_UP', 'UP': 'UP', 'Blok': 'Blok', 'Luas': 'Luas', });
lyr_hasilanalisis_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cost_level': 'cost_level', });
lyr_JaringanJalanUPVIIWonokromo_3.set('fieldAliases', {'Status': 'Status', 'Nama': 'Nama', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Panjang': 'Panjang', 'UP': 'UP', });
lyr_RumahSakit_4.set('fieldAliases', {'id': 'id', 'Status': 'Status', 'Jangkauan': 'Jangkauan', });
lyr_Puskesmas_5.set('fieldAliases', {'id': 'id', 'Status': 'Status', 'Jangkauan': 'Jangkauan', });
lyr_Posyandu_6.set('fieldAliases', {'id': 'id', 'Status': 'Status', 'Jangkauan': 'Jangkauan', });
lyr_UPVIIWonokromo_1.set('fieldImages', {'Kode': '', 'Keterangan': '', 'Zona': '', 'Sub_Zona': '', 'Kawasan': '', 'Sub_UP': '', 'UP': '', 'Blok': '', 'Luas': '', });
lyr_hasilanalisis_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cost_level': 'TextEdit', });
lyr_JaringanJalanUPVIIWonokromo_3.set('fieldImages', {'Status': '', 'Nama': '', 'Keterangan': '', 'Sumber': '', 'Panjang': '', 'UP': '', });
lyr_RumahSakit_4.set('fieldImages', {'id': 'TextEdit', 'Status': 'TextEdit', 'Jangkauan': 'TextEdit', });
lyr_Puskesmas_5.set('fieldImages', {'id': 'TextEdit', 'Status': 'TextEdit', 'Jangkauan': 'TextEdit', });
lyr_Posyandu_6.set('fieldImages', {'id': 'TextEdit', 'Status': 'TextEdit', 'Jangkauan': 'TextEdit', });
lyr_UPVIIWonokromo_1.set('fieldLabels', {'Kode': 'no label', 'Keterangan': 'no label', 'Zona': 'no label', 'Sub_Zona': 'no label', 'Kawasan': 'no label', 'Sub_UP': 'no label', 'UP': 'no label', 'Blok': 'no label', 'Luas': 'no label', });
lyr_hasilanalisis_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cost_level': 'inline label', });
lyr_JaringanJalanUPVIIWonokromo_3.set('fieldLabels', {'Status': 'inline label', 'Nama': 'header label', 'Keterangan': 'inline label', 'Sumber': 'no label', 'Panjang': 'no label', 'UP': 'no label', });
lyr_RumahSakit_4.set('fieldLabels', {'id': 'no label', 'Status': 'inline label', 'Jangkauan': 'inline label', });
lyr_Puskesmas_5.set('fieldLabels', {'id': 'no label', 'Status': 'inline label', 'Jangkauan': 'inline label', });
lyr_Posyandu_6.set('fieldLabels', {'id': 'no label', 'Status': 'inline label', 'Jangkauan': 'inline label', });
lyr_Posyandu_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});