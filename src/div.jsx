import "./index.css";

function Div(props){
    
   return (
    
    <div className="fixed bottom-0 mx-10 p-1 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
                <div className=" bg-black sm:p-10 p-6 rounded-xl">
                    {props.children}
                </div>
            </div>
        
   )
};

export default Div;