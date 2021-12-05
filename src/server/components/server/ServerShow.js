// Fonctionnalité 
import React, { } from 'react'
import { BsQuestionLg } from 'react-icons/bs';
import 'firebase/compat/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setServerInfo} from '../../../store/ServerSlice'

let piouww = new Audio("/piouw.mp3")
const piouw = () => {
  piouww.play()
}

function ServerShow({ id, serverName}){
    const dispatch = useDispatch();
    const history = useHistory();
    
    // Redux
    const setServer = () => {
        dispatch(
          setServerInfo({
            serverId: id,
            serverName: serverName,
          })
        );
    
        history.push(`/server/${id}`);
      };
    
    const SideBarIcon = ({ icon }) => (
        <div className="sidebar-icon group">
          {icon}
          <span class="sidebar-tooltip group-hover:scale-100">
            {serverName}
          </span>
          </div>

 )
    return (

        <div onClick={() => { setServer(); piouw();}}><SideBarIcon icon={<BsQuestionLg size
                   ="23" />} />
       </div>
    )
}


export default ServerShow
