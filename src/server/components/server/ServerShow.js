// Fonctionnalité // 
import React, { } from 'react'
import { BsQuestionLg } from 'react-icons/bs';

// Firebase
import 'firebase/compat/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setServerInfo} from '../../../store/ServerSlice'
function ServerShow({ id, serverName}){
    const dispatch = useDispatch();
    const history = useHistory();
    
    // Initiliation de firebase
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

        <div onClick={setServer}> <SideBarIcon icon={<BsQuestionLg size
                   ="23" />} />
       </div>
    )
}


export default ServerShow