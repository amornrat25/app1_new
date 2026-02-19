import React from "react";
import { BrowserRouter,NavLink,Route,Routes,Navigate } from "react-router-dom";

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/member" Component={Member} />
        <Route path="/contact" element={<div style={{ textAlign: 'center' }}>Contact Page</div>} />
        <Route path="/*" element={<div style={{ textAlign: 'center' }}>Error 404 Not Found</div>} />
      </Routes>