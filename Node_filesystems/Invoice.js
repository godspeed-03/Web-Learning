const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function generateFlableInvoice({
  output = 'flable_invoice.pdf',
  logoPath = null,
  date,
  invoiceNo,
  poNumber,
  customerId,
  dueDate,
  billingAddress,
  gstinCustomer,
  description,
  unitCost,
  qty,
  amount,
  cgst,
  sgst,
  total,
  notes,
  inWords,
}) {
  const doc = new PDFDocument({ margin: 50 });
  doc.pipe(fs.createWriteStream(output));

  const primary = '#2c3e50';
  const accent = '#3498db';

  // HEADER
  if (logoPath) {
    doc.image(logoPath, 50, 45, { width: 80 });
  }

  doc
    .fontSize(12)
    .fillColor(primary)
    .text('KEINSA PRIVATE LIMITED (Flable AI)', logoPath ? 150 : 50, 50, {
      align: 'left',
    })
    .text('104 Flat, B Building, Meda Eletrnity Road, Kithaganur', { continued: false })
    .text('BENGALURU Urban, Karnataka,560049, India')
    .text('GSTIN: 29AAJCK2776R1ZH')
    .moveDown(0.5);

  doc
    .fontSize(10)
    .text(`Date: ${date}`, 400)
    .text(`Invoice number: ${invoiceNo}`, 400)
    .text(`Purchase order #: ${poNumber}`, 400)
    .text(`Customer #: ${customerId}`, 400)
    .text(`Payment due by: ${dueDate}`, 400)
    .text('HSN Code: 998314', 400)
    .moveDown(1);

  // Billing/Shipping
  doc
    .font('Helvetica-Bold')
    .fontSize(11)
    .text('Billed to', 50)
    .text('Ship to', 300);

  doc
    .font('Helvetica')
    .fontSize(10)
    .text(billingAddress, 50, doc.y)
    .text(billingAddress, 300, doc.y)
    .text(`GSTIN: ${gstinCustomer}`, 50)
    .text(`GSTIN: ${gstinCustomer}`, 300)
    .moveDown(1.5);

  // Table Headers
  doc
    .fontSize(11)
    .fillColor(accent)
    .text('Description', 50)
    .text('Unit cost INR', 300)
    .text('Qty/Rate', 400)
    .text('Amount INR', 480)
    .fillColor('black');

  doc
    .moveTo(50, doc.y)
    .lineTo(550, doc.y)
    .stroke()
    .moveDown(0.5);

  // Line Item
  doc
    .fontSize(10)
    .text(description, 50)
    .text(`₹ ${unitCost}`, 300)
    .text(`${qty}`, 400)
    .text(`₹ ${amount}`, 480)
    .moveDown(1);

  // Totals
  doc
    .fontSize(10)
    .text(`SUBTOTAL`, 400, doc.y)
    .text(`₹ ${amount}`, 480, doc.y)
    .text(`DISCOUNT`, 400)
    .text(`₹ 0,00`, 480)
    .text(`CGST 9%`, 400)
    .text(`₹ ${cgst}`, 480)
    .text(`SGST 9%`, 400)
    .text(`₹ ${sgst}`, 480)
    .moveDown(0.3)
    .font('Helvetica-Bold')
    .text(`TOTAL`, 400)
    .text(`₹ ${total}`, 480)
    .font('Helvetica')
    .moveDown();

  // Bank details
  doc
    .fontSize(10)
    .text('BANK ACCOUNT DETAILS', 50)
    .text('KEINSA PRIVATE LIMITED')
    .text('A/C No: 50200091267100')
    .text('IFSC: HDFC0008995')
    .text('Branch: Channasandra')
    .text('Bangalore')
    .moveDown();

  // Footer
  doc
    .fontSize(10)
    .fillColor(primary)
    .text('www.flable.com')
    .fillColor('black')
    .moveDown(0.5)
    .text('Thank you for your business!')
    .text('Should you have any enquiries concerning this invoice, please contact:')
    .text('admin@flable.ai / +91 7769975889')
    .moveDown()
    .font('Helvetica-Oblique')
    .text(`${inWords} is advance payment for the service period of 28th May to 28th June 2025`);

  doc.end();
  console.log(`✅ Styled invoice saved to ${output}`);
}


generateFlableInvoice({
  date: '01/06/2025',
  invoiceNo: '200211',
  poNumber: '01',
  customerId: 'A01042',
  dueDate: '06/06/2025',
  billingAddress:
    'Brain4ce Education Solutions Private Limited (Edureka)\nINDIQUBE ETA, No. 38/4, 4th FLOOR\nDODDANEKUNDI VILLAGE, OUTER RING ROAD\nBENGALURU, Karnataka, India 560048',
  gstinCustomer: '29AAECB5440J1ZK',
  description: 'Subscription Fees from 28th May to 28th June',
  unitCost: '26.000,00',
  qty: '1',
  amount: '26.000,00',
  cgst: '2.340,00',
  sgst: '2.340,00',
  total: '30.680,00',
  notes: 'Special notes and instructions',
  inWords: 'Thirty Thousand Six Hundred Eighty Rupees',
  logoPath: path.join(__dirname, 'image.png'), // or provide: path.join(__dirname, 'logo.png')
});

