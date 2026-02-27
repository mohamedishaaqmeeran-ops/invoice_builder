import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg"
const Invoice = () => {
  const navigate = useNavigate();
  const [shopName, setShopName] = useState(() => {
    return localStorage.getItem("shopName") || "";
  })
  const [shopAddress, setShopAddress] = useState(() => {
    return localStorage.getItem("shopAddress") || "";
  })
  const [shopMob, setShopMob] = useState(() => {
    return localStorage.getItem("shopMob") || "";
  })
  const [customer, setCustomer] = useState(() => {
    return localStorage.getItem("customer") || "";
  })
  const [customerMobile, setCustomerMobile] = useState(() => {
    return localStorage.getItem("customerMobile") || "";
  })

  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems
      ? JSON.parse(savedItems)
      : [{ desc: "", qty: 1, price: 0, gst: 0, discount: 0 }];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  const [invoice, setInvoice] = useState(1);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [notes, setNotes] = useState("Thank you for your business!");
  const [payment, setPayment] = useState("Due within 7 days");
  const resetInvoice = () => {

    setShopName("");
    setShopAddress("");
    setShopMob("");
    setCustomer("");
    setCustomerMobile("");

    setItems([
      { desc: "", qty: 1, price: 0, gst: 0, discount: 0, total: 0 }
    ]);

    setNotes("Thank you for your business!");
    setPayment("Due within 7 days");

    setInvoice(1);
    setDate(new Date().toISOString().slice(0, 10));

    localStorage.clear();

  };
  useEffect(() => {
    localStorage.setItem("shopName", shopName);
  }, [shopName]);

  useEffect(() => {
    localStorage.setItem("shopAddress", shopAddress);
  }, [shopAddress]);

  useEffect(() => {
    localStorage.setItem("shopMob", shopMob);
  }, [shopMob]);

  useEffect(() => {
    localStorage.setItem("customer", customer);
  }, [customer]);

  useEffect(() => {
    localStorage.setItem("customerMobile", customerMobile);
  }, [customerMobile]);

  const addProduct = () =>
    setItems([...items, { desc: "", qty: 1, price: 0, gst: 0, discount: 0 }]);


  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);

  const totalGST = items.reduce(
    (sum, item) => sum + (item.qty * item.price * item.gst) / 100,
    0
  );

  const totalDiscount = items.reduce(
    (sum, item) => sum + (item.qty * item.price * item.discount) / 100,
    0
  );

  const finalTotal = subtotal + totalGST - totalDiscount;
  const downloadInvoice = () => {

    const pdf = new jsPDF();

    let y = 10;
    pdf.addImage(logo, "JPG", 10, 5, 40, 10);

    pdf.setFontSize(18);
    pdf.text("INVOICE", 90, 10);

    y += 10;

    pdf.setFontSize(12);

    pdf.text(`Invoice No: ${invoice}`, 10, 20);
    pdf.text(`Date: ${date}`, 140, y);

    y += 10;

    pdf.text(`Shop Name: ${shopName}`, 10, y);
    y += 8;
    pdf.text(`Shop Address: ${shopAddress}`, 10, y);
    y += 8;
    pdf.text(`Shop Mobile: ${shopMob}`, 10, y);

    y += 12;

    pdf.text(`Customer Name: ${customer}`, 10, y);
    y += 8;
    pdf.text(`Customer Mobile: ${customerMobile}`, 10, y);

    y += 12;

    pdf.text("Item", 10, y);
    pdf.text("Qty", 80, y);
    pdf.text("Price", 100, y);
    pdf.text("GST%", 130, y);
    pdf.text("Disc%", 160, y);

    y += 8;

    items.forEach((item) => {

      pdf.text(item.desc || "-", 10, y);
      pdf.text(String(item.qty), 80, y);
      pdf.text(String(item.price), 100, y);
      pdf.text(String(item.gst), 130, y);
      pdf.text(String(item.discount), 160, y);

      y += 8;
    });

    y += 10;

    pdf.text(`Subtotal: Rs ${subtotal.toFixed(2)}`, 10, y);
    y += 8;

    pdf.text(`GST: Rs ${totalGST.toFixed(2)}`, 10, y);
    y += 8;

    pdf.text(`Discount: Rs ${totalDiscount.toFixed(2)}`, 10, y);
    y += 8;

    pdf.setFontSize(14);
    pdf.text(`Final Total: Rs ${finalTotal.toFixed(2)}`, 10, y);

    y += 12;

    pdf.setFontSize(12);
    pdf.text("Notes:", 10, y);

    y += 8;

    pdf.text(notes, 10, y);

    y += 12;

    pdf.text("Payment Terms:", 10, y);

    y += 8;

    pdf.text(payment, 10, y);
    pdf.save(`Invoice-${invoice}.pdf`);

    setInvoice(invoice + 1);
  };
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };
  return (
    <div className="flex flex-col p-5 items-center min-h-screen bg-blue-950" >
      <div id="invoicePDF" className="p-4 rounded shadow w-full " style={{
        background: "#ffffff", lineHeight: "1.8", color: "#000000"
      }}
      >
        <div className="mb-4 flex items-center gap-4">
          <img src={logo} alt="logo" className="h-16" />
          <h1 className="text-xl font-bold italic">Invoice</h1>
        </div>


        <div className="flex gap-1 md:gap-2 mb-4">
          <input
            type="number"
            min={1}
            placeholder="Invoice No"
            value={invoice}
            onChange={(e) => setInvoice(e.target.value)}
            className="w-20 md:w-auto flex-1 p-2 border rounded" />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-20 md:w-auto flex-1 p-2 border rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Shop Name"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Customer Name"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Shop Address"
            value={shopAddress}
            onChange={(e) => setShopAddress(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />



          <input
            type="text"
            placeholder="Customer Mobile No"
            value={customerMobile}
            onChange={(e) => setCustomerMobile(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Shop Mob No"
            value={shopMob}
            onChange={(e) => setShopMob(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
          />
        </div>

        <div className="flex gap-0.5 md:gap-2 mb-2 font-bold text-sm">
          <div className="flex-1">Description</div>
          <div className="w-16 text-center">Qty</div>
          <div className="w-20 text-center">Price</div>
          <div className="w-16 text-center">GST%</div>
          <div className="w-20 text-center">Disc%</div>
          <div className="w-25 text-center">Action</div>
        </div>
        {items.map((item, i) => (
          <div key={i} className="flex gap-2 mb-2 flex-wrap">

            <input
              type="text"
              placeholder="Item"
              value={item.desc}
              onChange={(e) =>
                setItems(
                  items.map((it, idx) =>
                    idx === i ? { ...it, desc: e.target.value } : it
                  )
                )
              }
              className="flex-1 w-10 md:w-auto p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Qty"
              value={item.qty}
              min={1}
              onChange={(e) =>
                setItems(
                  items.map((it, index) =>
                    index === i ? { ...it, qty: Number(e.target.value) } : it
                  )
                )
              }
              className="w-10 md:w-16 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Price"
              value={item.price}
              min={0}
              onChange={(e) =>
                setItems(
                  items.map((it, index) =>
                    index === i ? { ...it, price: Number(e.target.value) } : it
                  )
                )
              }
              className="w-10 md:w-20 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="GST %"
              value={item.gst}
              min={0}
              onChange={(e) =>
                setItems(
                  items.map((it, index) =>
                    index === i ? { ...it, gst: Number(e.target.value) } : it
                  )
                )
              }
              className="w-10 md:w-16 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Discount %"
              value={item.discount}
              min={0}
              onChange={(e) =>
                setItems(
                  items.map((it, index) =>
                    index === i ? { ...it, discount: Number(e.target.value) } : it
                  )
                )
              }
              className="w-10 md:w-20 p-2 border rounded"
            />
            <button onClick={() => removeItem(i)} className="text-white px-4 py-2 rounded-3xl cursor-pointer">Delete</button>
          </div>
        ))}

        <button
          onClick={addProduct}
          className="mb-4 px-4 py-2 bg-blue-950 text-white rounded hover:bg-blue-700 cursor-pointer"
        >
          + Add Product
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="font-semibold">Notes</label>
            <textarea
              className="w-full border rounded p-2"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <div>
            <label className="font-semibold">Payment Info</label>
            <textarea
              className="w-full border rounded p-2"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
            />
          </div>
        </div>

        <div className="text-right mb-2 font-bold">
          Subtotal: ₹{subtotal.toFixed(2)} <br />
          Total GST: ₹{totalGST.toFixed(2)} <br />
          Total Discount: ₹{totalDiscount.toFixed(2)} <br />
          <span className="text-lg">Final Total: ₹{finalTotal.toFixed(2)}</span>
        </div>

      </div>
      <div className="flex  gap-4 mt-3 md:w-140">
        <button
          onClick={() => navigate('/')}
          className="flex-1 bg-green-600 md:px-4 py-2 text-white rounded cursor-pointer hover:bg-red-800"
        >
          Back to home
        </button>
        <button
          onClick={downloadInvoice}
          className="flex-1 bg-blue-950 md:px-4 py-2 text-yellow-500 rounded cursor-pointer border-2 border-yellow-500 hover:bg-yellow-500 hover:text-blue-950"
        >
          Download Invoice
        </button>

        <button
          onClick={resetInvoice}
          className="flex-1 bg-red-600 md:px-4 py-2 text-white rounded cursor-pointer hover:bg-red-800"
        >
          Reset Invoice
        </button>

      </div>
    </div>
  );
};

export default Invoice;