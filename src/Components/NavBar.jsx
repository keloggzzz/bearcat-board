import { useContext, useState } from "react";
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const { loggedIn, logout } = useContext(DataContext);
    const { jobPost, setJobPost } = useState("");


    return (
        <div className="navLinks grid grid-cols-5 px-8 py-1
    text-left items-center border-2">
            {/* Home, Inventory, and Contact Us Pages */}
            <div className="bcatPicNavBar"><img src="/Logo.png" alt="bcat" /></div>
            <div><a href="/Home"><b>HOME</b></a></div>
            <div><a href="/Profile"><b>PROFILE</b></a></div>
            <div><a href="/Connections"><b>CONNECTIONS</b></a></div>
            {/* user greeting and logout button */}
            <div className="text-right">
                {sessionStorage.getItem("logged") == 1 ? (
                    <>
                        Hello User!
                        <br></br>
                        <button
                            className="border-2 rounded-lg text-black bg-white px-5 cursor-pointer hover:bg-gray-200"
                            onClick={logout}
                        >
                            Logout

                        </button>
                    </>
                ) : (
                    <div className="text-right">
                        <label className="mr-2">Search: </label>
                        <div className="inline-flex items-center border-2 rounded-md">
                            <input
                                className="w-[15vw] p-2 h-10 outline-none"
                                type="text"
                                value={jobPost}
                                onKeyUp={(e) => setJobPost(e.target.value)}
                            />
                            <a href="/JobResults">

                            </a>
                        </div>
                    </div>

                )}
            </div>
        </div>
    );
}
