import Logo from '@/assets/Logo.png'



const Footer = () => {
  return (
      <footer className='bg-primary-100 py-16 mt-40'>
          <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
              <div className='mt-16 basis-1/2 md:mt-0'>
                  <img src={Logo} alt="logo" />
                  <p className='my-5'>It's a stage for human potential, a melting pot of ambition and aspiration. It's where individuals come to rewrite their stories, push their boundaries, and find the best versions of themselves</p>
                  <p>&copy; All Right Reserved.</p>
              </div>
              <div className='mt-16 basis-1/4 md:mt-0'>
                  <h4 className='font-bold'>Links</h4>
                  <p className='my-5'>Massa orsi senektus</p>
                  <p className='my-5'>Massa orsi senektus</p>
                    <p className='my-5'>Massa orsi senektus</p>
              </div>
                 <div className='mt-16 basis-1/4 md:mt-0'>
                  <h4 className='font-bold'>Contact information</h4>
                  <p className='my-5'>ygaginazy@gmail.com</p>
                  <p className='my-5'>Massa orsi senektus</p>
                    <p className='my-5'>+380 (63) 149-87-91</p>
              </div>
          
          </div>
    </footer>
  )
}

export default Footer