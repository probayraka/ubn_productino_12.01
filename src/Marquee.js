import React from 'react'


export function Marquee(props) {
    const [seconds, setSeconds] = React.useState(300);
    
    React.useEffect(() => {
          let interval = setInterval(() => {
              if(seconds === -850)  setSeconds(300);
            setSeconds(seconds => seconds - 1);
          }, 1000);
        return () => clearInterval(interval);
      });

    return (
        <div>
<div className="marquee" style={{textIndent: seconds}}>{props.txt} </div>
    {/* <div>{seconds}</div> */}
        </div>
    
    )
}