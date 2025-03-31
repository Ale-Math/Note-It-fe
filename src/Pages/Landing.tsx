import { Logo } from "../Components/Icons/Logo"
import { Button } from "../Components/UI/Button"

export function Landing() {
    return <div> 
    <div className="flex justify-between p-4 items-center fixed w-screen">
        <a href="/">
        <Logo/>
        </a>
        <div>
        <Button variant="secondary" size="lg" text="Log in" onClick={()=>{}}></Button>
        <Button variant="primary" size="lg" text="Start for free" onClick={()=>{}}></Button>
        </div>
    </div>
    <div>
        <h1>Organise your work and life, finally.</h1>
    </div>
    </div>
}