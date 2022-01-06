/* jsPdf , japan lang sample */
import React from 'react'
const { jsPDF } = require("jspdf");
import  {myFont} from '../../lib/mplus'

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
    const doc = new jsPDF();
    doc.addFileToVFS('mplus.ttf', myFont);
    doc.addFont('mplus.ttf', 'mplus', 'normal');
    doc.setFont('mplus', 'normal');  // ↑で名付けた名前を設定する。 
    const d = doc.getFontList();
console.log(d);
  }
  pdfPrint(){
    const img1 = document.querySelector<HTMLImageElement>("#img1");
//    const doc = new jsPDF();
    const doc = new jsPDF({ 
      orientation: 'p',
      format: 'a4',
    });
    doc.addFileToVFS('mplus.ttf', myFont);
    doc.addFont('mplus.ttf', 'mplus', 'normal');
    doc.setFont('mplus', 'normal');  // ↑で名付けた名前を設定する。   
    const width = doc.internal.pageSize.width;
    doc.addImage(img1, 'PNG', 0, 0, width, 0);    
//    doc.setFont('Helvetica', 'Bold');
//    doc.text("User123", 120, 30);
    doc.text("ユーザー太郎 様", 120, 30);
    //data
    doc.setFontSize(24);
    const items = [
      {title: 'データ-1', price: 2000 },
      {title: 'データ-2', price: 2000},
      {title: 'データ-3', price: 2000},
      {title: 'データ-4', price: 2000},
      {title: 'データ-5', price: 2000},
      {title: 'データ-6', price: 2000},
      {title: 'データ-7', price: 2000},
      {title: 'データ-8', price: 2000},
      {title: 'データ-9', price: 2000},
      {title: 'データ-10', price: 2000},
    ];
    const yStart = 58;
    let count = 0;
    for (const item of items) {
      console.log(item);
      doc.text(item.title, 24, yStart + count );
      doc.text(String(item.price) + ' 円', 120, yStart + count );
      count = count + 13;
    }
    doc.save("p5.pdf")  
  }
  render(){
    return(
    <div >
      <h1>pdf6</h1>
      <hr />
      <button onClick={() => this.pdfPrint()}>Print</button>
      <hr />
      <div id="textBody">
        <h1>Test-head</h1>
        <img id="img1" src="/temp4.png"/>

      </div>
    </div>
    )
  }
}

export default Test;

