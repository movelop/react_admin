import React from 'react';
import { 
  AccumulationChartComponent, 
  AccumulationSeriesCollectionDirective, 
  AccumulationSeriesDirective, 
  AccumulationLegend, 
  PieSeries, 
  AccumulationDataLabel, 
  AccumulationTooltip, 
  Inject } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../context/ContextProvider';

const Pie = ({ id, data, legendVisibilty, height }) => {
  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
      id={id}
      height={height} 
      background = { currentMode === 'Dark' ? '#33373E' : '#FFFFFF' }
      legendSettings={{ visible: legendVisibilty, background: 'white' }}
    >
      <Inject services={[PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective 
          name="Sale"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff',
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>

    </AccumulationChartComponent>
  )
}

export default Pie;