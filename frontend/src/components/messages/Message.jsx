// import React from 'react'

// const Message = () => {
//   return (
//     <div className=''>
//         <div className='chat-image avatar'>
//             <div className='w-10 rounded-full'>
//                 <img src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png' alt="" />
//             </div>
//         </div>
//         <div className={'chat-bubble text-white bg-blue-500'}>Hi! Whats Upp?</div>
//    <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>02:23</div>
   
//     </div>
//   )
// }

// export default Message
import React from 'react'

const Message = () => {
  return (
    <div className='flex justify-end items-end mb-2'> {/* Aligns the message and profile to the right */}
      <div className='flex flex-col items-end'>
        <div className={'chat-bubble text-white bg-blue-500 px-4 py-2 rounded-lg max-w-[300px]'}>
          Hi! What's Up?
        </div>
        <div className='chat-footer opacity-50 text-xs mt-1'>
          02:23
        </div>
      </div>
      <div className='chat-image avatar ml-2'> {/* Profile image next to the message */}
        <div className='w-10 rounded-full'>
          <img src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Message
