import reactdom from "react-dom/client"
import one from "./task.jpg"
const root = reactdom.createRoot(document.getElementById("root"))

function Image() 
{
  return(<div>
    <img src={one}alt="one"></img>
    <h2>jullie rabit ears</h2>

    </div>
    
  )  
}
root.render(
  <Image> </Image>
)