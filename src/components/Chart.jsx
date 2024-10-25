import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';


function Chart() {
  return (
    <>
    <BarChart
    xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
    series={[{ data: [4, 3, 5] ,label:"data1",color: '#fdb462'}, { data: [10, 6, 3] ,label:"data2",color:'red'}, { data: [2, 5, 6],label:"data3" ,color:'yellow'}]}
    width={500}
    height={300}
    tooltip={{ trigger: 'item' }}
    
  />
     <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' ,color:"cyan"},
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
    </>

  )
}

export default Chart