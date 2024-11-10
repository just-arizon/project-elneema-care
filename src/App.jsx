import React, { useState, Suspense } from "react";
// import { Button } from "@/components/ui/button";
import Navbar from "./my-components/Navbar";
import Footer from "./my-components/Footer";
import Info from "./my-components/Info";
import ScrollToTop from './my-components/scrollup';

import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Spinner } from "./my-components/spinner";
import GuideBooklet from "./pages/guideBooklet";


function App() {

// Lazy load the pages
const Home = React.lazy(() => import('./pages/home'));
const Padyarinya = React.lazy(() => import('./pages/padYarinya'));
const BoardMembers = React.lazy(() => import('./pages/boardMembers'));
const About = React.lazy(() => import('./pages/aboutUs'));
const Contact = React.lazy(() => import('./pages/contactUs'));
const Founder = React.lazy(() => import('./pages/founder'));
const TeamMembers = React.lazy(() => import('./pages/ourTeam'));
const Support = React.lazy(() => import('./pages/supportUs'));
const Blog = React.lazy(() => import('./pages/blog'));  
const Scholarship = React.lazy(() => import('./pages/padScholarship'));
const WidowSmile = React.lazy(() => import('./pages/widowSmile'));
const PadOnTheStreet = React.lazy(() => import('./pages/padOnStreet'));
const Error = React.lazy(() => import('./pages/errorPage'));


// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-64 w-full">
     <Spinner/>
  </div>
);

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
}

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
         <Route 
            index 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Home />
              </Suspense>
            } 
          />
         <Route 
            path="/founder" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Founder />
              </Suspense>
            } 
          />
         <Route 
            path="/pad-a-yarinya" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Padyarinya />
              </Suspense>
            } 
          />
         <Route 
            path="/about" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <About />
              </Suspense>
            } 
          />
         <Route 
            path="/contact" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Contact />
              </Suspense>
            } 
          />
         <Route 
            path="/blog" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Blog />
              </Suspense>
            } 
          />
         <Route 
            path="/support" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Support />
              </Suspense>
            } 
          />
         <Route 
            path="/our-team" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <TeamMembers />
              </Suspense>
            } 
          />
         <Route 
            path="/board-members" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <BoardMembers />
              </Suspense>
            } 
          />
         <Route 
            path="/schorlarship-scheme" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Scholarship />
              </Suspense>
            } 
          />
         <Route 
            path="/widows-smile" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <WidowSmile />
              </Suspense>
            } 
          />
         <Route 
            path="/pad-on-the-street" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PadOnTheStreet />
              </Suspense>
            } 
          />
         <Route 
            path="/guide-booklet" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <GuideBooklet />
              </Suspense>
            } 
          />
         <Route 
            path="*" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Error />
              </Suspense>
            } 
          />
      </Route>
    )
  );



  return (
    <div className="">
      <Info />
      <Navbar />
      <div className="">
        <RouterProvider router={router} />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
