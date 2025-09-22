/App.js// src/App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Flow() {
  const [show, setShow] = useState({
    wheat:false, bread:false, grace:false,
    right:false, left:false, both:false, eye:false
  });
  const toggle = k => setShow(s => ({ ...s, [k]: !s[k] }));

  const Btn = ({id, label}) => (
    <button className={show[id] ? "active" : ""} onClick={() => toggle(id)}>
      {label}
    </button>
  );

  const Box = ({id, icon, title, refTxt}) => (
    <div className={`box ${show[id] ? "show" : ""}`}>
      {icon} <strong>{title}</strong><br/><small>{refTxt}</small>
    </div>
  );

  return (
    <div className="page">
      <style>{`
        .page { min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:16px; padding:24px; background:#f6f7fb; font-family: system-ui, sans-serif; }
        .card { width:100%; max-width:720px; background:#fff; border-radius:16px; padding:24px; box-shadow:0 10px 30px rgba(0,0,0,.08); }
        .controls { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:12px; }
        button { padding:10px 14px; border:1px solid #ddd; border-radius:10px; background:#fafafa; }
        button.active { border-color:#3b82f6; background:#eaf2ff; }
        .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px; }
        .box { padding:12px; border:1px solid #eee; border-radius:12px; background:#fcfefe; opacity:0; transform:translateY(6px); transition:all .28s ease; }
        .box.show { opacity:1; transform:none; }
        .foot { margin-top:16px; text-align:center; color:#6b7280; font-size:12px; }
      `}</style>

      <div className="card">
        <h1>Truth Equation Flow</h1>

        <div className="controls">
          <Btn id="wheat" label="Wheat & Tares" />
          <Btn id="bread" label="Bread of Life" />
          <Btn id="grace" label="Ace of Grace" />
          <Btn id="right" label="Right Hand" />
          <Btn id="left"  label="Left Hand" />
          <Btn id="both"  label="Both Hands" />
          <Btn id="eye"   label="The Single Eye" />
        </div>

        <div className="grid">
          <Box id="wheat" icon="🌾" title="Wheat & Tares" refTxt="Matt 13:30,40" />
          <Box id="bread" icon="🍞" title="Bread of Life" refTxt="John 6:35" />
          <Box id="grace" icon="🕊️" title="Ace of Grace" refTxt="Eph 2:8; 1 Cor 15:57" />
          <Box id="right" icon="✋" title="Right Hand" refTxt="Ex 15:6" />
          <Box id="left"  icon="✋" title="Left Hand" refTxt="Prov 11:1" />
          <Box id="both"  icon="🤝" title="Both Hands Embrace" refTxt="Deut 33:27" />
        </div>

        <div className="foot">HalleluYah — Mt 6:22</div>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{padding:24, fontFamily:"system-ui"}}>
      <p>Page not found.</p>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Flow />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}import React, { useState } from "react";

export default function App() {
  const [show, setShow] = useState({
    wheat:false, bread:false, grace:false,
    right:false, left:false, both:false, eye:false
  });

  const toggle = k => setShow(s => ({...s, [k]: !s[k]}));

  const Box = ({id, icon, title, refTxt}) => (
    <div className={`box ${show[id] ? "show" : ""}`}>
      {icon} <strong>{title}</strong><br/><small>{refTxt}</small>
    </div>
  );

  return (
    <div className="page">
      <style>{`
        .page { min-height:100vh; display:flex; align-items:center; justify-content:center; padding:24px; background:#f6f7fb; font-family: system-ui, sans-serif; }
        .card { width:100%; max-width:720px; background:#fff; border-radius:16px; padding:24px; box-shadow:0 10px 30px rgba(0,0,0,.08); }
        h1 { margin:0 0 16px; font-size:28px; line-height:1.2; color:#222; text-align:center; }
        .lead { margin:0 0 20px; color:#555; text-align:center; }
        .row { display:flex; gap:12px; flex-wrap:wrap; justify-content:center; margin:16px 0; }
        button { padding:10px 14px; border:1px solid #ddd; border-radius:10px; background:#fafafa; }
        button.active { border-color:#3b82f6; background:#eaf2ff; }
        .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px; margin-top:14px; }
        .box { padding:12px; border:1px solid #eee; border-radius:12px; background:#fcfcfe; opacity:0; transform:translateY(6px); transition:all .28s ease; }
        .box.show { opacity:1; transform:none; }
        .eye { margin:14px auto 0; width:110px; height:64px; border:2px solid #111; border-radius:55px/32px; position:relative; opacity:0; transform:translateY(6px); transition:all .28s ease; }
        .eye.show { opacity:1; transform:none; }
        .eye:after { content:""; position:absolute; top:50%; left:50%; width:26px; height:26px; transform:translate(-50%,-50%); background:#111; border-radius:50%; }
        .foot { margin-top:16px; text-align:center; color:#6b7280; font-size:12px; }
      `}</style>

      <div className="card">
        <h1>Truth Equation Flow</h1>
        <p className="lead">Eye at center • Wheat & Tares above • Hands below • Bread / Grace at the sides</p>

        <div className="row">
          {Object.keys(show).map(k => (
            <button key={k} className={show[k] ? "active":""} onClick={() => toggle(k)}>
              Toggle {k}
            </button>
          ))}
        </div>

        <div className="grid">
          <Box id="wheat" icon="🌾" title="Wheat & Tares" refTxt="Matt 13:30,40" />
          <Box id="bread" icon="🍞" title="Bread of Life" refTxt="John 6:35" />
          <Box id="grace" icon="🕊️" title="Ace of Grace" refTxt="Eph 2:8; 1 Cor 15:57" />
          <Box id="right" icon="✋" title="Right Hand" refTxt="Ex 15:6" />
          <Box id="left"  icon="🤚" title="Left Hand"  refTxt="Prov 11:1" />
          <Box id="both"  icon="🤝" title="Both Hands Embrace" refTxt="Deut 33:27" />
        </div>

        <div className={`eye ${show.eye ? "show":""}`} title="The Single Eye (Matt 6:22)"></div>
        <div className="foot">HalleluYah — Mt 6:22</div>
      </div>
    </div>
  );
}
