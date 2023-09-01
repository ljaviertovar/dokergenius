import '@/styles/loader-animation.css'

interface Props {
  customBg: string

}
export default function LoaderIcon({customBg}:Props) {
  return (
    <div className='dot-wave'>
      <div className={`dot-wave__dot ${customBg}`}></div>
      <div className={`dot-wave__dot ${customBg}`}></div>
      <div className={`dot-wave__dot ${customBg}`}></div>
      <div className={`dot-wave__dot ${customBg}`}></div>
    </div>
  )
}
