import { Component } from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';
import * as hc3d from 'highcharts/highcharts-3d';
import * as worldMap from '@highcharts/map-collection/custom/world-continents.topo.json';
// import topology from '../../assets/world.topo.json';
// import worldMap from '@highcharts/map-collection/custom/world.geo.json';
declare var require: any;
// const HC_map = require('highcharts/modules/map');
const HC_exporting = require('highcharts/modules/exporting');
// const HC_ce = require('highcharts-custom-events');
import custom_events from 'highcharts-custom-events';
const accessibility=require('highcharts/modules/accessibility')
accessibility(Highcharts)
const HC_3d = require('highcharts/highcharts-3d');

HC_3d(Highcharts);
// HC_map(Highcharts);

HC_exporting(Highcharts);
custom_events(Highcharts);

Highcharts.setOptions({
  title: {
    style: {
      color: 'orange',
    },
  },
});

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  // Add HCView to ngAfteViewInit
  chartConstructor = 'mapChart';
  mapData = [
    {
      name: 'United States of America',
      value: 1477,
    },
    {
      name: 'Brazil',
      value: 490,
    },
    {
      name: 'Mexico',
      value: 882,
    },
    {
      name: 'Canada',
      value: 161,
    },
    {
      name: 'Russia',
      value: 74,
    },
    {
      name: 'Argentina',
      value: 416,
    },
    {
      name: 'Bolivia',
      value: 789,
    },
    {
      name: 'Colombia',
      value: 805,
    },
    {
      name: 'Paraguay',
      value: 2011,
    },
    {
      name: 'Indonesia',
      value: 372,
    },
    {
      name: 'South Africa',
      value: 466,
    },
    {
      name: 'Papua New Guinea',
      value: 1239,
    },
    {
      name: 'Germany',
      value: 1546,
    },
    {
      name: 'China',
      value: 54,
    },
    {
      name: 'Chile',
      value: 647,
    },
    {
      name: 'Australia',
      value: 62,
    },
    {
      name: 'France',
      value: 844,
    },
    {
      name: 'United Kingdom',
      value: 1901,
    },
    {
      name: 'Venezuela',
      value: 503,
    },
    {
      name: 'Ecuador',
      value: 1560,
    },
    {
      name: 'India',
      value: 116,
    },
    {
      name: 'Iran',
      value: 208,
    },
    {
      name: 'Guatemala',
      value: 2716,
    },
    {
      name: 'Philippines',
      value: 828,
    },
    {
      name: 'Sweden',
      value: 563,
    },
    {
      name: 'Saudi Arabia',
      value: 100,
    },
    {
      name: 'Democratic Republic of the Congo',
      value: 87,
    },
    {
      name: 'Kenya',
      value: 346,
    },
    {
      name: 'Zimbabwe',
      value: 507,
    },
    {
      name: 'Peru',
      value: 149,
    },
    {
      name: 'Ukraine',
      value: 323,
    },
    {
      name: 'Angola',
      value: 141,
    },
    {
      name: 'Japan',
      value: 480,
    },
    {
      name: 'United Republic of Tanzania',
      value: 187,
    },
    {
      name: 'Costa Rica',
      value: 3153,
    },
    {
      name: 'Algeria',
      value: 66,
    },
    {
      name: 'Pakistan',
      value: 196,
    },
    {
      name: 'Spain',
      value: 301,
    },
    {
      name: 'Finland',
      value: 487,
    },
    {
      name: 'Nicaragua',
      value: 1225,
    },
    {
      name: 'Libya',
      value: 83,
    },
    {
      name: 'Cuba',
      value: 1211,
    },
    {
      name: 'Uruguay',
      value: 760,
    },
    {
      name: 'Oman',
      value: 426,
    },
    {
      name: 'Italy',
      value: 439,
    },
    {
      name: 'Czech Republic',
      value: 1657,
    },
    {
      name: 'Poland',
      value: 414,
    },
    {
      name: 'New Zealand',
      value: 465,
    },
    {
      name: 'Guyana',
      value: 594,
    },
    {
      name: 'Panama',
      value: 1574,
    },
    {
      name: 'Malaysia',
      value: 347,
    },
    {
      name: 'Namibia',
      value: 136,
    },
    {
      name: 'South Korea',
      value: 1145,
    },
    {
      name: 'Honduras',
      value: 921,
    },
    {
      name: 'Iraq',
      value: 233,
    },
    {
      name: 'Thailand',
      value: 198,
    },
    {
      name: 'Mozambique',
      value: 125,
    },
    {
      name: 'Turkey',
      value: 127,
    },
    {
      name: 'Iceland',
      value: 958,
    },
    {
      name: 'Kazakhstan',
      value: 36,
    },
    {
      name: 'Norway',
      value: 312,
    },
    {
      name: 'Syria',
      value: 484,
    },
    {
      name: 'Zambia',
      value: 118,
    },
    {
      name: 'South Sudan',
      value: 132,
    },
    {
      name: 'Egypt',
      value: 83,
    },
    {
      name: 'Madagascar',
      value: 143,
    },
    {
      name: 'North Korea',
      value: 681,
    },
    {
      name: 'Denmark',
      value: 1885,
    },
    {
      name: 'Greece',
      value: 589,
    },
    {
      name: 'Botswana',
      value: 131,
    },
    {
      name: 'Sudan',
      value: 43,
    },
    {
      name: 'Croatia',
      value: 1233,
    },
    {
      name: 'Bulgaria',
      value: 627,
    },
    {
      name: 'El Salvador',
      value: 3282,
    },
    {
      name: 'Belarus',
      value: 320,
    },
    {
      name: 'Myanmar',
      value: 98,
    },
    {
      name: 'Portugal',
      value: 700,
    },
    {
      name: 'Switzerland',
      value: 1575,
    },
    {
      name: 'The Bahamas',
      value: 6094,
    },
    {
      name: 'Lithuania',
      value: 973,
    },
    {
      name: 'Somalia',
      value: 97,
    },
    {
      name: 'Chad',
      value: 47,
    },
    {
      name: 'Ethiopia',
      value: 52,
    },
    {
      name: 'Yemen',
      value: 108,
    },
    {
      name: 'Morocco',
      value: 123,
    },
    {
      name: 'Suriname',
      value: 353,
    },
    {
      name: 'French Polynesia',
      value: 14110,
    },
    {
      name: 'Nigeria',
      value: 59,
    },
    {
      name: 'Uzbekistan',
      value: 125,
    },
    {
      name: 'Afghanistan',
      value: 80,
    },
    {
      name: 'Austria',
      value: 631,
    },
    {
      name: 'Belize',
      value: 2061,
    },
    {
      name: 'Israel',
      value: 2186,
    },
    {
      name: 'Nepal',
      value: 328,
    },
    {
      name: 'Uganda',
      value: 238,
    },
    {
      name: 'Romania',
      value: 196,
    },
    {
      name: 'Vietnam',
      value: 145,
    },
    {
      name: 'Gabon',
      value: 171,
    },
    {
      name: 'Mongolia',
      value: 28,
    },
    {
      name: 'United Arab Emirates',
      value: 514,
    },
    {
      name: 'Latvia',
      value: 675,
    },
    {
      name: 'Belgium',
      value: 1354,
    },
    {
      name: 'Hungary',
      value: 458,
    },
    {
      name: 'Laos',
      value: 178,
    },
    {
      name: 'Ireland',
      value: 581,
    },
    {
      name: 'Central African Republic',
      value: 63,
    },
    {
      name: 'Azerbaijan',
      value: 448,
    },
    {
      name: 'Taiwan',
      value: 1147,
    },
    {
      name: 'Dominican Republic',
      value: 745,
    },
    {
      name: 'Solomon Islands',
      value: 1286,
    },
    {
      name: 'Slovakia',
      value: 728,
    },
    {
      name: 'Cameroon',
      value: 70,
    },
    {
      name: 'Malawi',
      value: 340,
    },
    {
      name: 'Vanuatu',
      value: 2543,
    },
    {
      name: 'Mauritania',
      value: 29,
    },
    {
      name: 'Niger',
      value: 24,
    },
    {
      name: 'Liberia',
      value: 301,
    },
    {
      name: 'Netherlands',
      value: 856,
    },
    {
      name: 'Puerto Rico',
      value: 3237,
    },
    {
      name: 'Tunisia',
      value: 187,
    },
    {
      name: 'Fiji',
      value: 1532,
    },
    {
      name: 'Jamaica',
      value: 2585,
    },
    {
      name: 'Kyrgyzstan',
      value: 146,
    },
    {
      name: 'Republic of the Congo',
      value: 79,
    },
    {
      name: 'Ivory Coast',
      value: 85,
    },
    {
      name: 'Republic of Serbia',
      value: 336,
    },
    {
      name: 'Turkmenistan',
      value: 55,
    },
    {
      name: 'Mali',
      value: 20,
    },
    {
      name: 'New Caledonia',
      value: 1368,
    },
    {
      name: 'Bosnia and Herzegovina',
      value: 469,
    },
    {
      name: 'Lesotho',
      value: 791,
    },
    {
      name: 'Tajikistan',
      value: 170,
    },
    {
      name: 'Antarctica',
      value: 2,
    },
    {
      name: 'Burkina Faso',
      value: 84,
    },
    {
      name: 'Georgia',
      value: 316,
    },
    {
      name: 'Senegal',
      value: 104,
    },
    {
      name: 'Kiribati',
      value: 23428,
    },
    {
      name: 'Sri Lanka',
      value: 294,
    },
    {
      name: 'Bangladesh',
      value: 138,
    },
    {
      name: 'Estonia',
      value: 425,
    },
    {
      name: 'Jordan',
      value: 203,
    },
    {
      name: 'Cambodia',
      value: 91,
    },
    {
      name: 'Guinea',
      value: 65,
    },
    {
      name: 'Slovenia',
      value: 794,
    },
    {
      name: 'Northern Cyprus',
      value: 1623,
    },
    {
      name: 'Greenland',
      value: 7,
    },
    {
      name: 'Marshall Islands',
      value: 82873,
    },
    {
      name: 'Swaziland',
      value: 814,
    },
    {
      name: 'Haiti',
      value: 508,
    },
    {
      name: 'Seychelles',
      value: 30769,
    },
    {
      name: 'Djibouti',
      value: 561,
    },
    {
      name: 'Eritrea',
      value: 129,
    },
    {
      name: 'Armenia',
      value: 390,
    },
    {
      name: 'Cook Islands',
      value: 46610,
    },
    {
      name: 'Ghana',
      value: 44,
    },
    {
      name: 'Macedonia',
      value: 393,
    },
    {
      name: 'Cape Verde',
      value: 2232,
    },
    {
      name: 'Maldives',
      value: 30201,
    },
    {
      name: 'Singapore',
      value: 12690,
    },
    {
      name: 'Guinea Bissau',
      value: 284,
    },
    {
      name: 'Lebanon',
      value: 782,
    },
    {
      name: 'Sierra Leone',
      value: 112,
    },
    {
      name: 'Togo',
      value: 147,
    },
    {
      name: 'Turks and Caicos Islands',
      value: 8439,
    },
    {
      name: 'Burundi',
      value: 273,
    },
    {
      name: 'Equatorial Guinea',
      value: 250,
    },
    {
      name: 'Falkland Islands',
      value: 575,
    },
    {
      name: 'Kuwait',
      value: 393,
    },
    {
      name: 'Moldova',
      value: 213,
    },
    {
      name: 'Rwanda',
      value: 284,
    },
    {
      name: 'Benin',
      value: 54,
    },
    {
      name: 'East Timor',
      value: 403,
    },
    {
      name: 'Kosovo',
      value: 551,
    },
    {
      name: 'Micronesia',
      value: 8547,
    },
    {
      name: 'Qatar',
      value: 518,
    },
    {
      name: 'Saint Vincent and the Grenadines',
      value: 15424,
    },
    {
      name: 'Tonga',
      value: 8368,
    },
    {
      name: 'Western Sahara',
      value: 23,
    },
    {
      name: 'Guam',
      value: 9191,
    },
    {
      name: 'Mauritius',
      value: 2463,
    },
    {
      name: 'Montenegro',
      value: 372,
    },
    {
      name: 'Northern Mariana Islands',
      value: 10776,
    },
    {
      name: 'Albania',
      value: 146,
    },
    {
      name: 'Bahrain',
      value: 5263,
    },
    {
      name: 'British Virgin Islands',
      value: 26490,
    },
    {
      name: 'Comoros',
      value: 1790,
    },
    {
      name: 'French Southern and Antarctic Lands',
      value: 522,
    },
    {
      name: 'Samoa',
      value: 1418,
    },
    {
      name: 'Spratly Islands',
      value: 800000,
    },
    {
      name: 'Svalbard',
      value: 64,
    },
    {
      name: 'Trinidad and Tobago',
      value: 780,
    },
    {
      name: 'American Samoa',
      value: 13393,
    },
    {
      name: 'Antigua and Barbuda',
      value: 6778,
    },
    {
      name: 'Cayman Islands',
      value: 11364,
    },
    {
      name: 'Grenada',
      value: 8721,
    },
    {
      name: 'Palau',
      value: 6536,
    },
    {
      name: 'Palestinian Territories',
      value: 500,
    },
    {
      name: 'Anguilla',
      value: 21978,
    },
    {
      name: 'Bhutan',
      value: 52,
    },
    {
      name: 'Dominica',
      value: 2663,
    },
    {
      name: 'Guernsey',
      value: 25608,
    },
    {
      name: 'Hong Kong',
      value: 1864,
    },
    {
      name: 'Luxembourg',
      value: 773,
    },
    {
      name: 'Saint Kitts and Nevis',
      value: 7663,
    },
    {
      name: 'Saint Lucia',
      value: 3300,
    },
    {
      name: 'Saint Pierre and Miquelon',
      value: 8264,
    },
    {
      name: 'São Tomé and Príncipe',
      value: 2075,
    },
    {
      name: 'Virgin Islands of the U.S.',
      value: 5780,
    },
    {
      name: 'Wallis and Futuna',
      value: 14085,
    },
    {
      name: 'Aruba',
      value: 5556,
    },
    {
      name: 'Barbados',
      value: 2326,
    },
    {
      name: 'Bermuda',
      value: 18657,
    },
    {
      name: 'British Indian Ocean Territory',
      value: 16667,
    },
    {
      name: 'Brunei',
      value: 190,
    },
    {
      name: 'Faroe Islands',
      value: 718,
    },
    {
      name: 'Gambia',
      value: 99,
    },
    {
      name: 'Gibraltar',
      value: 153846,
    },
    {
      name: 'Jan Mayen',
      value: 2653,
    },
    {
      name: 'Jersey',
      value: 8621,
    },
    {
      name: 'Macau',
      value: 35461,
    },
    {
      name: 'Malta',
      value: 3165,
    },
    {
      name: 'Isle of Man',
      value: 1748,
    },
    {
      name: 'Montserrat',
      value: 9804,
    },
    {
      name: 'Nauru',
      value: 47170,
    },
    {
      name: 'Niue',
      value: 3846,
    },
    {
      name: 'Paracel Islands',
      value: 129032,
    },
    {
      name: 'Saint Barthelemy',
      value: 40000,
    },
    {
      name: 'Saint Helena, Ascension and Tristan da Cunha',
      value: 2538,
    },
    {
      name: 'Saint Martin',
      value: 18382,
    },
    {
      name: 'Sint Maarten',
      value: 29412,
    },
    {
      name: 'Tuvalu',
      value: 39063,
    },
    {
      name: 'Wake Island',
      value: 153846,
    },
  ];
  topology: Highcharts.TopoJSON = worldMap;
  Highcharts = Highcharts;

  getGraticule = () => {
    const data = [];

    // Meridians
    for (let x = -180; x <= 180; x += 15) {
      data.push({
        geometry: {
          type: 'LineString',
          coordinates:
            x % 90 === 0
              ? [
                  [x, -90],
                  [x, 0],
                  [x, 90],
                ]
              : [
                  [x, -80],
                  [x, 80],
                ],
        },
      });

      return data;
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
          coordinates,
        },
        lineWidth: y === 0 ? 2 : undefined,
      });
    }

    return data;
  };

  map: Highcharts.Options = {
    chart: {
      map: this.topology,
    },

    title: {
      text: 'World Wide Login',
      floating: true,
      align: 'left',
      style: {
        textOutline: '2px white',
      },
    },

    subtitle: {
      text:
        'Source: <a href="https://mfe-login-app.vercel.app/">Login Application</a><br>' +
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
    },
    series: [
      {
        name: 'Graticule',
        id: 'graticule',
        type: 'mapline',
        data: this.getGraticule(),
        //Map Color where the globe is joint
        nullColor: 'rgba(0, 0, 0, 0.05)',
        accessibility: {
          enabled: true,
        },
        enableMouseTracking: false,
      },
      {
        data: this.mapData,
        type: 'map',
        joinBy: 'name',
        name: 'Airports per million km²',
        states: {
          hover: {
            color: '#a4edba',
            borderColor: '#333333',
          },
        },
        dataLabels: {
          enabled: false,
          format: '{point.name}',
        },

        accessibility: {
          exposeAsGroupOnly: true,
        },
      },
    ],
  };
  /*
  // Second Chart
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'spline',
    },
    title: {
      text: 'Monthly Average Temperature',
    },
    subtitle: {
      text: 'Source: WorldClimate.com',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      title: {
        text: 'Temperature °C',
      },
    },
    tooltip: {
      valueSuffix: ' °C',
    },
    series: [
      {
        name: 'Tokyo',
        type: 'line',
        data: [
          7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,
        ],
      },
      {
        name: 'New York',
        type: 'line',
        data: [
          -0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5,
        ],
      },
      {
        name: 'Berlin',
        type: 'line',
        data: [
          -0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0,
        ],
      },
      {
        name: 'London',
        type: 'line',
        data: [
          3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8,
        ],
      },
    ],
  };
  */
  /*
 // Third Chart
 */
}
