import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import NewArrivals from "./components/NewArrivals";
import NewArrivalsPage from "./NewArrivalsPage";
import NewArrivalFilterBrown from "./NewArrivalFilterBrown";
import SearchResult from "./SearchResult";
import TopSellingPage from "./TopSellingPage";
import ProductDetailPage from "./ProductDetailPage";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import PurchaseHistoryPage from "./PurchaseHistoryPage";
import TopSelling from "./components/TopSelling";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        {/* Home route with Banner, NewArrivals section, and TopSelling */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <NewArrivals />
              <TopSelling />
            </>
          }
        />
        {/* Route for full New Arrivals page */}
        <Route path="/new-arrivals" element={<NewArrivalsPage />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/top-selling" element={<TopSellingPage />} />
        <Route
          path="/new-arrivals-filter-brown"
          element={<NewArrivalFilterBrown />}
        />{" "}
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/purchase-history" element={<PurchaseHistoryPage />} />
        {/* New route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
