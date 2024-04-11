import { useDispatch, useSelector } from "react-redux"
import { LogItemComponent } from "./log-item-component"

export const LogListComponent = () => {
    const logs = useSelector((state) => state.log.list)

    return (
        <>
            { logs && logs.length > 0 && 
                <>
                    <h1 className='text-3xl pb-5'>Logs</h1>
                    {logs.map((item, index) => (
                        <LogItemComponent log={item} index={index} key={item.id}></LogItemComponent>
                    ))}
                </>
            }
        </>
    )

}