const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 40, bottom: 40, left: 40, right: 40 }
});

doc.pipe(fs.createWriteStream('invoice2.pdf'));

// Colors
const primaryColor = '#1e40af';
const lightGray = '#f3f4f6';
const textColor = '#333';

// Fonts and sizes
const fontNormal = 'Helvetica';
const fontBold = 'Helvetica-Bold';

const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
const boxWidth = (pageWidth - 40) / 2;

let y = 40;

// Centered Invoice Title at top (reduced font size)
doc.fillColor(primaryColor).font(fontBold).fontSize(20);
doc.text('Invoice', doc.page.margins.left, y, { width: pageWidth, align: 'center' });

y += 50;

// Logo left side, and invoice details right aligned next to logo
const logoPath = path.join(__dirname, 'image.png');
const logoWidth = 120;
const logoHeight = 40;

doc.image(logoPath, doc.page.margins.left, y, { width: logoWidth, height: logoHeight });

doc.fillColor(textColor).font(fontNormal).fontSize(11);

const ano = `Brain4ce Education Solutions Private Limited (Edureka), INDIQUBE ETA, No. 38/4, 4th FLOOR, DODDANEKUNDI VILLAGE, OUTER RING ROAD, BENGALURU, Karnataka, India 560048, GSTIN: 29AAECB5440J1ZK`;

doc.text(ano, doc.page.margins.left, y + 50, { width: boxWidth });

// Invoice info block to right side (aligned top with logo)
const infoX = doc.page.margins.left + pageWidth - 200;
doc.fillColor(textColor).font(fontNormal).fontSize(11);

y += 30;
// Split labels and values
const invoiceInfo = [
  { label: 'Date:', value: '01/06/2025' },
  { label: 'Invoice ID:', value: '200211' },
  { label: 'Purchase ID:', value: '01' },
  { label: 'Customer ID:', value: 'A01042' },
  { label: 'Payment done on:', value: '06/06/2025' }
];

const labelWidths = 120;
const valueWidths = 100;
const rowHeights = 16;

invoiceInfo.forEach((item, i) => {
  const rowY = y + i * rowHeights;

  // Label (left-aligned)
  doc.font(fontBold)
     .fillColor(textColor)
     .fontSize(10)
     .text(item.label, infoX, rowY, {
       width: labelWidths,
       align: 'left'
     });

  // Value (left-aligned, just after label)
  doc.font(fontNormal)
     .text(item.value, infoX + labelWidths + 5, rowY, {
       width: valueWidths,
       align: 'left'
     });
});


y += logoHeight + 90; // Add space below logo and info for addresses

// Section: Address Boxes - add margin top to avoid overlapping payment info

// Billed To
doc.fillColor(primaryColor).font(fontBold).fontSize(10)
    .rect(doc.page.margins.left, y, boxWidth, 20)
    .fill();

doc.fillColor('white').text('Billed To', doc.page.margins.left + 5, y + 4);

doc.fillColor(textColor).font(fontNormal).fontSize(11);

const billedToText = `Brain4ce Education Solutions Private Limited (Edureka), INDIQUBE ETA, No. 38/4, 4th FLOOR, DODDANEKUNDI VILLAGE, OUTER RING ROAD, BENGALURU, Karnataka, India 560048, GSTIN: 29AAECB5440J1ZK`;

doc.text(billedToText, doc.page.margins.left, y + 28, { width: boxWidth });

const shippedX = doc.page.margins.left + boxWidth + 40;

// Shipped To
doc.fillColor(primaryColor).font(fontBold).fontSize(10)
    .rect(shippedX, y, boxWidth, 20)
    .fill();

doc.fillColor('white').text('Shipped To', shippedX + 5, y + 4);

doc.fillColor(textColor).font(fontNormal).fontSize(11);

doc.text(billedToText, shippedX, y + 28, { width: boxWidth });

y += 140;

// Table headers
doc.fillColor('white').font(fontBold).fontSize(10);
const tableTop = y;
const colDescWidth = pageWidth * 0.5;
const colUnitCostWidth = pageWidth * 0.15;
const colQtyWidth = pageWidth * 0.1;
const colAmountWidth = pageWidth * 0.25;

