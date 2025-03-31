import { Android } from "../assets/Android"
import { Apple } from "../assets/Apple"
import { Logo } from "../Components/Icons/Logo"
import { Button } from "../Components/UI/Button"

export function Landing() {
    return <div> 
    <div className="flex justify-between p-4 items-center w-screen sticky bg-white -top-0">
        <a href="/">
        <Logo/>
        </a>
        <div>
        <Button variant="secondary" size="lg" text="Log in" onClick={()=>{}}></Button>
        <Button variant="primary" size="lg" text="Start for free" onClick={()=>{}}></Button>
        </div>
    </div>
    <div className="flex items-center">
        <div className="flex-col">
        <p className="text-5xl">Organise your work and life, finally.</p>
        <p>Simplify life for both you and your team with the world's #1 task manager and to-do list app.</p>
        <div className="flex items-center">
        <p className="text-gray-600">500K+ ★★★★★ reviews from </p>
        <div className="flex items-center">
        <Apple></Apple>
        <Android></Android>
        </div>
        </div>
        <Button variant="primary" size="lg" text="Start for free" onClick={()=>{}}></Button>
        </div>
        <div>
            <img src="/appbg.avif" className="w-100 h-80"></img>
        </div>
    </div>
    <div className="bg-[url('/Noteit.png')]">
        <div></div>
        <div></div>
        <div></div>
    </div>
    </div>
}