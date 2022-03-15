import React, { useState } from "react";
import "../assets/css/Login.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import loginbtn from "../assets/images/loginbtn.png";
import * as waxjs from "@waxio/waxjs/dist";
import logout from "./Logout";
import AnchorLink from "anchor-link";
import AnchorLinkBrowserTransport from "anchor-link-browser-transport";
import { useNavigate } from "react-router-dom";
//import { GetAssets } from "../Services";

// const wax = new waxjs.WaxJS('https://waxtestnet.greymass.com');

const wax = new waxjs.WaxJS({
  rpcEndpoint: "https://testnet.waxsweden.org",
  tryAutoLogin: true,
});

const transport = new AnchorLinkBrowserTransport();
const anchorLink = new AnchorLink({
  transport,
  chains: [
    {
      chainId:
        "f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12",
      nodeUrl: "https://testnet.waxsweden.org",
    },
  ],
});

const dapp = "NKFACTORY";
//const endpoint = "testnet.waxsweden.org";
const tokenContract = {
  WAX: "eosio.token",
};

async function wallet_login() {
  const wallet_userAccount = await wax.login();
  const wallet_session = wax.api;
  const anchorAuth = "active";
  console.log("wallet_userAccount---", wallet_userAccount);
  return wallet_userAccount;
}

const options = [
  { label: "https://wax.pink.gg", value: "pnik" },
  { label: "https://wax.eosphere.io", value: "eosphere" },
  { label: "https://api.wax.greeneosio.com", value: "greeneosio" },
];
function MyVerticallyCenteredModal(props) {
  const history = useNavigate();
  const handleLogin = () => {
    // const loggin =  wallet_login();
    wallet_login()
    
      .then((res) => {
       
        if (res) {
          localStorage.setItem("userName", res);
        
          //GetAssets();
          window.location.href = "/";
          //history('/');
        } else {
          walletLogout();
        }
      })
      .catch((err) => {
        walletLogout();
      });
  };

  const handleAnchorLogin = async () => {
    const identity = await anchorLink.login("mydapp");

    // Save the session within your application for future use
    const { session } = identity;
    console.log(`Logged in as ${session.auth}`);
    const action = {
      account: "eosio",
      name: "voteproducer",
      authorization: [session.auth],
      data: {
        voter: session.auth.actor,
        proxy: "greymassvote",
        producers: [],
      },
    };

    session.transact({ action }).then(({ transaction }) => {
      console.log(`Transaction broadcast! Id: ${transaction.id}`);
    });
  };

  const walletLogout = () => {
    logout();
  };

  return (
    <Modal
      {...props}
      size="md"
      // aria-labelledby="contained-modal-title-vcenter"
      centered
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Modal.Header closeButton>Select Wallet</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="my-2">
            <button
              type="button"
              class="btn btn btn-outline-wallet btn-md btn-block"
              style={{ height: "70px", width: "100%" }}
              onClick={handleLogin}
            >
              Wax Wallet
            </button>
          </div>
        </div>
        <div className="row">
          <div className="my-2">
            <button
              type="button"
              class="btn btn-secondary-wallet btn-md btn-block"
              style={{ height: "70px", width: "100%" }}
              onClick={handleAnchorLogin}
            >
              Anchor Wallet
            </button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Login = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="loginbg">
        <div className="box">
          <button
            type="button"
            class="btn-close ctm-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="headeing">
            <h1>Rpc Endpoint Available</h1>
          </div>

          <div className="select-style">
            <select>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="dropdownicon">
            <i className="fa fa-caret-down"></i>
          </div>

          <div className="loginbtn">
            <button>
              <img
                src={loginbtn}
                className="custombtn"
                onClick={() => setModalShow(true)}
              />
            </button>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Login;