import Select from "react-select";

export default function CartTotals({ cartTotals, discount }) {
  const countries = [
    { value: "USA", label: "USA" },
    { value: "UK", label: "UK" }
  ];

  return (
    <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
      <h4 className="mtext-109 cl2 p-b-30">Cart Totals</h4>
      <div className="flex-w flex-t bor12 p-b-13">
        <div className="size-208">
          <span className="stext-110 cl2">Subtotal:</span>
        </div>
        <div className="size-209">
          <span className="mtext-110 cl2">{`$${cartTotals}`}</span>
        </div>
      </div>
      <div className="flex-w flex-t bor12 p-t-15 p-b-30">
        <div className="size-208 w-full-ssm">
          <span className="stext-110 cl2">Shipping:</span>
        </div>
        <div className="size-209 p-r-18 p-r-0-sm w-full-ssm">
          <p className="stext-111 cl6 p-t-2">
            There are no shipping methods available. Please double check your
            address, or contact us if you need any help.
          </p>
          <div className="p-t-15">
            <span className="stext-112 cl8">Calculate Shipping</span>
            <div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9">
              <Select
                instanceId="Reac-select-1"
                options={countries}
                placeholder="Country..."
              />
              <div className="dropDownSelect2" />
            </div>
            <div className="bor8 bg0 m-b-12">
              <input
                className="stext-111 cl8 plh3 size-111 p-lr-15"
                type="text"
                name="state"
                placeholder="State /  country"
              />
            </div>
            <div className="bor8 bg0 m-b-22">
              <input
                className="stext-111 cl8 plh3 size-111 p-lr-15"
                type="text"
                name="postcode"
                placeholder="Postcode / Zip"
              />
            </div>
            {/* <div className="flex-w">
              <div className="flex-c-m stext-101 cl2 size-115 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer">
                Update Totals
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div
        className="flex-w flex-t p-t-27"
        style={{
          display: discount && discount != "wait" ? "flex" : "none"
        }}
      >
        <div className="size-208">
          <span
            className="mtext-101 cl2"
            style={{
              color: "#67e367"
            }}
          >
            Discount:
          </span>
        </div>
        <div className="size-209 p-t-1">
          <span
            className="mtext-110 cl2"
            style={{
              color: "#67e367"
            }}
          >
            -10%
          </span>
        </div>
      </div>
      <div className="flex-w flex-t p-t-27 p-b-33">
        <div className="size-208">
          <span className="mtext-101 cl2">Total:</span>
        </div>
        <div className="size-209 p-t-1">
          <span className="mtext-110 cl2">{`$ ${
            discount && discount != "wait"
              ? (cartTotals * 0.9).toLocaleString()
              : cartTotals.toLocaleString()
          }`}</span>
        </div>
      </div>
      <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
        Proceed to Checkout
      </button>
    </div>
  );
}
