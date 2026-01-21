import React from 'react'

export default function Skills() {
  return (
   
     <dialog id="my_modal_4" className="modal z-10 flex flex-col justify-center  text-white">
  <div className="modal-box w-11/12 max-w-5xl bg-black border border-orange-500 text-center">
    <h3 className="font-bold text-4xl">Skills</h3>
    <p className="py-4">Click the button below to close</p>
   
    </div>
     <div className="modal-action w-full flex justify-center">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className=" bg-orange-500 p-3 cursor-pointer rounded-lg font-bold ">Close</button>
      </form>
  </div>
</dialog>
  )
}
