import React, { useEffect } from "react";

const SummaryFooter = ({
  cartItems,
  cash,
  setCash,
  change,
  setChange,
  paymentMethod,
  setPaymentMethod,
}) => {
  const grandTotal = cartItems.reduce((sum, item) => {
    const total = item.unitPrice * item.quantity - (item.discount || 0);
    return sum + (total > 0 ? total : 0);
  }, 0);

  useEffect(() => {
    const parsedCash = parseFloat(cash);
    setChange(parsedCash - grandTotal || 0);
    console.log("Change:", change);
  }, [cash, grandTotal]);

  const handleCashChange = (e) => {
    setCash(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  return (
    <div className="my-4 w-full">
      <div className="flex justify-between text-lg font-semibold">
        <span>Grand Total:</span>
        <span>Rs. {grandTotal.toFixed(2)}</span>
      </div>

      <div className="flex gap-4 mt-2">
        <div className="flex items-center gap-2">
          <label>Cash:</label>
          <input
            type="number"
            value={Number(cash || 0)}
            onChange={handleCashChange}
            className="bg-red-700 p-1 rounded w-20 text-white"
          />
        </div>

        <div className="flex items-center gap-2">
          <label>Change:</label>
          <input
            type="text"
            readOnly
            value={(change || 0).toFixed(2)}
            className="bg-green-700 p-1 rounded w-20 text-white"
          />
        </div>
      </div>
      <div className="flex gap-4 mt-2">
        <div className="flex items-center gap-2">
          <label>Payment Method:</label>
          <div className="flex gap-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="CASH"
                checked={paymentMethod === "CASH"}
                onChange={handlePaymentMethodChange}
                className="hidden"
              />
              <span
                className={
                  "px-3 py-1 rounded cursor-pointer text-white hover:bg-red-500 " +
                  (paymentMethod === "CASH" ? "bg-red-700 " : " bg-blue-900 ")
                }
              >
                Cash
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="CARD"
                checked={paymentMethod === "CARD"}
                onChange={handlePaymentMethodChange}
                className="hidden"
              />
              <span
                className={
                  "px-3 py-1 rounded cursor-pointer text-white hover:bg-red-500 " +
                  (paymentMethod === "CARD" ? "bg-red-700 " : " bg-blue-900 ")
                }
              >
                Card
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="MOBILE_BANKING"
                checked={paymentMethod === "MOBILE_BANKING"}
                onChange={handlePaymentMethodChange}
                className="hidden"
              />
              <span
                className={
                  "px-3 py-1 rounded cursor-pointer text-white hover:bg-red-500 " +
                  (paymentMethod === "MOBILE_BANKING"
                    ? "bg-red-700 "
                    : " bg-blue-900 ")
                }
              >
                M_Banking
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SummaryFooter;
