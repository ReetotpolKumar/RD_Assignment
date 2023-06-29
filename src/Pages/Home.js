import React from "react";
import "./Home.css"

import Navbar from "../Component/Navbar/Navbar";
import { AiOutlineMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { BiLink } from "react-icons/bi";
import { Link } from "react-router-dom";

function Home() {
  return (
   <>
      <Navbar />
      <span className="text-dark">
        Proident anim&nbsp;<h4> nor nulla iste.</h4>
      </span>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <div className="text-para">
          <p>Minim modi yet omnis nor quia so minima.</p>

          <div className="maintopDiv_header">
            <div className="parabg">
              <p
                style={{
                  color: "white",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {" "}
                <AiOutlineMail /> Ipsum Lorem
              </p>
            </div>
            <div className="parabg2">
              <p style={{ display: "flex", flexDirection: "row" }}>
                {" "}
                <BiMap /> Ipsum Lorem
              </p>
            </div>
            <div className="parabg2">
              <p style={{ display: "flex", flexDirection: "row" }}>
                {" "}
                <BiLink /> Ipsum Lorem
              </p>
            </div>
          </div>
        </div>
        <div className="img_div">
          <div>
            <img
              className="mountain_img"
              src="https://images.unsplash.com/photo-1504829857797-ddff29c27927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <div className="img1_txt">
              <Link className="Bilink">
                {" "}
                <BiLink style={{ fontSize: "20px" }} /> Ipsum Lorem
              </Link>
              <Link className="Bilink">
                {" "}
                <BiLink fontSize={"20px"} /> Ipsum Lorem
              </Link>
              <Link className="Bilink">
                {" "}
                <BiLink fontSize={"20px"} /> Ipsum Lorem
              </Link>
            </div>
          </div>

          <div>
            <div className="TextDiv2">
              <h4 style={{ margin: "10px", color: "#003057" }}>
                Numquam. Esse aliquip do, magni.
              </h4>
              <p
                className="minima_txt"
                style={{
                  margin: "10px",
                  color: "#003057",
                  fontSize: "26px",
                  fontWeight: "900",
                }}
              >
                Minima ad for vitae sit
              </p>
              <Link style={{ margin: "10px" }}>Ipsum Lorem</Link>
            </div>

            <img
              className="second_Img"
              src="https://images.unsplash.com/photo-1444526110212-06a94d9a473c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MDExMn0"
              alt=""
            />
            <div className="sescond_Img2_Text">
              <span className="Ipsmbtn2">
                <BiLink className="bilinkSize" /> Ipsum Lorem
              </span>
              <p>Adipisicing unde vel so dolore, consequatur.</p>
              <p>Ipsum</p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
