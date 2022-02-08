import { collection, getFirestore, addDoc, serverTimestamp } from "firebase/firestore";
import { useContexto } from "../Context/CartContext";
import { useState } from "react";
import Swal from "sweetalert2";
  
  const Payment = () => {
    const { cart, setCart, setTotalQuan, totalPrice } = useContexto();
    const [buyer, setBuyer] = useState({
      name: "",
      lastName: "",
      telephone: "",
      email: "",
    });
  
    const info = (e) => {
      setBuyer({ ...buyer, [e.target.name]: e.target.value });
    };
  
    const sendOrder = () => {
      const order = {
        buyer: buyer,
        items: { ...cart },
        date: serverTimestamp(),
        total: totalPrice,
      };
  
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then(({ id }) => {
        Swal.fire({
          icon: "success",
          text: `Purchase nro ${id} is complete!! Thank you for trusting us!`,
        });
      });
  
      setBuyer({ name: "", lastName: "", phoneNumber: "", email: "" });
      setCart([]);
      setTotalQuan(0);
    };
  
    return (
      <>
        <div id="paymentContainer">
          <h3 className="titleForContainers">We're almost done!!</h3>
          <p className="paymentSubTitle">Please, complete your info</p>
          <form id="paymentForm">
            <input
              type="text"
              name="name"
              value={buyer.name}
              placeholder="Name"
              className="paymentInput"
              onChange={info}
              required
            />
            <input
              type="text"
              name="lastName"
              value={buyer.lastName}
              placeholder="Last Name"
              className="paymentInput"
              onChange={info}
              required
            />
            <input
              type="text"
              name="email"
              value={buyer.email}
              placeholder="E-mail"
              className="paymentInput"
              onChange={info}
              required
            />
            <input
              type="text"
              name="phoneNumber"
              value={buyer.phoneNumber}
              placeholder="Phone Number"
              className="paymentInput"
              onChange={info}
              required
            />
            <button
              type="submit"
              className="bntCart"
              onClick={sendOrder}
              disabled={
                !(
                  buyer.name &&
                  buyer.lastName &&
                  buyer.phoneNumber &&
                  buyer.email
                )
              }
            >
              Completado
            </button>
          </form>
        </div>
      </>
    );
  };
  
  export default Payment;