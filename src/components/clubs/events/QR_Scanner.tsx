// import React, { Component } from 'react';
// import QrScanner from "qr-scanner";

// class Test extends Component {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       delay: 100,
//       result: 'No result',
//       scanning: false, // Add scanning state to control the scanning process
//     };

//     this.handleScan = this.handleScan.bind(this);
//     this.handleError = this.handleError.bind(this);
//     this.startScan = this.startScan.bind(this);
//     this.stopScan = this.stopScan.bind(this);
//   }

//   handleScan(data) {
//     if (data) {
//       this.setState({
//         result: data,
//       });
//     }
//   }

//   handleError(err) {
//     console.error(err);
//   }

//   startScan() {
//     this.setState({
//       scanning: true,
//     });
//   }

//   stopScan() {
//     this.setState({
//       scanning: false,
//     });
//   }

//   render() {
//     const previewStyle = {
//       height: 240,
//       width: 320,
//     };

//     return (
//       <div>
//         {this.state.scanning ? (
//           <QrReader
//             delay={this.state.delay}
//             style={previewStyle}
//             onError={this.handleError}
//             onScan={this.handleScan}
//           />
//         ) : null}
//         <p>{this.state.result}</p>
//         <button onClick={this.startScan}>Start Scan</button>
//         <button onClick={this.stopScan}>Stop Scan</button>
//       </div>
//     );
//   }
// }

// export default Test;
