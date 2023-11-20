
const VolumeControl = ({toggleMuteUnmute, isMute}) => {
  return (
    <div className='absolute top-[80%] left-[80%]'>
        <button onClick={()=>toggleMuteUnmute(!isMute)}>
          <img className='' src='/assets/volume_up.svg' alt='play icon' />
        </button>
    </div>
  )
}

export default VolumeControl