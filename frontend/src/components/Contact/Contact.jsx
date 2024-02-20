import { Button, Card, Label, TextInput, Textarea } from 'flowbite-react';
import React from 'react'

const Contact = () => {

  const [result, setResult] = React.useState("");


 async function handleContactFormSubmit(event){
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d2718fbf-a525-490a-8439-badbc4a2951e");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((response) => response.json());

    if (res.success) {
     
      setResult("Thank you for contacting us.");
    
    } else {
      
      setResult("Error :: Please submit again");
    }
    document.getElementById("contactForm").reset();
  }

  return (
    <div className='flex justify-center items-center'>
      
      <Card className='border-2 rounded-md p-3 bg-white my-3'>

        <form className="flex max-w-md flex-col gap-4" id='contactForm' onSubmit={handleContactFormSubmit}>

        <input type="hidden" name="subject" value="New contact submission "/>
        <input type="hidden" name="from_name" value="Track My Jobs"></input>
        {/* <input type="hidden" name="redirect" value="https://web3forms.com/success?title=Contact%20form%20submitted%20&desc=Thank%20you%20for%20contacting%20us.%20We%20will%20get%20back%20to%20you%20shortly."/> */}
        <input type="checkbox" name="botcheck" id="" className='hidden' style={{display: 'none'}}/>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput id="name" type="text" name="name" placeholder="John Doe" required autoComplete='off' />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput id="email" type="email" name="email" placeholder="name@flowbite.com" required autoComplete='off'/>
          </div>

          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="message" value="Your message" />
            </div>
            <Textarea id="message" name='message' placeholder="Your message here..." required rows={10} cols={50} />
          </div>

          <div>
            <Button color="success" type='submit' >Submit</Button>
          </div>
        </form>
        <span className='dark:text-white'>{result}</span>
      </Card>
    </div>
  )
}

export default Contact