import one from "../assets/images/img-1.jpg"
import two from "../assets/images/img-2.jpg"
import three from "../assets/images/img-3.jpg"

function Products()
{
  return(
    <div class="products">
    <div class="box">
        <img src={one} alt="one"></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti expedita sit dolores veniam sint
            quidem quos repellendus maxime enim excepturi?</p>
    </div>
    <div class="box">
        <img src={two} alt="two"></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti expedita sit dolores veniam sint
            quidem quos repellendus maxime enim excepturi?</p>
    </div>
    <div class="box">
        <img src={three} alt="three"></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti expedita sit dolores veniam sint
            quidem quos repellendus maxime enim excepturi?</p>
    </div>

</div>
  )
}

export default Products