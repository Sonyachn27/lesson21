import { useSelector } from "react-redux";
import { selectAllUsers } from "../Users/usersSlice";


const PostImg = ( {userId} ) => {
    
    const users = useSelector(selectAllUsers)

    const userPhotoOption = users.map(user =>  
        users.find((data)=> user.id === data.id).name
    )
    
    const arr =[]
    const userPhoto =  userPhotoOption.map((data) => (data.name === userId) ? arr.push(data.name) : null)
   console.log(userPhotoOption);
    
        switch(userPhotoOption) {
             case "Anakin Skywalker" : return <img className="img" src={"https://i.pinimg.com/736x/eb/c3/48/ebc348d81886de5912ac88c4c8dd6725.jpg"} /> 
            break;
             case "Leia Skywalker": return<img className="img" src={"https://images.photowall.com/products/62286/princess-leia-carrie-fisher.jpg?h=699&q=85"} />
            break;
            case "Han Solo": return<img className="img" src={"https://assets.gq.ru/photos/5d9f5df24cebd3000809e6d7/16:9/w_2560%2Cc_limit/anons.jpg"} />
            break;
            default: return <img className="img" src="data:image/jpeg;base64,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" /> 
       }
    }



   

export default PostImg