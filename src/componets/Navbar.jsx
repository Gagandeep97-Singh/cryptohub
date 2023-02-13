import { Link } from 'react-router-dom'
import logo from '../componets/Assist/cryptologo.png'


function Navbars() {
    
    return (

        
        <div className="flex justify-between h-[5rem] bg-[#20274d] shadow-2xl md:pl-10 pr-10">
            <div className="flex">
                <Link to="/">
            <div className="flex p-3" >
                    <div className=" cursor-pointer w-14 h-14" >
                        <img src={logo} alt="logo_img" className="w-100%" />
                    </div>
                    <h1 className="text-center font-bold text-white text-2xl ml-3 mt-3 font-mono 2xl:hidden">
                        Cryphub
                    </h1>
            </div>
                </Link>
            </div>

            <button className="text-white font-medium text-[1.2rem] cursor-pointer">
                <Link to="/login">
                    Login 
                </Link>
            </button>
        </div>


    );
}

export default Navbars;