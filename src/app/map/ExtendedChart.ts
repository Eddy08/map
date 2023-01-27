import * as Highcharts from 'highcharts/highmaps';
export interface ExtendedChart extends Highcharts.Chart {
  mapView: Highcharts.MapView;
}