doc.rect(doc.page.margins.left, tableTop, colDescWidth, 30).fill(primaryColor);
doc.rect(doc.page.margins.left + colDescWidth, tableTop, colUnitCostWidth, 30).fill(primaryColor);
doc.rect(doc.page.margins.left + colDescWidth + colUnitCostWidth, tableTop, colQtyWidth, 30).fill(primaryColor);
doc.rect(doc.page.margins.left + colDescWidth + colUnitCostWidth + colQtyWidth, tableTop, colAmountWidth, 30).fill(primaryColor);

doc.fillColor('white');
doc.text('Description', doc.page.margins.left + 5, tableTop + 8, { width: colDescWidth - 10 });
doc.text('Unit Cost', doc.page.margins.left + colDescWidth + 5, tableTop + 8, { width: colUnitCostWidth - 10 });
doc.text('Quantity', doc.page.margins.left + colDescWidth + colUnitCostWidth + 5, tableTop + 8, { width: colQtyWidth - 10 });
doc.text('Amount', doc.page.margins.left + colDescWidth + colUnitCostWidth + colQtyWidth + 5, tableTop + 8, { width: colAmountWidth - 10 });

// Table row
y = tableTop + 30;
doc.fillColor(textColor).font(fontNormal).fontSize(11);

// Draw border rectangles for each cell
const borderColor = '#ccc';

doc.lineWidth(1);
doc.strokeColor(borderColor);

doc.rect(doc.page.margins.left, y, colDescWidth, 30).stroke();
doc.rect(doc.page.margins.left + colDescWidth, y, colUnitCostWidth, 30).stroke();
doc.rect(doc.page.margins.left + colDescWidth + colUnitCostWidth, y, colQtyWidth, 30).stroke();
doc.rect(doc.page.margins.left + colDescWidth + colUnitCostWidth + colQtyWidth, y, colAmountWidth, 30).stroke();

doc.text('Subscription Fees from 28th May to 28th June', doc.page.margins.left + 5, y + 8, {
    width: colDescWidth - 10,
    align: 'left'
});
doc.text('$ 230,000', doc.page.margins.left + colDescWidth + 5, y + 8, {
    width: colUnitCostWidth - 10,
    align: 'left'
});
doc.text('1', doc.page.margins.left + colDescWidth + colUnitCostWidth + 5, y + 8, {
    width: colQtyWidth - 10,
    align: 'center'
});
doc.text('$ 230,000', doc.page.margins.left + colDescWidth + colUnitCostWidth + colQtyWidth + 5, y + 8, {
    width: colAmountWidth - 10,
    align: 'left'
});

y += 60;

// Notes & Totals side by side
const notesWidth = pageWidth * 0.4;
const totalsWidth = pageWidth * 0.4;
const notesX = doc.page.margins.left;
const totalsX = doc.page.margins.left + notesWidth + 30;

doc.fillColor(primaryColor).font(fontBold).fontSize(10)
    .rect(notesX, y, boxWidth, 20)
    .fill();
doc.fillColor('white').text('Special Notes', notesX + 5, y + 4);

doc.fillColor(textColor).font(fontNormal).fontSize(9);
const notesText = 'Thirty Thousand Six Hundred Eighty Rupees is advance payment for the service period of 28th May to 28th June 2025';

doc.rect(notesX, y + 20, boxWidth, 90).fill(lightGray);
doc.fillColor(textColor);
doc.text(notesText, notesX + 5, y + 40, { width: notesWidth, height: 90 });

// // ----------- Totals Table --------------
// const cellHeight = 25;
// const labelWidth = totalsWidth * 0.4;
// const valueWidth = totalsWidth * 0.4;
// const startY = y;
// const startX = totalsX +35;

// doc.lineWidth(1);
// doc.strokeColor('#ccc');
// doc.fillColor('white');

// // Draw table rows and cells (3 rows, 2 columns)
// for (let i = 0; i < 3; i++) {
//   const rowY = startY + i * cellHeight;
//   // Label cell
//   doc.rect(startX, rowY, labelWidth, cellHeight).stroke();
//   // Value cell
//   doc.rect(startX + labelWidth, rowY, valueWidth, cellHeight).stroke();
// }

