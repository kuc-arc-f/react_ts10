/* jsPdf + html2canvas , addPage sample */
import React from 'react'
const { jsPDF } = require("jspdf");
import html2canvas from 'html2canvas';
import TableBox1 from './TableBox1';
import TableBox2 from './TableBox2';

interface IProps {
  history:string[],
}
//
class Test extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
    this.state = {data: ''}
  }  
  componentDidMount(){
  }
  pdfPrint(){
    const doc = new jsPDF({ 
      orientation: 'p',
      format: 'a4',
    });
    // async
    (async() => {
      const elem = document.querySelector<HTMLElement>("#test1");
      await html2canvas(elem, {scale: 2}).then(function(canvas) {
        const dataURI = canvas.toDataURL("image/jpeg");
        document.body.appendChild(canvas);
        const width = doc.internal.pageSize.width;
        doc.addImage(dataURI, 'JPEG', 0, 0, width, 0);
      });
      //test2
      const test2 = document.querySelector<HTMLElement>("#test2");
      await html2canvas(test2, {scale: 2}).then(function(canvas) {
        const dataURI = canvas.toDataURL("image/jpeg");
        document.body.appendChild(canvas);
        const width = doc.internal.pageSize.width;
        doc.addPage();
        doc.addImage(dataURI, 'JPEG', 0, 0, width, 0);
      });
      doc.save("p10.pdf") ;
    })()
    
  }
  render(){
    return(
    <div className="container">
      <h1>pdf10 / html2canvas</h1>
      <hr />
      <button onClick={() => this.pdfPrint()}>Print</button>
      <hr />
      <div id = "test1">
        <TableBox1 />
      </div>
      <div id = "test2">
        <TableBox2 />
      </div>
      <hr />
    </div>
    )
  }
}

export default Test;

