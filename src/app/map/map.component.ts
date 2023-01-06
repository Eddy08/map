import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
// import topology from '../../assets/world.topo.json';
// import worldMap from '@highcharts/map-collection/custom/world.geo.json';
import { worldmap } from './worldmap';
declare var require: any;
const HC_map = require('highcharts/modules/map');
const HC_exporting = require('highcharts/modules/exporting');
const HC_ce = require('highcharts-custom-events');

HC_map(Highcharts);


HC_exporting(Highcharts);
HC_ce(Highcharts);

Highcharts.setOptions({
  title: {
    style: {
      color: 'orange'
    }
  }
});

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
// Add HCView to ngAfteViewInit
  topology: Highcharts.TopoJSON =worldmap
  Highcharts = Highcharts;
 
  getGraticule = () => {
    const data = [];
  
    // Meridians
    for (let x = -180; x <= 180; x += 15) {
      data.push({
        geometry: {
          type: 'LineString',
          coordinates: x % 90 === 0 ? [
            [x, -90],
            [x, 0],
            [x, 90]
          ] : [
            [x, -80],
            [x, 80]
          ]
        }
      });
    }
  
    // Latitudes
    for (let y = -90; y <= 90; y += 10) {
      const coordinates = [];
      for (let x = -180; x <= 180; x += 5) {
        coordinates.push([x, y]);
      }
      data.push({
        geometry: {
          type: 'LineString',
          coordinates
        },
        lineWidth: y === 0 ? 2 : undefined
      });
    }
  
    return data;
  };
  
  map: Highcharts.Options = {
    chart: {
      map: this.topology,
    },

    title: {
      text: 'Airport density per country',
      floating: true,
      align: 'left',
      style: {
        textOutline: '2px white',
      },
    },

    subtitle: {
      text:
        'Source: <a href="http://www.citypopulation.de/en/world/bymap/airports/">citypopulation.de</a><br>' +
        'Click and drag to rotate globe<br>',
      floating: true,
      y: 34,
      align: 'left',
    },

    legend: {
      enabled: false,
    },

    mapNavigation: {
      enabled: true,
      enableDoubleClickZoomTo: true,
      buttonOptions: {
        verticalAlign: 'bottom',
      },
    },

    mapView: {
      maxZoom: 30,
      projection: {
        name: 'Orthographic',
        rotation: [60, -30],
      },
    },

    colorAxis: {
      tickPixelInterval: 100,
      minColor: '#BFCFAD',
      maxColor: '#31784B',
      max: 1000,
    },

    tooltip: {
      pointFormat: '{point.name}: {point.value}',
    },

    plotOptions: {
      series: {
        animation: {
          duration: 750,
        },
        clip: false,
      },
    }
    ,
    series: [{
      name: 'Graticule',
      id: 'graticule',
      type: 'mapline',
      data: this.getGraticule(),
      nullColor: 'rgba(0, 0, 0, 0.05)',
      accessibility: {
        enabled: false
      },
      enableMouseTracking: false
    }, {
      type:'line',
      joinBy: 'name',
      name: 'Airports per million km²',
      states: {
        hover: {
          color: '#a4edba',
          borderColor: '#333333'
        }
      },
      dataLabels: {
        enabled: false,
        format: '{point.name}'
      },
      
      accessibility: {
        exposeAsGroupOnly: true
      }
    }]
  
  };


  // Second Chart
  chartOptions: Highcharts.Options = {   
    chart: {
       type: "spline"
    },
    title: {
       text: "Monthly Average Temperature"
    },
    subtitle: {
       text: "Source: WorldClimate.com"
    },
    xAxis:{
       categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {          
       title:{
          text:"Temperature °C"
       } 
    },
    tooltip: {
       valueSuffix:" °C"
    },
    series: [
       {
          name: 'Tokyo',
          type:'line',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6]
       },
       {
          name: 'New York',
          type:'line',
          data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,24.1, 20.1, 14.1, 8.6, 2.5]
       },
       {
          name: 'Berlin',
          type:'line',
          data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
       },
       {
          name: 'London',
          type:'line',
          data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
       }
    ]
 };

    

}
