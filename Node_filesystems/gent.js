const HTMLToPDF = require('html-to-pdf');
const fs = require('fs');

function getDeliveryItemsHTML(items) {
  return items.map(item => `
    <div class="table-row">
      <div class="table-cell w-6/12 text-left font-bold py-1 px-4">${item.name}</div>
      <div class="table-cell w-[10%] text-center">${item.qty}</div>
      <div class="table-cell w-2/12 text-center">₹${item.rate}</div>
      <div class="table-cell w-2/12 text-center">₹${item.amount}</div>
    </div>
  `).join('');
}

function getInvoiceHTML(options) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Invoice</title>
  <style>
    body { font-family: sans-serif; margin: 0; padding: 0; }
    .table { display: table; width: 100%; }
    .table-row { display: table-row; }
    .table-cell { display: table-cell; padding: 0.5rem; border-bottom: 1px solid #ccc; }
    .text-right { text-align: right; }
    .text-left { text-align: left; }
    .text-center { text-align: center; }
    .font-bold { font-weight: bold; }
    .w-6\\/12 { width: 50%; }
    .w-2\\/12 { width: 16.66%; }
    .w-\\[10%\\] { width: 10%; }
    .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
    .px-4 { padding-left: 1rem; padding-right: 1rem; }
    .pt-10 { padding-top: 2.5rem; }
    .pr-10 { padding-right: 2.5rem; }
  </style>
</head>
<body>
  <div style="padding: 40px;">
    <div style="display: flex; justify-content: space-between;">
      <div>
        <img src="${options.logo}" width="120" />
        <h2>${options.name}</h2>
        <p>${options.address1}</p>
        <p>${options.address2}</p>
        <p>GSTIN: ${options.gstin}</p>
      </div>
      <div style="text-align: right;">
        <h1>Invoice</h1>
        <p>Date: ${options.date}</p>
        <p>Invoice #: ${options.orderId}</p>
        <p>Customer ID: ${options.customerId}</p>
        <p>Due: ${options.paymentDue}</p>
      </div>
    </div>

    <div style="margin-top: 30px;">
      <strong>Billed & Shipped To:</strong>
      <p>${options.customerName}</p>
      <p>${options.customerAddress}</p>
      <p>GSTIN: ${options.customerGstin}</p>
    </div>

    <div class="table" style="margin-top: 30px; border: 1px solid #ccc;">
      <div class="table-row" style="background: #eee;">
        <div class="table-cell w-6/12 font-bold">Item</div>
        <div class="table-cell w-[10%] font-bold text-center">Qty</div>
        <div class="table-cell w-2/12 font-bold text-center">Rate</div>
        <div class="table-cell w-2/12 font-bold text-center">Amount</div>
      </div>
      ${getDeliveryItemsHTML(options.items)}
    </div>

    <div class="pt-10 pr-10 text-right" style="margin-top: 30px;">
      <p>Subtotal: ₹${options.subtotal}</p>
      <p>CGST 9%: ₹${options.cgst}</p>
      <p>SGST 9%: ₹${options.sgst}</p>
      <p class="font-bold" style="font-size: 18px;">Total: ₹${options.total}</p>
    </div>

    <div style="margin-top: 30px;">
      <p><strong>Notes:</strong> ${options.notes}</p>
      <p><strong>Terms:</strong> ${options.terms}</p>
      <p><strong>Status:</strong> <span style="color: green;">Paid</span></p>
      <p><em>${options.totalInWords}</em></p>
    </div>

    <div style="margin-top: 40px; text-align: center; font-size: 12px; color: #888;">
      <p>www.flable.com • admin@flable.ai • +91 7769975889</p>
    </div>
  </div>
</body>
</html>`;
}

async function generateInvoicePDF(outputPath = 'invoice.pdf') {
  const invoiceOptions = {
    logo: 'https://yourcdn.com/logo.png',
    name: 'KEINSA PRIVATE LIMITED (Flable AI)',
    address1: '104 Flat, B Building, Meda Eletrnity Road',
    address2: 'Kithaganur, BENGALURU Urban, Karnataka, 560049, India',
    gstin: '29AAJCK2776R1ZH',
    date: '01/06/2025',
    orderId: '200211',
    customerId: 'A01042',
    paymentDue: '06/06/2025',
    customerName: 'Brain4ce Education Solutions Private Limited (Edureka)',
    customerAddress: 'INDIQUBE ETA, No. 38/4, 4th FLOOR, DODDANEKUNDI VILLAGE, OUTER RING ROAD, BENGALURU, Karnataka, 560048',
    customerGstin: '29AAECB5440J1ZK',
    items: [
      {
        name: 'Subscription Fees from 28th May to 28th June',
        qty: 1,
        rate: '26,000.00',
        amount: '26,000.00'
      }
    ],
    subtotal: '26,000.00',
    cgst: '2,340.00',
    sgst: '2,340.00',
    total: '30,680.00',
    notes: 'Special notes and instructions',
    terms: 'Advance payment for service period 28 May to 28 June',
    totalInWords: 'Thirty Thousand Six Hundred Eighty Rupees only'
  };

  try {
    const html = getInvoiceHTML(invoiceOptions);
    const htmlToPDF = new HTMLToPDF(html);
    const pdfBuffer = await htmlToPDF.convert();
    fs.writeFileSync(outputPath, pdfBuffer);
    console.log(`✅ Invoice generated: ${outputPath}`);
  } catch (err) {
    console.error('❌ Error generating invoice:', err);
  }
}

generateInvoicePDF();
