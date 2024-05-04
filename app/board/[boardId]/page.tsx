
import Loading from "./_components/loading"
import Canvas from "./_components/canvas"
import { Room } from "@/components/room"

interface BoardIdPageProps{
    params:{
        boardId:string
        
    }
}

const BoardIdPage = ({
    params
}:BoardIdPageProps) => {

    
    return (
        <Room roomId={params.boardId} fallback={<Loading/>}>
        <Canvas boardId={params.boardId}/>
        </Room>
        
    )
}

export default BoardIdPage