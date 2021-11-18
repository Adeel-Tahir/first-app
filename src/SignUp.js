import React from "react";
import './SignUp.css'
import Header from "./Header";
import { Link } from 'react-router-dom';

function SignUp(){;
return(
  <>
    <Header/>
    <main class="Layout__Content__3KSp3">
      <div class="Auth__Auth__1TInt">
        <form>
          <div class="Input__Input__1VROp">
            <label class="Input__Label__1tOSX"></label>
            <input type="email" class="Input__InputElement__3TB0k" placeholder="E-mail Address" />
          </div>
          <div class="Input__Input__1VROp">
            <label class="Input__Label__1tOSX"></label>
            <input type="password" class="Input__InputElement__3TB0k" placeholder="Password" />
          </div>
          <Link to="/checkout">
            <button class="Button__Button__ajevi Button__Success__1DMln" >SUBMIT</button>
          </Link>
        </form>
        <Link to="/checkout">
        <button class="Button__Button__ajevi Button__Danger__18hYt"  >SIGNIN</button>
        </Link>
      </div>
    </main>
  </>
)
}
export default SignUp
