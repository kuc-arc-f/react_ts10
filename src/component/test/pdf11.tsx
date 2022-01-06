/* jsPdf + chart.js + html2canvas sample */
import React from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
const faker = require('faker');
const { jsPDF } = require("jspdf");
import html2canvas from 'html2canvas';

interface IProps {
  history:string[],
}
//

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: { },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
//
class Test extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
    this.state = {data: ''}
  }  
  componentDidMount(){
  }
  pdfPrint(){
    const elem = document.querySelector<HTMLElement>("#chart1");
    const doc = new jsPDF({ 
      orientation: 'p',
      format: 'a4',
    });
    html2canvas(elem, {scale: 2}).then(function(canvas) {
      const dataURI = canvas.toDataURL("image/jpeg");
      document.body.appendChild(canvas);
      const width = doc.internal.pageSize.width;
      doc.addImage(dataURI, 'JPEG', 0, 0, width, 0);
      doc.save("p11.pdf") ;
    });      
  }
  render(){
    return(
    <div className="container">
      <h1>chart pdf11</h1>
      <hr />
      <button onClick={() => this.pdfPrint()}>Print</button>
      <hr />
      <div id="chart1">
        <h3>Chart.js + jsPdf sample</h3>
        <hr />
        <Line options={options} data={data} />
      </div>
      <hr />
    </div>
    )
  }
}

export default Test;

