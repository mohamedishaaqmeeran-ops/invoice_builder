import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen bg-blue-950 py-10">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-12">

                    <h1 className="text-3xl md:text-6xl font-extrabold text-yellow-500 mb-4">
                        Invoice Builder <span className="text-xs md:text-sm font-semibold italic">~ By Ishaaq</span>
                    </h1>

                    <p className="text-xl text-white italic">
                        Create and download invoices in seconds.
                    </p>
                    <div className="mt-10">
                        <Link
                            to="/invoice"
                            className=" text-white px-8 py-3 rounded-xl text-lg  hover:bg-yellow-500 hover:text-blue-950 border-2 border-yellow-500"
                        >
                            Create New Invoice
                        </Link></div>
                </div>
                <div className="grid md:grid-cols-3 gap-8 mb-12">

                    <div className="bg-blue-200 p-6 rounded-3xl text-center hover:-translate-y-2 transition">
                        <h3 className="text-xl font-bold mb-2">
                            Shop Details
                        </h3>
                        <p className="text-gray-700">
                            Add shop name, address and contact details.
                        </p>
                    </div>


                    <div className="bg-indigo-200 p-6 rounded-3xl text-center hover:-translate-y-2 transition">
                        <h3 className="text-xl font-bold mb-2">
                            Customer Info
                        </h3>
                        <p className="text-gray-700">
                            Enter customer details easily.
                        </p>
                    </div>


                    <div className="bg-purple-200 p-6 rounded-3xl text-center  hover:-translate-y-2 transition">
                        <h3 className="text-xl font-bold mb-2">
                            Product List
                        </h3>
                        <p className="text-gray-700">
                            Add products with price and quantity.
                        </p>
                    </div>


                    <div className="bg-green-200 p-6 rounded-3xl text-center hover:-translate-y-2 transition">
                        <h3 className="text-xl font-bold mb-2">
                            Auto Calculation
                        </h3>
                        <p className="text-gray-700">
                            Automatic total calculation.
                        </p>
                    </div>


                    <div className="bg-yellow-200 p-6 rounded-3xl text-center hover:-translate-y-2 transition">
                        <h3 className="text-xl font-bold mb-2">
                            PDF Download
                        </h3>
                        <p className="text-gray-700">
                            Download invoice as PDF.
                        </p>
                    </div>


                    <div className="bg-pink-200 p-6 rounded-3xl text-center hover:-translate-y-2 transition">
                        <h3 className="text-xl font-bold mb-2">
                            Easy to Use
                        </h3>
                        <p className="text-gray-700">
                            Simple and fast invoice creation.
                        </p>
                    </div>

                </div>


                <div className="bg-white p-6 rounded-3xl text-center border-3 border-yellow-500">

                    <h3 className="text-xl font-bold mb-2">
                        Product List
                    </h3>

                    <p className="text-gray-600">
                        Add products with price and quantity.
                    </p>

                </div>

                <br />

                <div className="bg-white  p-6 rounded-3xl text-center border-3 border-yellow-500">

                    <h3 className="text-xl font-bold mb-2">
                        Auto Calculation
                    </h3>

                    <p className="text-gray-600">
                        Automatic total calculation.
                    </p>

                </div>
                <br />


                <div className="bg-white p-6 rounded-3xl  text-center border-3 border-yellow-500">

                    <h3 className="text-xl font-bold mb-2">
                        PDF Download
                    </h3>

                    <p className="text-gray-600">
                        Export invoice as PDF.
                    </p>

                </div>




            </div>

        </div>
    );
};

export default Home;