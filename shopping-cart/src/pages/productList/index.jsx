import { ShoppingCartContext } from "../../context"
import { useContext } from "react";


function ProductListPage(){
    const getContextValue = useContext(ShoppingCartContext);
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7x">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-3xl font-extralight text-gray-950 sm:text-4xl ">
                        Our Feature Product
                    </h2>
                </div>
            </div>
        </section>
    )
}
export default ProductListPage