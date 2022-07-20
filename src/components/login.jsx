import React from "react";
import Logo from "../image/gambarkon.png";
import style from "../style/login.css"

const LoginUi = () => {
  return (
    <div className="parentlogin" >
        <div className="childkuntul">
            <div className="gambar">
                <img src={Logo} alt="" width={300} height={300}/>
            </div>
            <div className="cardlogin">
                <h1 className="titlelogin">Selamat Datang!</h1>
                <input placeholder="Masukan Kontol" type={"email"}/>
                <input placeholder="Masukan memek" type={"password"}/>
                <button>Login</button>
            </div>
        </div>
    </div>
  );
};

export default LoginUi;

