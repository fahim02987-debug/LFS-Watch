export default function ProductCard({product}){
  return (
    <div style={{border:'1px solid #D4AF37',padding:'10px',margin:'10px'}}>
      <img src={product.image} style={{width:'100%'}} />
      <h3>{product.name}</h3>
      <p>৳{product.price}</p>
      <button style={{background:'#D4AF37',padding:'8px',border:'none',width:'100%'}}>
        Add to Cart
      </button>
    </div>
  )
}