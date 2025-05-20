
import PromotionBanner from "./components/PromotionBanner"

function App() {
   const user= 'Person1'
   const featureProduct={
    name:'Noice wireless earphones',
    price:1999,
    status:true,
   }

  return (
    <>
      <PromotionBanner/>
     <main className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to user: {user}</h1>
      <section className="bg-cyan-100 shadow p-4 rounded-lg max-w-md">
          <h2 className="text-xl font-semibold mb-2">Feature Products</h2>
          <p><strong>Name:</strong>{featureProduct.name}</p>
          <p><strong>Price:</strong> {featureProduct.price}</p>
          <p><strong>Status:</strong>{' '}
          <span className={featureProduct.status? "text-green-500":"text-red-500"}>{featureProduct.status? 'Available':'Out of stock'}</span>
          </p>
           
      </section>

     </main>
    </>
  )
}

export default App
