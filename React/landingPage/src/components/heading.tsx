import dpImage from '../assets/dp.jpg';

function Heading() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className="dp">
            <img src={dpImage} alt="" height={400}/>
        </div>
      <h1>BADHON NATH JOY</h1>
      <p><b>Email:</b> joy184110@gmail.com</p>
      <p><b>Phone:</b> 01608902618</p>
      <p><b>Github:</b> <a href="http://github.com/8ad40n">8ad40n</a></p>
      </div>

    </>
  )
}

export default Heading