// // Text padding inside cells
// const padding = 5;
// doc.fillColor(textColor).font(fontNormal).fontSize(10);

// // Subtotal row
// doc.text('Subtotal:', startX + padding, startY + padding, { width: labelWidth - 2 * padding, align: 'right' });
// doc.text('$ 230,000', startX + labelWidth + padding, startY + padding, { width: valueWidth - 3 * padding, align: 'right' });

// // Tax row
// doc.text('Tax (18%):', startX + padding, startY + cellHeight + padding, { width: labelWidth - 2 * padding, align: 'right' });
// doc.text('$ 41,400', startX + labelWidth + padding, startY + cellHeight + padding, { width: valueWidth - 3 * padding, align: 'right' });

// // Total row (bold)
// doc.font(fontBold);
// doc.text('Total:', startX + padding, startY + 2 * cellHeight + padding, { width: labelWidth - 2 * padding, align: 'right' });
// doc.text('$ 271,400', startX + labelWidth + padding, startY + 2 * cellHeight + padding, { width: valueWidth - 3 * padding, align: 'right' });
// doc.font(fontNormal);

// ----------- Totals Table --------------
const cellHeight = 25;
const labelWidth = totalsWidth * 0.6;
const valueWidth = totalsWidth * 0.6;
const startY = y;
const startX = totalsX + 35;
const padding = 5;

const rows = [
    { label: 'Subtotal:', value: '$ 230,000' },
    { label: 'Tax (18%):', value: '$ 41,400' },
    { label: 'Total:', value: '$ 271,400', bold: true }
];

doc.lineWidth(1);
doc.strokeColor('#ccc');

rows.forEach((row, i) => {
    const rowY = startY + i * cellHeight;

    // --- LABEL CELL ---
    // Fill with blue
    doc.fillColor(primaryColor).rect(startX, rowY, labelWidth, cellHeight).fill();
    // Stroke border
    doc.strokeColor('#ccc').rect(startX, rowY, labelWidth, cellHeight).stroke();

    // White text in label cell
    doc.fillColor('white').font(row.bold ? fontBold : fontNormal).fontSize(10);
    doc.text(row.label, startX + padding, rowY + padding, {
        width: labelWidth - 2 * padding,
        align: 'right'
    });

    // --- VALUE CELL ---
    // Fill with white
    doc.fillColor('white').rect(startX + labelWidth, rowY, valueWidth, cellHeight).fill();
    // Stroke border
    doc.strokeColor('#ccc').rect(startX + labelWidth, rowY, valueWidth, cellHeight).stroke();

    // Dark text in value cell
    doc.fillColor(textColor).font(row.bold ? fontBold : fontNormal).fontSize(10);
    doc.text(row.value, startX + labelWidth + padding, rowY + padding, {
        width: valueWidth - 3 * padding,
        align: 'right'
    });
});

y += 120;

// Centered footer contact info with Mail: and Call:
const centerTextY = y + 40;
doc.font(fontBold).fontSize(14).fillColor('#555');
doc.text('Thank you for your business!', doc.page.margins.left, centerTextY, { width: pageWidth, align: 'center' });

doc.font(fontNormal).fontSize(12).fillColor('#555');
doc.text('Should you have any enquiries concerning this invoice, please contact.', doc.page.margins.left, centerTextY + 20, { width: pageWidth, align: 'center' });

doc.fillColor(primaryColor);
doc.text('Mail: admin@flable.ai', doc.page.margins.left, centerTextY + 40, { width: pageWidth, align: 'center', link: 'mailto:admin@flable.ai', underline: false });

doc.text('Call: +91 7769975889', doc.page.margins.left, centerTextY + 60, { width: pageWidth, align: 'center', link: 'tel:+91 7769975889' });

doc.text('flable.ai', doc.page.margins.left, centerTextY + 80, { width: pageWidth, align: 'center', link: 'https://flable.ai', underline: false });

doc.end();

console.log('Invoice PDF generated as invoice.pdf');
