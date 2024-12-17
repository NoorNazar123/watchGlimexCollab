import { useState } from "react";

const OrderModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  productId: number;
  variant: string;
}> = ({ isOpen, onClose, productId, variant }) => {
  const [quantity, setQuantity] = useState(1);
  const [userName, setUsername] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false); // New state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const orderData = {
      productId,
      variant,
      quantity,
      userName,
      phoneNumber,
      address,
    };

    try {
      const response = await fetch("/api/confrimOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Order successfully submitted:", result);

        // Mark order as placed
        setOrderPlaced(true);

        // Close the modal after 1 second
        setTimeout(() => {
          setOrderPlaced(false); // Reset the state
          onClose();
        }, 1000);
      } else {
        console.error("Failed to submit order", response.statusText);
        alert("Failed to place your order. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("An error occurred while placing your order. Please try again.");
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center ${
        !isOpen ? "hidden" : ""
      }`}
      onClick={onClose}
    >
      <div
        className="bg-[#0c1425] rounded-lg p-6 w-96"
        onClick={(e) => e.stopPropagation()}
      >
        {!orderPlaced ? (
          <>
            <h2 className="text-2xl font-bold mb-4 text-white">Place Your Order</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-white">Quantity</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded"
                  min="1"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">Username</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">Phone Number</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">Address</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded"
                >
                  Submit Order
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
            <p>We have received your order. We will contact you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderModal;



// import { useState } from "react";

// const OrderModal: React.FC<{
//   isOpen: boolean;
//   onClose: () => void;
//   productId: number;
//   variant: string;
// }> = ({ isOpen, onClose, productId, variant }) => {
//   const [quantity, setQuantity] = useState(1);
//   const [userName, setUsername] = useState("");
//   const [phoneNumber, setPhone] = useState("");
//   const [address, setAddress] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
  
//     // Prepare order data
//     const orderData = {
//       productId,
//       variant,
//       quantity,
//       userName,
//       phoneNumber,
//       address,
//     };
  
//     try {
//       // Call the API to send order data
//       const response = await fetch("/api/confrimOrder", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(orderData),
//       });
  
//       // Check if the request was successful
//       if (response.ok) {
//         const result = await response.json();
//         console.log("Order successfully submitted:", result);
//         onClose();
  
//       } else {
//         // Handle API errors
//         console.error("Failed to submit order", response.statusText);
//         alert("Failed to place your order. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting order:", error);
//       alert("An error occurred while placing your order. Please try again.");
//     }
//   };
  

//   return (
//     <div
//       className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center ${
//         !isOpen ? "hidden" : ""
//       }`}
//       onClick={onClose}
//     >
//       <div
//         className="bg-[#0c1425] rounded-lg p-6 w-96"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <h2 className="text-2xl font-bold mb-4 text-white">Place Your Order</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-white">Quantity</label>
//             <input
//               type="number"
//               value={quantity}
//               onChange={(e) => setQuantity(parseInt(e.target.value))}
//               className="w-full p-2 border border-gray-300 rounded"
//               min="1"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-white">Username</label>
//             <input
//               type="text"
//               value={userName}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-white">Phone Number</label>
//             <input
//               type="text"
//               value={phoneNumber}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-white">Address</label>
//             <textarea
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="flex justify-between">
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded"
//             >
//               Submit Order
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default OrderModal;
