import * as GlobalStyle from "./gStyleScript.js";
import * as ErrorHandler from "./errorHandler.js";
import { extLine } from "./errorHandler.js";
export function cleanLoginPhs() {
  const userInp = document.getElementById("user");
  const pwInp = document.getElementById("pw");
  const restorePh = function restorePh(inp, phVal = "") {
    if (inp.value === "") {
      setTimeout(() => {
        inp.placeholder = phVal;
      }, 5000);
    }
  };
  if (userInp instanceof HTMLInputElement) {
    userInp.addEventListener("click", () => {
      userInp.placeholder = "";
      restorePh(userInp, "Nome de Usuário");
    });
    userInp.addEventListener("input", () => {
      restorePh(userInp, "Nome de Usuário");
    });
  } else
    ErrorHandler.inputNotFound(
      userInp,
      "userInp in cleanLoginPhs()",
      extLine(new Error())
    );
  if (pwInp instanceof HTMLInputElement) {
    pwInp.addEventListener("click", () => {
      pwInp.placeholder = "";
      restorePh(pwInp, "Senha");
    });
    pwInp.addEventListener("input", () => {
      restorePh(pwInp, "Senha");
    });
  } else
    ErrorHandler.inputNotFound(
      pwInp,
      "pwInp in cleanLoginPhs()",
      extLine(new Error())
    );
  return [userInp, pwInp];
}
export function addListenerShowPw() {
  const spanShowPw = document.getElementById("spanShowPw");
  if (spanShowPw instanceof HTMLElement) {
    spanShowPw.addEventListener("click", () => {
      callbackShowPw(spanShowPw);
    });
  } else
    ErrorHandler.elementNotFound(
      spanShowPw,
      "spanShowPw in addListenerShowPw()",
      extLine(new Error())
    );
  return spanShowPw;
}
export function callbackShowPw(spanShowPw) {
  if (spanShowPw instanceof HTMLElement) {
    const innerIcon = spanShowPw.querySelector(".bi");
    const pwInp = document.getElementById("pw");
    if (pwInp instanceof HTMLInputElement) {
      if (innerIcon?.classList.contains("bi-eye-fill")) {
        pwInp.type = "text";
        spanShowPw.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
          <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
          <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
        </svg>
        `;
      } else if (innerIcon?.classList.contains("bi-eye-slash-fill")) {
        pwInp.type = "password";
        spanShowPw.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
        </svg>
        `;
      } else console.error(`innerIcon class not validated`);
    } else
      ErrorHandler.inputNotFound(
        pwInp,
        "pwInp in callbackShowPw()",
        extLine(new Error())
      );
  } else
    ErrorHandler.elementNotFound(
      spanShowPw,
      "spanShowPw in callbackShowPw()",
      extLine(new Error())
    );
}
export function addListenerSubmitBtn() {
  const submitBtn = document.getElementById("submitBtn");
  if (submitBtn instanceof HTMLButtonElement) {
    submitBtn.addEventListener("click", () => {
      callbackSubmitBtn();
    });
  } else
    ErrorHandler.elementNotFound(
      submitBtn,
      "submitBtn in DOM inicialization",
      extLine(new Error())
    );
  return submitBtn;
}
export function callbackSubmitBtn() {
  const userInp = document.getElementById("user");
  const pwInp = document.getElementById("pw");
  if (userInp instanceof HTMLInputElement) {
    const userValue = userInp.value;
    if (userValue === "" || userValue.length < 5) {
      GlobalStyle.highlightChange(userInp);
      userInp.setCustomValidity("");
      userInp.placeholder = "Usuário inválido";
      setTimeout(() => {
        userInp.placeholder = "";
      }, 5000);
      userInp.addEventListener("input", () => {
        userInp.style.color = "black";
      });
    }
  } else
    ErrorHandler.inputNotFound(
      userInp,
      "userInp in callbackSubmitBtn()",
      extLine(new Error())
    );
  if (pwInp instanceof HTMLInputElement) {
    const pwValue = pwInp.value;
    if (pwValue === "" || pwValue.length < 5) {
      GlobalStyle.highlightChange(pwInp);
      pwInp.setCustomValidity("");
      pwInp.placeholder = "Senha inválida";
      setTimeout(() => {
        pwInp.placeholder = "";
      }, 5000);
      pwInp.addEventListener("input", () => {
        pwInp.style.color = "black";
      });
    }
  } else
    ErrorHandler.inputNotFound(
      pwInp,
      "passwordInp in callbackSubmitBtn()",
      extLine(new Error())
    );
  return [userInp, pwInp];
}
cleanLoginPhs();
addListenerShowPw();
addListenerSubmitBtn();
