import { useState } from "react";
type Props ={
    togglePassword: boolean,
    setTogglePassword: React.Dispatch<React.SetStateAction<boolean>>

}
export function TogglePasswordVisibility({togglePassword, setTogglePassword}:Props){
    return(
        <div className="password-checkbox-container">

        <input
        className="password-toggle-checkbox"
          type="checkbox"
          onClick={() => {
            if (togglePassword) {
              setTogglePassword(false);
            } else {
              setTogglePassword(true);
            }
          }}
        />
        <p>Show password</p>
        </div>
    )
}