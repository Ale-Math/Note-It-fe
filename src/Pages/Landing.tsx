import { Android } from "../assets/Android"
import { Apple } from "../assets/Apple"
import { Logo } from "../Components/Icons/Logo"
import { Button } from "../Components/UI/Button"

export function Landing() {
    return <div className="w-screen h-screen overflow-x-hidden bg-stone-50"> 
    <div className="flex justify-between p-5 items-center w-screen sticky -top-0 bg-stone-50 mb-24">
        <a href="/">
        <Logo/>
        </a>
        <div>
        <Button variant="secondary" size="lg" text="Log in" onClick={()=>{}}></Button>
        <Button variant="primary" size="lg" text="Start for free" onClick={()=>{}}></Button>
        </div>
    </div>
    <div className="flex justify-center">
    <div className="flex justify-between p-5 pl-24 space-x-10">
        <div className="space-y-5 w-2/5">
        <p className="text-6xl font-mono font-bold ">Organize your work and life,finally.</p>
        <p className="text-2xl text-gray-600 font-mono">Simplify life for both you and your team with the world's #1 task manager and to-do list app.</p>
        <div className="flex items-center">
        <p className="text-gray-600 font-semibold font-mono">500K+ ★★★★★ reviews from </p>
        <div className="flex items-center">
        <Apple></Apple>
        <Android></Android>
        </div>
        </div>
        <div className="pt-5">
        <Button variant="primary" size="lg" text="Start for free" onClick={()=>{}}></Button>
        </div>
        </div>
        <div className="w-3/5 pl-2">
            <img src="/appbg.avif" className=" bg-red-100 rounded-lg"></img>
        </div>
    </div>
    </div>
    <div className="bg-[url('/Noteit.png')]">
        <div></div>
        <div></div>
        <div></div>
    </div>
    </div>
}