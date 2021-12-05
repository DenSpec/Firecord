// Fonctionnalité // 
import React, { } from 'react'
import { BsPlus, BsQuestionLg } from 'react-icons/bs';
import { FaDiscord} from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';
import { HiPlusCircle, HiHashtag } from "react-icons/hi";
import 'firebase/compat/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setChannelInfo} from '../../../../store/ChannelSlice'


function ChannelShow({ id, channelName}){
    const dispatch = useDispatch();
    const history = useHistory();
// Redux
    const setChannel = () => {
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        );
    
        history.push(`/server/channel/${id}`);
      };
    return (

<div class="cursor-pointer" onClick={setChannel}>
    <br></br>
    <div
      className="text-white font-medium flex items-center cursor-pointer p-1 rounded-md  hover:text-green-500"
      onClick={setChannel}
    >
      <HiHashtag size="30px" className="h-5 mr-2" /> <p style={{fontSize: '20px'}}>{channelName}</p>
    </div>
    </div> 
)
}


export default ChannelShow
