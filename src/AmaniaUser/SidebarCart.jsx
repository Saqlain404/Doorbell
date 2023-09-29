import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartList } from './httpServices/dashHttpService';

const SidebarCart = () => {

    const user = localStorage.getItem("user_id");

    const [count, setCount] = useState(1);
  
    
    const [product, setProduct] = useState([]);
  
    const Products = async () => {
      const { data } = await CartList(user);
      if (!data.error) {
        setProduct(data.results?.listing);
      }
    };
  
    
  

    // useEffect(() => {
    //  Products()
    // }, [])
  return (
    <> 
    <div
            className="offcanvas offcanvas-end cart_canvas"
            tabIndex={-1}
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header border-bottom">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                Shopping Cart
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            {product?.map((item,index)=> (
            <div className="offcanvas-body">
              <div className="cart_canvas_inner">
                <div className="row cart_Product border-bottom py-3">
                  <div className="col-auto">
                    <a className="cart_img" href="javascript:;">
                      <img src="/img/product1.png" alt="" />
                    </a>
                  </div>
                  <div className="col ps-0">
                    <div className="row mb-2">
                      <div className="col">
                        <div className="cart_pdetails">
                          <a className="cart_pname">
                          {item?.products[0]?.products_Id?.productName}
                          </a>
                          <p>{item?.products[0]?.products_Id?.description}</p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <a className="delete_product" href="javascript:;">
                          <i className="fa-regular fa-trash-can" />
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="cart_pdetails">
                          <div className="number">
                            <span className="minus" onClick={() => 
                          {
                            if(count>1)
                            setCount(count - 1)}}>-</span>
                            <input type="text" value={count} />
                            <span className="plus" onClick={() => setCount(count + 1)}>+</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <span className="product_pricee">${item?.products[0]?.products_Id?.Price * count}</span>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
            ))}
            <div className="offcanvas-footer">
        {product?.map((item,index)=> (

              <div className="cart_bottom row">
                <div className="col-6">
                  <h3 className="subtotal">Subtotal ({count} item) :</h3>
                </div>
                <div className="col-6 text-end">
                  <div className="price_total">${item?.products[0]?.products_Id?.Price * count}</div>
                </div>
                <div className="col-12 mt-2">
                <Link to={"/User/Home/Checkout"}
                state={{qty: count}} className="text-decoration-none">
                  <a
                    className="comman_btn shadow d-flex justify-content-center"
                    href="checkout.html"
                  >
                    <span>Checkout</span>
                  </a>
                  </Link>
                </div>
              </div>
        ))}
            </div>
          </div>
    </>
  )
}

export default SidebarCart;







 /* <div className="row cart_Product border-bottom py-3">
                  <div className="col-auto">
                    <a className="cart_img" href="javascript:;">
                      <img src="/img/product1.png" alt="" />
                    </a>
                  </div>
                  <div className="col ps-0">
                    <div className="row mb-2">
                      <div className="col">
                        <div className="cart_pdetails">
                          <a href="javascript:;" className="cart_pname">
                            Wi-Fi Smart Video Doorbell
                          </a>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <a className="delete_product" href="javascript:;">
                          <i className="fa-regular fa-trash-can" />
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="cart_pdetails">
                          <div className="number">
                            <span className="minus">-</span>
                            <input type="text" defaultValue={0} />
                            <span className="plus">+</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <span className="product_pricee">$24.99</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row cart_Product border-bottom py-3">
                  <div className="col-auto">
                    <a className="cart_img" href="javascript:;">
                      <img src="/img/product1.png" alt="" />
                    </a>
                  </div>
                  <div className="col ps-0">
                    <div className="row mb-2">
                      <div className="col">
                        <div className="cart_pdetails">
                          <a href="javascript:;" className="cart_pname">
                            Wi-Fi Smart Video Doorbell
                          </a>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <a className="delete_product" href="javascript:;">
                          <i className="fa-regular fa-trash-can" />
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="cart_pdetails">
                          <div className="number">
                            <span className="minus">-</span>
                            <input type="text" defaultValue={0} />
                            <span className="plus">+</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <span className="product_pricee">$24.99</span>
                      </div>
                    </div>
                  </div>
                </div> */