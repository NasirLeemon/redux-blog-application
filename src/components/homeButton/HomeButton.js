import { Link } from "react-router-dom"

function HomeButton(){
    return (
        <div class="container mt-8">
      <Link to='/' class="inline-block text-gray-600 home-btn" id="lws-goHome"><i
          class="mr-2 fa-solid fa-house"></i>Go Home</Link>
    </div>
    )
}

export default HomeButton