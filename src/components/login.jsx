import React from "react";
import Logo from "../image/gambarkon.png";
import style from "../style/login.css"

const LoginUi = () => {
  return (
    <div className="parentlogin" >
        <div className="childkuntul" style={style.childKuntul}>
            <div className="gambar">
            <img src={Logo} alt="" width={10} height={20}/>
            </div>
            <div className="cardlogin">
                <h1 className="titlelogin">Selamat Datang!</h1>
                <input placeholder="Masukan username" type={"email"}/>
                <input placeholder="Masukan password" type={"password"}/>
                <button>Login</button>
                
            </div>
        </div>
    </div>
  );
};

export default LoginUi;

