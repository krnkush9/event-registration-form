import { useState } from "react";
import './Form.css';

function Form() {
    // storing input data
    const [formData, setFormData] = useState({
        name: "", email: "", age: "", guestName: "No"
    })

    // for tracking yes or no radio button
    const [guest, setGuest] = useState(false);

    // for display data
    const [showData, setShowData] = useState(false);

    const changeHandler = (event) => {
        // condition for age (value will one or greatet than one)
        if (event.target.name === "age" && event.target.value < 1) {
            return;
        }

        // set guest value true so that guest fill can visible
        if (event.target.value === "Yes") {
            setGuest(true);
            return;
        }
        // set guest value false so that guest fill can not visible
        else if (event.target.value === "No") {
            formData.guestName = "No";
            setGuest(false);
            return;
        }

        // storing input data with the previous data
        setFormData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    // form submit handler
    const submitHandler = (event) => {
        event.preventDefault();
        // showData will true then all data will visible
        setShowData(true);
    }

    return (
        <div className="lg:w-[60%] md:w-[60%] w-full shadow-lg mx-auto">
            {/* heading */}
            <p className="text-center my-3 font-bold text-2xl">
                Event Registration Form
            </p>

            {/* ternary operator for tracking, data will display or not. 
When form will submit then showData will be true and the data will 
display otherwise form will display*/}
            {
                showData ? <></> :
                    <div className="w-full p-4">
                        {/* form */}
                        <form onSubmit={submitHandler}>
                            {/* Name field */}
                            <label for="name"
                                className="text-lg mb-2">Name
                                <span className="text-lg text-red-600 "> *</span></label>
                            <input required type="text" placeholder="Name" name="name" id="name" onChange={changeHandler} className="w-full p-2  border-2 mb-3 rounded-md" />

                            {/* Email{/* field */}
                            <label for="email" className="text-lg mb-2">Email
                                <span className="text-lg text-red-600 "> *</span>
                            </label>
                            <input required type="email" placeholder="Email" name="email" id="email" onChange={changeHandler} className="w-full p-2 rounded-md border-2" />

                            {/* Age field */}
                            <label for="age" className="text-lg mb-2">Age
                                <span className="text-lg text-red-600"> *</span>
                            </label>
                            <input required type="number" placeholder="Age" name="age" id="age" min={1} onChange={changeHandler} className="w-full p-2 border-2 rounded-md appearance-none m-0" />

                            {/* Are you attending with a guest?  <-field */}
                            <div className="flex flex-col lg:flex-row gap-x-4 mt-2 mb-1">
                                <label className="text-lg mb-2">Are you attending with a guest? </label>
                                <div className="mt-0 flex gap-x-2">

                                    {/* radio and yes button*/}
                                    <input type="radio" name="guest" value="Yes" onChange={changeHandler} className="-mt-2" />
                                    <label className="text-lg">Yes</label>

                                    {/* radio and no button  */}
                                    <input type="radio" name="guest" value="No" onChange={changeHandler} className="-mt-2" />
                                    <label className="text-lg ">No</label>
                                </div>
                            </div>

                            {/* when user will click on the yes button, guest will true and 
then guest field will be visible*/}
                            {
                                guest ?
                                    <div>
                                        <label for="guestName" className="text-lg mb-2">Guest Name
                                            <span className="text-lg text-red-600"> *</span>
                                        </label>
                                        <input required type="text" placeholder="Guest Name" name="guestName" id="guestName" onChange={changeHandler} className="w-full p-2 border-2 rounded-md mb-3"
                                        />
                                    </div> : <></>
                            }

                            {/* submit button */}
                            <button className="px-3 py-2 bg-[#4ea1e9]
                             rounded-md text-white tracking-wider 
                             hover:bg-blue-500 transition-all duration-300 ease-out">
                                Submit
                            </button>
                        </form>
                    </div>
            }

            {/* when form will submit then showData will be true and then 
data will display */}
            {
                showData ?
                    <div className="w-full px-10 pb-4">

                        {/* name */}
                        <div className="text-lg mb-2 flex flex-col md:flex-row lg:flex-row gap-x-3  ">
                            <p className="font-bold">Name:</p>
                            <p>{formData.name}</p>
                        </div>

                        {/* email */}
                        <div className="text-lg mb-2 flex flex-col md:flex-row lg:flex-row gap-x-3">
                            <p className="font-bold">Email: </p>
                            <p>{formData.email}</p>
                        </div>

                        {/* age */}
                        <div className="text-lg mb-2 flex gap-x-3">
                            <p className="font-bold">Age: </p>
                            <p>{formData.age}</p>
                        </div>

                        {/* Are you attending */}
                        <div className="text-lg mb-2 flex flex-col md:flex-row lg:flex-row gap-x-3">
                            <p className="font-bold">Are you attending with a guest? </p>
                            <p>{formData.guestName}</p>
                        </div>
                    </div> : <></>
            }
        </div>
    )
}
export default Form;