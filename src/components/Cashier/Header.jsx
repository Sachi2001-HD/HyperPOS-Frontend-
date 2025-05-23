import React, { useState, useEffect } from "react";
import Select from "react-select";
const Header = ({ invoice, customers, setCustomer }) => {
  const [selectedCustomer, setSelectedCustomer] = useState(1);

  useEffect(() => {
    if (invoice) {
      setSelectedCustomer(invoice.customerId);
    }
  }, [invoice]);

  const customerOptions = customers.map((customer) => ({
    label: `${customer?.name} (ID: ${customer?.id})`,
    value: customer?.id,
  }));

  const handleCustomerChange = (selectedOption) => {
    setSelectedCustomer(selectedOption);
    setCustomer(selectedOption.value);
  };

  return (
    <div className="flex justify-between items-center py-2 h-full">
      <div className="flex gap-2 items-center flex-row justify-between w-full">
        <div className="flex flex-row gap-2">
          <label>Invoice ID:</label>
          <input
            type="text"
            value={invoice?.id || ""}
            readOnly
            className="bg-gray-800 p-1 rounded w-30"
          />
        </div>
        <div className="flex flex-row gap-2">
          <label>Customer:</label>
          <Select
            options={customerOptions}
            value={
              selectedCustomer
                ? customerOptions.find((c) => c.value === selectedCustomer)
                : 1
            }
            onChange={handleCustomerChange}
            placeholder="Select Customer"
            isSearchable
            getOptionLabel={(e) => e.label}
            getOptionValue={(e) => e.value}
            className=" text-black bg-amber-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
