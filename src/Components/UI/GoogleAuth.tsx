import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { Button } from "./Button";
import { GoogleIcon } from "../Icons/Google";

export function GoogleAuth() {
  return (
    <div className="w-full">
      <LoginSocialGoogle
        onResolve={({ provider, data }) => {
          console.log(provider, data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
        client_id={
          "93699822635-uqb07g4rp80brpvp99aogemgc4h22074.apps.googleusercontent.com"
        }
      >
        <Button
          icon={<GoogleIcon></GoogleIcon>}
          text="Continue with Google"
          variant="auth"
          size="xl2"
          onClick={() => {}}
          width="w-full"
          space="&nbsp;"
        ></Button>
      </LoginSocialGoogle>
    </div>
  );
}
